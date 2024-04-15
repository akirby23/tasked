import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { fetchMoreData } from '../../utils/utils';
import { useRedirect } from '../../hooks/useRedirect';
import Asset from '../../components/Asset';
import Comment from '../comments/Comment';
import CreateCommentForm from '../comments/CreateCommentForm';
import Task from './Task';
import InfiniteScroll from 'react-infinite-scroll-component';
import appStyles from '../../App.module.css';


const TaskPage = () => {
    useRedirect('loggedOut');

    const { id } = useParams();
    const [task, setTask] = useState({ results: [] });

    const currentUser = useCurrentUser();
    const [comments, setComments] = useState({ results: [] });


    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: task }, { data: comments }] = await Promise.all([
                    axiosReq.get(`/tasks/${id}`),
                    axiosReq.get(`/comments/?task=${id}`)
                ])
                setTask({ results: [task] });
                setComments(comments);
            } catch (err) {
                console.log(err);
            };
        };
        handleMount();
    }, [id]);

    return (
        <>
            <Row>
                <Col
                    md={10}
                    className='mt-3'>
                    <Task
                        {...task.results?.[0]}
                        setTasks={setTask}
                        taskPage
                    />
                </Col>
            </Row>
            <Row>
                <Col
                    className='my-3'
                    md={10}
                >
                    <Container
                        className={`shadow rounded ${appStyles.Container}`}
                        >
                    {currentUser ? (
                        <CreateCommentForm
                            profile_id={currentUser.profile_id}
                            task={id}
                            setTask={setTask}
                            setComments={setComments}
                        />
                    ) : comments.results.length ? (
                        'Comments'
                    ) : null}
                    {comments.results.length ? (
                        <InfiniteScroll
                            children={
                                comments.results.map((comment) => (
                                    <Comment
                                        key={comment.id}
                                        {...comment}
                                        setTask={setTask}
                                        setComments={setComments}
                                    />
                                ))
                            }
                            dataLength={comments.results.length}
                            loader={<Asset spinner />}
                            hasMore={!!comments.next}
                            next={() => { fetchMoreData(comments, setComments) }}
                        />
                        // tbd if the below will be needed
                    ) : currentUser ? (
                        <span>No comments yet. Be the first to leave a comment!</span>
                    ) : (
                        <span>No comments yet. Log in to add a comment.</span>
                    )}
                    </Container>
                </Col>
            </Row>
        </>
    )
}


export default TaskPage