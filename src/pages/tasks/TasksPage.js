
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { fetchMoreData } from '../../utils/utils';
import { useRedirect } from '../../hooks/useRedirect';
import Task from './Task';
import NoResults from '../../assets/no-results.png';
import Asset from '../../components/Asset';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from '../../styles/TasksPage.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';


// Adapted from CI's Moments walkthrough project
const TasksPage = ({ message, filter = '' }) => {
  useRedirect('loggedOut');

  const [tasks, setTasks] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState('');
  const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axiosReq.get(`/tasks/?${filter}search=${query}`);
        setTasks(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchTasks();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname, currentUser]);

  return (
    <Row className='align-items-center'>
      <Col md={10} className='mt-3'>
        <i className={`fa-solid fa-magnifying-glass ${styles.SearchIcon}`} />
        <Form
          onSubmit={(event) => event.preventDefault()}
          className={`mb-2 rounded-pill ${styles.SearchBar}`}
        >
          <Form.Control
            type='text'
            placeholder='Search tasks by title or by category'
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </Form>
        {hasLoaded ? (
          <>
            {tasks.results.length ? (
              <InfiniteScroll
                children={tasks.results.map((task) => (
                  <Task key={task.id} {...task} setTasks={setTasks} />
                ))}
                dataLength={tasks.results.length}
                loader={<Asset spinner />}
                hasMore={!!tasks.next}
                next={() => {
                  fetchMoreData(tasks, setTasks);
                }}
              />
            ) : (
              <Container>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container>
            <Asset spinner />
          </Container>
        )}
      </Col>
    </Row>
  );
};

export default TasksPage;
