import React, { useEffect, useState } from 'react';
import { Alert, Row, Col, Container, Button, Form } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom';
import { axiosRes } from '../../api/axiosDefaults';
import { useCurrentUser, useSetCurrentUser } from '../../contexts/CurrentUserContext';
import appStyles from '../../App.module.css';

// Allows the user to edit their username
// Adapted from CI's Moments walkthrough project
const EditUsernameForm = () => {
  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState({});

  const history = useHistory();
  const { id } = useParams();

  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  useEffect(() => {
    if (currentUser?.profile_id?.toString() === id) {
      setUsername(currentUser.username);
    } else {
      history.push('/');
    }
  }, [currentUser, history, id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put('/dj-rest-auth/user/', {
        username,
      });
      setCurrentUser((prevUser) => ({
        ...prevUser,
        username,
      }));
      history.goBack();
    } catch (err) {
      console.log(err);
      setErrors(err.response?.data);
    }
  };

  return (
    <Row className='d-flex justify-content-center mt-4'>
      <Col className='text-center' md={6}>
        <Container
          className={`shadow rounded ${appStyles.Container}`}
        >
          <Form
            onSubmit={handleSubmit}
          >
            <Form.Group>
              <Form.Label>Change Username</Form.Label>
              <Form.Control
                placeholder='username'
                type='text'
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </Form.Group>
            {errors?.username?.map((message, idx) => (
              <Alert key={idx} variant='warning'>
                {message}
              </Alert>
            ))}
            <Button
              className={`mr-1 ${appStyles.ButtonPrimary}`}
              type='submit'
            >
              Save Changes
            </Button>
            <Button
              variant='secondary'
              onClick={() => history.goBack()}
            >
              Cancel
            </Button>
          </Form>
        </Container>
      </Col>
    </Row>
  );
};

export default EditUsernameForm;