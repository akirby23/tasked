import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { useCurrentUser } from '../../contexts/CurrentUserContext';

const HomePage = () => {
    const currentUser = useCurrentUser();

    return (
        <>
            {currentUser ? (

                <p>Welcome, {currentUser?.username}!</p>

            ) : (

                <Jumbotron
                    className='mt-5 text-center shadow'
                >
                    <Container
                    >
                        <h1>
                            Welcome to Tasked!
                        </h1>
                        <p>Organise, assign, and track your tasks with ease. Stay productive and accountable together.</p>
                    </Container>
                </Jumbotron>
            )}
        </>
    );
};

export default HomePage