import React, { useState } from 'react'
import { Row, Col, Form, Button, Container, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

const LogInForm = () => {
    const [logInData, setLogInData] = useState({
        username: '',
        password: '',
    });
    const { username, password} = logInData;

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
            await axios.post('dj-rest-auth/login/', logInData)
            history.push('/')
            
        } catch (err) {
            setErrors(err.response?.data)
        }
    }

    return (
        <Row>
            <Col>
                <Container>
                    <h1>Log In</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="username">
                            <Form.Label className="d-none">Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                name="username"
                                value={username}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.username?.map((message, idx) =>
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        )}

                        <Form.Group controlId="password">
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.password?.map((message, idx) =>
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        )}

                        <Button
                            variant="primary"
                            type="submit">
                            Log In
                        </Button>
                        {errors.non_field_errors?.map((message, idx) =>
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        )}
                    </Form>
                </Container>
                <Container>
                    <Link
                        to="/sign-up"
                    >
                        Don't have an account? <span>Sign Up</span>
                    </Link>
                </Container>
            </Col>
            <Col>
                Placeholder
            </Col>
        </Row>
    )
}

export default LogInForm