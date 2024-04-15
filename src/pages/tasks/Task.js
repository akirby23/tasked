import React, { useEffect, useMemo, useState } from 'react'
import { useCurrentUser } from '../../contexts/CurrentUserContext'
import { Card, Row, Col, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { DropDownMenu } from '../../components/DropDownMenu';
import { axiosReq, axiosRes } from '../../api/axiosDefaults';
import ModalPopup from '../../components/ModalPopup';
import styles from '../../styles/Task.module.css';
import appStyles from '../../App.module.css';
import toast from 'react-hot-toast';

const Task = (props) => {
  const {
    id,
    owner,
    profile_id,
    assignee_profile_id,
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
    taskPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const is_assignee = currentUser?.profile_id === assignee;
  const history = useHistory();

  const [displayDeleteModal, setDisplayDeleteModal] = useState(false);
  const [taskStatus, setTaskStatus] = useState({
    status: '',
  });

  const currentTaskStatus = useMemo(() => {
    const taskStatusName = { status }
    return taskStatusName
  }, [status])

  useEffect(() => {
    setTaskStatus(currentTaskStatus);
  }, [currentTaskStatus])

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
      toast.success('Task deleted successfully.');
      history.goBack();
    } catch (err) {
      console.log(err);
      setDisplayDeleteModal(false);
    };
  };

  const handleStatusChange = async () => {
    try {
      const updatedStatus = taskStatus.status === 'IN_PROGRESS' ? 'COMPLETED' : 'IN_PROGRESS';
      const updatedTaskStatus = {
        ...taskStatus,
        status: updatedStatus,
      }
      await axiosReq.patch(`/tasks/${id}`, {
        status: updatedStatus,
      });
      setTaskStatus(updatedTaskStatus);
    } catch (err) {
      console.log(err)
    };
  };


  return (
    <Card
      className='shadow mb-3'
    >
      <Card.Body>
        <Row>
          <Link to={`/tasks/${id}`}>
            <Col className='text-center'>
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
        <hr className='mt-0' />
        <Row>
          <Col md={12} className={styles.Col}>
            <div className={`d-flex ${styles.Labels}`}>
              <span className={`rounded-pill shadow-sm mx-1 ${styles.Label}`}>category: {category_name}</span>
              <span className={`rounded-pill shadow-sm mx-1 ${styles.Label}`}>priority: {priority_level_name}</span>
              <span className={`rounded-pill shadow-sm mx-1 ${styles.Label}`}>status: {taskStatus.status}</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className={`text-left ml-2 ${styles.TaskDetails}`}>
            {task_detail &&
              <>
                <Card.Text>{task_detail}</Card.Text>
              </>
            }
          </Col>
        </Row>
        <hr className='mt-0' />
        <Row className='align-items-center ml-2'>
          <Col md={6} className='text-left'>
            <Link to={`/profiles/${assignee_profile_id}`}><span>assigned to {assignee_name} <i className='fa-solid fa-arrow-up-right-from-square' /></span></Link>
          </Col>
          <Col md={6}>
            {(is_owner || is_assignee) && taskStatus.status === 'IN_PROGRESS' ? (<Button
              onClick={handleStatusChange}
              aria-label='Mark task as Completed'
              className={`text-center ${appStyles.ButtonPrimary}`}
            >
              <i className='fa-regular fa-circle-check' /> Mark as Completed
            </Button>) : (is_owner || is_assignee) && (
              <Button
                onClick={handleStatusChange}
                aria-label='Reopen task'
                className={`${appStyles.ButtonPrimary}`}
              >
                <i className='fa-solid fa-arrow-rotate-right' /> Reopen
              </Button>
            )
            }
          </Col>
        </Row>
        <Card.Footer className='mt-3'>
          <Row className='d-flex justify-content-md-between font-weight-light'>
            <Col lg={9} sm={8} xs={7}>
              <span>
                created on {created_on} by <Link to={`/profiles/${profile_id}`}>{owner} <i class='fa-solid fa-arrow-up-right-from-square' /></Link>
              </span>
              <div className='vr'></div>
              <span>last updated {updated_on}</span>
            </Col>
            <Col lg={3} sm={4} xs={5} className='d-flex justify-content-end align-items-center pr-2'>
              <Link
                to={`/tasks/${id}`}
                className={styles.CommentsCount}>
                <i className='fa-regular fa-comments'></i> {comments_count}
              </Link>
            </Col>
          </Row>
        </Card.Footer>
      </Card.Body>
    </Card>
  )
}

export default Task