import React from 'react'
import { useCurrentUser } from '../../contexts/CurrentUserContext'
import { Card, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import ProfilePicture from '../../components/ProfilePicture';

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
    assignee_name,
    status,
    taskPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

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
              {is_owner && taskPage && '...'}
            </Col>
          </Row>
        </Card.Header>
        <ListGroup className="list-group-flush">
          {category_name && <ListGroupItem>Category: {category_name}</ListGroupItem>}
          {priority_level_name && <ListGroupItem>Priority Level: {priority_level_name}</ListGroupItem>}
          {status && <ListGroupItem>Status: {status}</ListGroupItem>}
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
                <div><i class="fa-regular fa-comments"></i> {comments_count}</div>
              </Link>
            </Col>
          </Row>
        </Card.Footer>
      </Card.Body>
    </Card>
  )
}

export default Task