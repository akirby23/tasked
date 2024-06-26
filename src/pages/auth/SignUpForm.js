import axios from 'axios';
import React, { useState } from 'react';
import appStyles from '../../App.module.css';
import toast from 'react-hot-toast';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import { Link, useHistory } from 'react-router-dom';
import { useRedirect } from '../../hooks/useRedirect';

const SignUpForm = () => {
  useRedirect('loggedIn');

  const [signUpData, setSignUpData] = useState({
    username: '',
    password1: '',
    password2: '',
  });
  const { username, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('dj-rest-auth/registration/', signUpData);
      toast.success('Sign up successful! Please log in to continue.');
      history.push('/log-in');
    } catch (err) {
      setErrors(err.response?.data);
    }
  };
  return (
    <Row className='d-flex justify-content-center mt-4'>
      <Col className='text-center' md={6}>
        <Container className={`shadow rounded ${appStyles.Container}`}>
          <h2>Sign Up</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='username'>
              <Form.Label className='d-none'>Username</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter username'
                name='username'
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert variant='warning' key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group controlId='password1'>
              <Form.Label className='d-none'>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                name='password1'
                value={password1}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password1?.map((message, idx) => (
              <Alert variant='warning' key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group controlId='password2'>
              <Form.Label className='d-none'>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Confirm password'
                name='password2'
                value={password2}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password2?.map((message, idx) => (
              <Alert variant='warning' key={idx}>
                {message}
              </Alert>
            ))}
            <Button className={appStyles.ButtonPrimary} type='submit'>
              Sign Up Now
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert variant='warning' key={idx}>
                {message}
              </Alert>
            ))}
          </Form>
          <hr />
          <span>
            <Link to='/log-in' aria-label='Navigate to the log in page'>
              Already have an account? <span>Log In</span>
            </Link>
          </span>
        </Container>
      </Col>
    </Row>
  );
};

export default SignUpForm;
