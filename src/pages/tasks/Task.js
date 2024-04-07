import React, { useState } from 'react'
import { useCurrentUser } from '../../contexts/CurrentUserContext'
import { Card, ListGroup, ListGroupItem, Row, Col, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { DropDownMenu } from '../../components/DropDownMenu';
import { axiosReq, axiosRes } from '../../api/axiosDefaults';
import ModalPopup from '../../components/ModalPopup';
import styles from '../../styles/Task.module.css';
import appStyles from '../../App.module.css';


const Task = (props) => {
  const {
    id,
    owner,
    profile_id,
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
  const [taskStatus, setTaskStatus] = useState({
    status: ''
  });

  console.log(taskStatus)

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
    } catch (err) {
      console.log(err);
      setDisplayDeleteModal(false);
    };
  };

  const handleStatusChange = async () => {
    try {
      const updatedTaskStatus = taskStatus === 'IN_PROGRESS' ? 'COMPLETED' : 'IN_PROGRESS';
      await axiosReq.patch(`/tasks/${id}`, {
        status: updatedTaskStatus,
      });
      setTaskStatus(updatedTaskStatus);
      // window.location.reload();
      console.log(updatedTaskStatus);
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Card
      className='shadow mb-3'
    >
      <Card.Body>
        <Card.Header>
          <Row>
            <Link to={`/tasks/${id}`}>
              <Col>
                {title && <Card.Title>
                  <h2>{title}</h2>
                </Card.Title>}
              </Col>
            </Link>
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
              body={<p>Are you sure you want to delete this task? This action cannot be undone.</p>}
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
        <Row>
          <Col>
            <ListGroup className='list-group-flush'>
              {category_name && <ListGroupItem>
                <span className='font-weight-bold'>Category:</span> <span>{category_name}</span>
              </ListGroupItem>}
              {priority_level_name && <ListGroupItem>
                <span className='font-weight-bold'>Priority Level:</span> <span>{priority_level_name}</span>
              </ListGroupItem>}
              {status && <ListGroupItem>
                <span className='font-weight-bold'>Status:</span> <span>{status_name}</span>
              </ListGroupItem>}
            </ListGroup>
          </Col>
          <Col>
            <ListGroup className='list-group-flush'>
              {owner && <ListGroupItem>
                <Link
                  to={`/profiles/${profile_id}`}
                >

                  <span className='font-weight-bold'>Created by:</span> <span>{owner}</span>
                </Link>
              </ListGroupItem>}
              {assignee_name && <ListGroupItem><span className='font-weight-bold'>Assigned to:</span>
                <span><Link to={`/profiles/${profile_id}`}> {assignee_name}</Link></span>
              </ListGroupItem>}
            </ListGroup>
            {status === 'IN_PROGRESS' ? (<Button
              onClick={handleStatusChange}
              aria-label='Mark task as completed'
              className={`ml-2 ${appStyles.ButtonPrimary}`}

            >
              <i class='fa-regular fa-circle-check' /> Mark as Completed
            </Button>) : (
              <Button
                onClick={handleStatusChange}
                aria-label='Reopen task'
                className={`ml-2 ${appStyles.ButtonPrimary}`}
              >
                <i class='fa-solid fa-arrow-rotate-right' /> Reopen
              </Button>
            )
            }
          </Col>

        </Row>
        <hr className='mt-0' />
        <Row>
          <Col className={`text-center ${styles.TaskDetails}`}>
            {task_detail &&
              <>
                <Card.Text className='font-weight-bold'>Task Details</Card.Text>
                <Card.Text>{task_detail}</Card.Text>
              </>
            }
          </Col>
        </Row>
        <Card.Footer>
          <Row className='d-flex justify-content-md-between font-weight-light'>
            <Col className='md-9'>
              <span>Created on {created_on}</span>
              <div className='vr'></div>
              <span>Last updated {updated_on}</span>
            </Col>
            <Col className='d-flex justify-content-end align-items-center pr-2'>
              <Link
                to={`/tasks/${id}`}
                className={styles.CommentsCount}>
                <i class='fa-regular fa-comments'></i> {comments_count}
              </Link>
            </Col>
          </Row>
        </Card.Footer>
      </Card.Body>
    </Card>
  )
}

export default Task