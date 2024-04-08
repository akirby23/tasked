import React, { useEffect, useState, useRef } from 'react';
import { Alert, Row, Col, Container, Button, Form, Image } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { useCurrentUser, useSetCurrentUser } from '../../contexts/CurrentUserContext';
import { useRedirect } from '../../hooks/useRedirect';
import appStyles from '../../App.module.css';

// Allows users to edit their profiles
// Adapted from CI's Moments walkthrough project
const EditProfileForm = () => {
  useRedirect('loggedOut');

  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { id } = useParams();
  const history = useHistory();
  const imageFile = useRef();

  const [profileData, setProfileData] = useState({
    name: '',
    content: '',
    profile_picture: '',
  });
  const { name, content, profile_picture } = profileData;

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleMount = async () => {
      if (currentUser?.profile_id?.toString() === id) {
        try {
          const { data } = await axiosReq.get(`/profiles/${id}/`);
          const { name, content, profile_picture } = data;
          setProfileData({ name, content, profile_picture });
        } catch (err) {
          console.log(err);
          history.push('/');
        }
      } else {
        history.push('/');
      }
    };

    handleMount();
  }, [currentUser, history, id]);

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('content', content);

    if (imageFile?.current?.files[0]) {
      formData.append('profile_picture', imageFile?.current?.files[0]);
    }

    try {
      const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
      setCurrentUser((currentUser) => ({
        ...currentUser,
        profile_image: data.image,
      }));
      history.goBack();
    } catch (err) {
      console.log(err);
      setErrors(err.response?.data);
    }
  };

  const textFields = (
    <>
      <Form.Group>
        <Form.Label>Bio</Form.Label>
        <Form.Control
          as='textarea'
          value={content}
          onChange={handleChange}
          name='content'
          rows={4}
        />
      </Form.Group>

      {errors?.content?.map((message, idx) => (
        <Alert variant='warning' key={idx}>
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
    </>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row className='d-flex justify-content-center mt-4'>
        <Col className='text-center' md={7} lg={6}>
          <Container
            className={`shadow rounded ${appStyles.Container}`}
          >
            <Form.Group>
              {profile_picture && (
                <figure>
                  <Image
                    src={profile_picture}
                    fluid
                  />
                </figure>
              )}
              {errors?.image?.map((message, idx) => (
                <Alert variant='warning' key={idx}>
                  {message}
                </Alert>
              ))}
              <div>
                <Form.Label
                  className='btn my-auto'
                  htmlFor='image-upload'
                >
                  Change Profile Picture
                </Form.Label>
              </div>
              <Form.File
                className='text-center'
                id='image-upload'
                ref={imageFile}
                accept='image/*'
                onChange={(e) => {
                  if (e.target.files.length) {
                    setProfileData({
                      ...profileData,
                      profile_picture: URL.createObjectURL(e.target.files[0]),
                    });
                  }
                }}
              />
            </Form.Group>
            <div className='d-md-none'>{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={6} className='d-none d-md-block p-0 text-center'>
          <Container
            className={`shadow rounded ${appStyles.Container}`}
          >
            {textFields}
          </Container>
        </Col>
      </Row>
    </Form>
  );
};

export default EditProfileForm