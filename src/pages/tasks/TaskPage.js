import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { axiosReq } from '../../api/axiosDefaults';
import Task from './Task';

const TaskPage = () => {
    const { id } = useParams();
    const [task, setTask] = useState( {results: []} );

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{data: task}] = await Promise.all([
                    axiosReq.get(`/tasks/${id}`)
                ])
                setTask({results: [task]})
                console.log(task)
            } catch(err){
                console.log(err)
            }
        }
        handleMount();
    }, [id]);

  return (
    <>
        <Row>
            <Col 
            md={8}
            className='mt-3'>
            <Task {...task.results[0]} setTasks={setTask} taskPage />
            </Col>
            <Col>
            <p></p>
            </Col>
        </Row>
        <Row>
            <Col
            className='mt-3'
            >
            <h1>Comments</h1>
            </Col>
        </Row>
        </>
  )
}

export default TaskPage