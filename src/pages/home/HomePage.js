import React, { useEffect, useState } from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { axiosReq } from '../../api/axiosDefaults';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { useProfileData, useSetProfileData } from '../../contexts/ProfileDataContext';
import { fetchMoreData } from '../../utils/utils';
import InfiniteScroll from 'react-infinite-scroll-component';
import Asset from '../../components/Asset';
import Task from '../tasks/Task';
import appStyles from '../../App.module.css';


const HomePage = () => {
    const currentUser = useCurrentUser();

    const [hasLoaded, setHasLoaded] = useState(false);

    const [highPriorityTasks, setHighPriorityTasks] = useState({ results: [] });

    const [totalTasksInProgress, setTotalTasksInProgress] = useState({ results: [] });
    const [totalTasksCompleted, setTotalTasksCompleted] = useState({ results: [] });
    const [totalInProgressCount, setTotalInProgressCount] = useState(0)
    const [totalCompletedCount, setTotalCompletedCount] = useState(0)

    const { id } = useParams();
    const setProfileData = useSetProfileData();
    const { pageProfile } = useProfileData();
    const [profile] = pageProfile.results;
    const profile_id = currentUser?.profile_id || "";


    useEffect(() => {
        const fetchHomePageData = async () => {
            try {
                const [
                    { data: pageProfile },
                    { data: highPriorityTasks },
                    { data: totalTasksInProgress },
                    { data: totalTasksCompleted },
                ] = await Promise.all([
                    axiosReq.get(`/profiles/`),
                    axiosReq.get(`/tasks/?assignee=${profile_id}&priority_level=3&status=IN_PROGRESS`),
                    axiosReq.get(`/tasks/?status=IN_PROGRESS`),
                    axiosReq.get(`/tasks/?status=COMPLETED`),
                ]);
                setProfileData(prevState => ({
                    ...prevState,
                    pageProfile: { results: [pageProfile] },
                }));
                setHighPriorityTasks(highPriorityTasks);
                setTotalTasksInProgress(totalTasksInProgress);
                setTotalTasksCompleted(totalTasksCompleted);
                setHasLoaded(true);
            } catch (err) {
                console.log(err)
            }
        }
        fetchHomePageData();
    }, [id, setProfileData, profile_id]);

    useEffect(() => {
        setTotalInProgressCount(totalTasksInProgress.results.length);
        setTotalCompletedCount(totalTasksCompleted.results.length);
    }, [totalTasksInProgress.results.length, totalTasksCompleted.results.length])

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
                <p>
                    No high priority tasks in progress...yet.
                </p>
            )}
        </>
    )

    const globalTaskData = (
        <>
            <table
                className='table table-bordered text-center'
            >
                <thead>
                    <th scope='col'>
                        Status
                    </th>
                    <th scope='col'>
                        Total Count
                    </th>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            In Progress
                        </td>
                        <td>
                            {totalInProgressCount}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Completed
                        </td>
                        <td>
                            {totalCompletedCount}
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )

    return (
        <>
            {currentUser  ? (
                hasLoaded ? (
                    <>
                    <h3 className='mt-2 text-center'>Hi {currentUser?.username}!</h3>
                    <hr />
                        <Row>
                        <Col lg={8}>
                            <Container
                                className={`shadow rounded ${appStyles.Container}`}
                            >
                                <h4 className='text-center'>My High Priority Tasks</h4>
                                {myHighPriorityTasks}
                            </Container>
                        </Col>
                            <Col lg={4}>
                            <Container
                            className={`shadow rounded ${appStyles.Container}`}
                        >
                                <h4 className='text-center'>All Tasks</h4>
                                {globalTaskData}
                                </Container>
                            </Col>
                    </Row>
</>
                    ) : (
                        <Asset spinner />
                    )
            ) : (
                <Jumbotron
                    className='mt-5 text-center shadow'
                >
                    <Container
                    >
                        <h1>
                            Welcome to Tasked!
                        </h1>
                        <p>Organise, assign, and track your tasks with ease. Stay productive and accountable together.</p>
                    </Container>
                </Jumbotron>
            )}
            </>
    );
};

export default HomePage