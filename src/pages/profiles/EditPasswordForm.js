import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { axiosRes } from '../../api/axiosDefaults';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { useRedirect } from '../../hooks/useRedirect';
import appStyles from '../../App.module.css';
import toast from 'react-hot-toast';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Adapted from CI's Moments walkthrough project
const EditPasswordForm = () => {
  useRedirect('loggedOut');

  const history = useHistory();
  const { id } = useParams();
  const currentUser = useCurrentUser();

  const [userData, setUserData] = useState({
    new_password1: '',
    new_password2: '',
  });
  const { new_password1, new_password2 } = userData;

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (currentUser?.profile_id?.toString() !== id) {
      // Redirects the user if they are not the owner of the profile
      history.push('/');
    }
  }, [currentUser, history, id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.post('/dj-rest-auth/password/change/', userData);
      toast.success('Password changed successfully.');
      history.goBack();
    } catch (err) {
      // console.log(err);
      setErrors(err.response?.data);
    }
  };

  return (
    <Row className='d-flex justify-content-center mt-4'>
      <Col className='text-center' md={6}>
        <Container className={`shadow rounded ${appStyles.Container}`}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>New Password</Form.Label>
              <Form.Control
                placeholder='new password'
                type='password'
                value={new_password1}
                onChange={handleChange}
                name='new_password1'
              />
            </Form.Group>
            {errors?.new_password1?.map((message, idx) => (
              <Alert key={idx} variant='warning'>
                {message}
              </Alert>
            ))}
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                placeholder='confirm new password'
                type='password'
                value={new_password2}
                onChange={handleChange}
                name='new_password2'
              />
            </Form.Group>
            {errors?.new_password2?.map((message, idx) => (
              <Alert key={idx} variant='warning'>
                {message}
              </Alert>
            ))}
            <Button className={`mr-1 ${appStyles.ButtonPrimary}`} type='submit'>
              Save Changes
            </Button>
            <Button variant='secondary' onClick={() => history.goBack()}>
              Cancel
            </Button>
          </Form>
        </Container>
      </Col>
    </Row>
  );
};

export default EditPasswordForm;
