import React, { useState } from 'react'
import { useCurrentUser } from '../../contexts/CurrentUserContext'
import { Card, ListGroup, ListGroupItem, Row, Col, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ProfilePicture from '../../components/ProfilePicture';
import { DropDownMenu } from '../../components/DropDownMenu';
import { axiosRes } from '../../api/axiosDefaults';
import ModalPopup from '../../components/ModalPopup';

const Task = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    title,
    created_on,
    updated_on,
    category_name,
    priority_level_name,
    task_detail,
    assignee,
    assignee_name,
    status,
    status_name,
    taskPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const is_assignee = currentUser?.profile_id === assignee;
  const history = useHistory();

  const [displayDeleteModal, setDisplayDeleteModal] = useState(false);

  const handeDisplayDeleteModal = () => {
    setDisplayDeleteModal(true);
  }

  const handleCloseDeleteModal = () => {
    setDisplayDeleteModal(false);
  }

  const handleEdit = () => {
    history.push(`/tasks/${id}/edit`)
  }

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/tasks/${id}/`)
      history.goBack();
    } catch (err){
      console.log(err);
      setDisplayDeleteModal(false);
    };
  };

  return (
    <Card
      className='shadow'
    >
      <Card.Body>
        <Card.Header>
          <Row>
            <Link to={`/tasks/${id}`}>
              <Col>
                {title && <Card.Title>Task: {title}</Card.Title>}
              </Col>
            </Link>
            <Col>
              <Link
                to={`/profiles/${profile_id}`}
              >
                <ProfilePicture src={profile_image} height={45} />
                {owner}
              </Link>
            </Col>
            <Col>
              {(is_owner || is_assignee) && taskPage && (<DropDownMenu 
              handleEdit={handleEdit}
              handleDelete={handeDisplayDeleteModal} 
              />)}
            </Col>
            {displayDeleteModal && (<ModalPopup 
            show={displayDeleteModal}
            onHide={handleCloseDeleteModal}
            title={<h2>Delete Task</h2>}
            body={<p>Are you sure you want to delete this task? This action cannot be undone.</p> }
            footer={
              <div>
                <Button
                variant='danger'
                onClick={handleDelete}
                className='mr-1'
                >
                Delete Task
                </Button>
                <Button
                variant='secondary'
                onClick={handleCloseDeleteModal}
                >
                  Cancel
                </Button>
              </div>
            }
            />
            )};
          </Row>
        </Card.Header>
        <ListGroup className="list-group-flush">
          {category_name && <ListGroupItem>Category: {category_name}</ListGroupItem>}
          {priority_level_name && <ListGroupItem>Priority Level: {priority_level_name}</ListGroupItem>}
          {status && <ListGroupItem>Status: {status_name}</ListGroupItem>}
        </ListGroup>
        {task_detail && <Card.Text>Task details: {task_detail}</Card.Text>}
        <Card.Footer>
          <Row>
            <Col>
              <div>Created on: {created_on}</div>
              <div>Updated on: {updated_on}</div>
            </Col>
            <Col>
              {assignee_name && <div>Assigned to: {assignee_name}</div>}
              <Link to={`/tasks/${id}`}>
                <i class="fa-regular fa-comments"></i> {comments_count}
                </Link>
            </Col>
          </Row>
        </Card.Footer>
      </Card.Body>
    </Card>
  )
}

export default Task