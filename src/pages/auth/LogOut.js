import React from 'react'
import axios from 'axios';
import { useSetCurrentUser } from '../../contexts/CurrentUserContext'
import { useHistory } from 'react-router-dom';
import { Row, Col, Button, Container } from 'react-bootstrap';
import { removeTokenTimestamp } from '../../utils/utils';
import appStyles from '../../App.module.css';

const LogOut = () => {
  const setCurrentUser = useSetCurrentUser();

  const history = useHistory()

  const returnToPreviousPage = () => {
    history.goBack();
  };

  const handleLogOut = async () => {
    try {
      await axios.post('dj-rest-auth/logout/');
      setCurrentUser(null);
      removeTokenTimestamp();
      history.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Row className='d-flex justify-content-center mt-4'>
      <Col className='text-center' md={6}>
        <Container
          className={`shadow rounded ${appStyles.Container}`}
        >
          <h2>Log Out</h2>
          <p>Are you sure you want to log out?</p>
          <Button
            className={`mr-1 ${appStyles.ButtonPrimary}`}
            onClick={handleLogOut}
          >
            Log Out
          </Button>
          <Button
            variant='secondary'
            onClick={returnToPreviousPage}
          >
            Cancel
          </Button>
        </Container>
      </Col>
    </Row>
  )
}

export default LogOut