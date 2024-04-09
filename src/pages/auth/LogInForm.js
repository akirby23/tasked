import React, { useState } from 'react';
import { Row, Col, Form, Button, Container, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useSetCurrentUser } from '../../contexts/CurrentUserContext';
import { setTokenTimestamp } from '../../utils/utils';
import { useRedirect } from '../../hooks/useRedirect';
import axios from 'axios';
import appStyles from '../../App.module.css';
import toast from 'react-hot-toast';

const LogInForm = () => {
    useRedirect('loggedIn');
    
    const setCurrentUser = useSetCurrentUser();

    const [logInData, setLogInData] = useState({
        username: '',
        password: '',
    });
    const { username, password } = logInData;

    const [errors, setErrors] = useState({})

    const history = useHistory()

    const handleChange = (event) => {
        setLogInData({
            ...logInData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios.post('dj-rest-auth/login/', logInData)
            setCurrentUser(data.user)
            setTokenTimestamp(data);
            toast.success(`Logged in as ${username}.`)
            history.push('/')
        } catch (err) {
            setErrors(err.response?.data)
        }
    }

    return (
        <Row className='d-flex justify-content-center mt-4'>
            <Col className='text-center' md={6}>
                <Container
                    className={`shadow rounded ${appStyles.Container}`}
                >
                    <h2>Log In</h2>
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
                        {errors.username?.map((message, idx) =>
                            <Alert variant='warning' key={idx}>
                                {message}
                            </Alert>
                        )}

                        <Form.Group controlId='password'>
                            <Form.Label className='d-none'>Password</Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='Password'
                                name='password'
                                value={password}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.password?.map((message, idx) =>
                            <Alert variant='warning' key={idx}>
                                {message}
                            </Alert>
                        )}

                        <Button
                            className={appStyles.ButtonPrimary}
                            type='submit'>
                            Log In
                        </Button>
                        {errors.non_field_errors?.map((message, idx) =>
                            <Alert variant='warning' key={idx}>
                                {message}
                            </Alert>
                        )}
                        <hr />
                        <span>
                            <Link
                                to='/sign-up'
                            >
                                Don't have an account? <span>Sign Up</span>
                            </Link>
                        </span>
                    </Form>
                </Container>
            </Col>
        </Row>
    )
}

export default LogInForm