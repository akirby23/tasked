import React, { useEffect, useState } from 'react';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { axiosReq } from '../../api/axiosDefaults';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { fetchMoreData } from '../../utils/utils';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import Asset from '../../components/Asset';
import Task from '../tasks/Task';
import appStyles from '../../App.module.css';
import styles from '../../styles/HomePage.module.css';
import HomePageGraphic from '../../assets/home-page-graphic.png';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const HomePage = () => {
  const currentUser = useCurrentUser();

  const [hasLoaded, setHasLoaded] = useState(false);

  const [highPriorityTasks, setHighPriorityTasks] = useState({ results: [] });

  const [totalTasksInProgress, setTotalTasksInProgress] = useState({
    results: [],
  });
  const [totalTasksCompleted, setTotalTasksCompleted] = useState({
    results: [],
  });
  const [totalInProgressCount, setTotalInProgressCount] = useState(0);
  const [totalCompletedCount, setTotalCompletedCount] = useState(0);

  const { id } = useParams();
  const profile_id = currentUser?.profile_id || '';

  useEffect(() => {
    const fetchHomePageData = async () => {
      try {
        const [
          { data: highPriorityTasks },
          { data: totalTasksInProgress },
          { data: totalTasksCompleted },
        ] = await Promise.all([
          axiosReq.get(
            `/tasks/?assignee=${profile_id}&priority_level=3&status=IN_PROGRESS`
          ),
          axiosReq.get(`/tasks/?status=IN_PROGRESS`),
          axiosReq.get(`/tasks/?status=COMPLETED`),
        ]);
        setHighPriorityTasks(highPriorityTasks);
        setTotalTasksInProgress(totalTasksInProgress);
        setTotalTasksCompleted(totalTasksCompleted);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };
    fetchHomePageData();
  }, [id, profile_id]);

  useEffect(() => {
    setTotalInProgressCount(totalTasksInProgress.results.length);
    setTotalCompletedCount(totalTasksCompleted.results.length);
  }, [totalTasksInProgress.results.length, totalTasksCompleted.results.length]);

  const myHighPriorityTasks = (
    <>
      {highPriorityTasks.results.length ? (
        <InfiniteScroll
          children={highPriorityTasks.results.map((task) => (
            <Task
              key={task.id}
              {...task}
              setHighPriorityTasks={setHighPriorityTasks}
            />
          ))}
          dataLength={highPriorityTasks.results.length}
          loader={<Asset spinner />}
          hasMore={!!highPriorityTasks.next}
          next={() => fetchMoreData(highPriorityTasks, setHighPriorityTasks)}
        />
      ) : (
        <p className='text-center'>No high priority tasks in progress...yet.</p>
      )}
    </>
  );

  const globalTaskData = (
    <>
      <table className='table table-bordered text-center'>
        <thead>
          <tr>
            <th scope='col'>Status</th>
            <th scope='col'>Total Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>In Progress</td>
            <td>{totalInProgressCount}</td>
          </tr>
          <tr>
            <td>Completed</td>
            <td>{totalCompletedCount}</td>
          </tr>
        </tbody>
      </table>
    </>
  );

  return (
    <>
      {currentUser ? (
        hasLoaded ? (
          <>
            <h3 className='text-center mt-2'>Hi {currentUser?.username}!</h3>
            <hr />
            <Row>
              <Col lg={4}>
                <Container
                  className={`shadow rounded mt-2 ${appStyles.Container}`}
                >
                  <h4 className='text-center'>All Tasks</h4>
                  <p className='text-center text-muted'>
                    The Tasked community has been keeping busy!
                  </p>
                  {globalTaskData}
                </Container>
              </Col>
              <Col lg={8}>
                <Container
                  className={`shadow rounded mt-2 ${appStyles.Container}`}
                >
                  <h4 className='text-center'>My High Priority Tasks</h4>
                  {myHighPriorityTasks}
                </Container>
              </Col>
            </Row>
          </>
        ) : (
          <Asset spinner />
        )
      ) : (
        <Jumbotron className='mt-5 text-center shadow'>
          <Container>
            <Row className='d-flex align-items-center'>
              <Col md={7}>
                <h1>Welcome to Tasked!</h1>
                <p>
                  Organise, assign, and track your tasks with ease. Stay
                  productive and accountable together.
                </p>
                <hr />
                <Link to='/log-in' aria-label='Navigate to log in page'>
                  <Button
                    className={`mr-2 ${styles.Button}`}
                  >
                    Log In
                  </Button>
                </Link>
                <Link to='sign-up' aria-label='Navigate to sign up page'>
                  <Button className={`${styles.Button}`}>
                    Sign Up
                  </Button>
                </Link>
              </Col>
              <Col md={5}>
                <img
                  src={HomePageGraphic}
                  className={styles.Image}
                  alt='Tasked logo'
                />
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      )}
    </>
  );
};

export default HomePage;
