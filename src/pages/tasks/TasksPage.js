import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
import { Row, Col, Container } from 'react-bootstrap';
import Task from './Task';
import NoResults from "../../assets/no-results.png";
import Asset from '../../components/Asset';

// Adapted from CI's Moments walkthrough project
const TasksPage = ({ message, filter = "" }) => {
    const [tasks, setTasks] = useState({results: []})
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const {data} = await axiosReq.get(`/tasks/?${filter}`);
                setTasks(data);
                setHasLoaded(true);
            } catch(err){
                console.log(err);
            }
        }
        setHasLoaded(false);
        fetchTasks();
    }, [filter, pathname]);


  return (

    <Row>
        <Col
        md={8}
        className='mt-3'
        >
        {hasLoaded ? (
            <>
            {tasks.results.length ? (
                tasks.results.map((task) => (
                    <Task 
                    key={task.id} 
                    {...task} 
                    setTasks={setTasks}
                    />
                ))
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
          <Col>
        
          </Col>
      </Row>
  )
}

export default TasksPage