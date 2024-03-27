import React from 'react'
import axios from 'axios';
import { useSetCurrentUser } from '../../contexts/CurrentUserContext'
import { useHistory } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import { removeTokenTimestamp } from '../../utils/utils';

const LogOut = () => {
    const setCurrentUser  = useSetCurrentUser();

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
        } catch(err){
          console.log(err)
        }
      }

  return (
    <Row>
        <Col>
        <h1>Log Out</h1>
        <p>Are you sure you want to log out?</p>
        <Button
            variant="primary"
            onClick={handleLogOut}
            >
            Log Out
        </Button>
        <Button
            variant="outline-primary"
            onClick={returnToPreviousPage}
            >
            Cancel
        </Button>
        </Col>
    </Row>
  )
}

export default LogOut