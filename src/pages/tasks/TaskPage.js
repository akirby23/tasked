import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { axiosReq } from '../../api/axiosDefaults';
import Task from './Task';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import CreateCommentForm from '../comments/CreateCommentForm';

const TaskPage = () => {
    const { id } = useParams();
    const [task, setTask] = useState({ results: [] });

    const currentUser = useCurrentUser();
    const [comments, setComments] = useState({ results: [] })

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: task }] = await Promise.all([
                    axiosReq.get(`/tasks/${id}`)
                ])
                setTask({ results: [task] })
                console.log(task)
            } catch (err) {
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
                    md={8}
                >

                    {currentUser ? (
                        <CreateCommentForm
                            profile_id={currentUser?.profile_id}
                            task={id}
                            setTask={setTask}
                            setComments={setComments}
                        />
                    ) : comments.results.length ? (
                        "Comments"
                    ) : null}
                </Col>
            </Row>
        </>
    )
}

export default TaskPage