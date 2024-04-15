import React, { useEffect, useState } from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'react-bootstrap';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { axiosReq } from '../../api/axiosDefaults';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { fetchMoreData } from '../../utils/utils';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import Asset from '../../components/Asset';
import Task from '../tasks/Task';
import appStyles from '../../App.module.css';
import styles from '../../styles/HomePage.module.css'
import HomePageGraphic from '../../assets/home-page-graphic.png';


const HomePage = () => {
    const currentUser = useCurrentUser();

    const [hasLoaded, setHasLoaded] = useState(false);

    const [highPriorityTasks, setHighPriorityTasks] = useState({ results: [] });

    const [totalTasksInProgress, setTotalTasksInProgress] = useState({ results: [] });
    const [totalTasksCompleted, setTotalTasksCompleted] = useState({ results: [] });
    const [totalInProgressCount, setTotalInProgressCount] = useState(0)
    const [totalCompletedCount, setTotalCompletedCount] = useState(0)

    const { id } = useParams();
    const profile_id = currentUser?.profile_id || "";


    // useEffect(() => {
    //     const fetchHomePageData = async () => {
    //         try {
    //             let nextPageHighPriority = `/tasks/?assignee=${profile_id}&priority_level=3&status=IN_PROGRESS`;
    //             let nextPageInProgress = `/tasks/?status=IN_PROGRESS`;
    //             let nextPageCompleted = `/tasks/?status=COMPLETED`;
    //             let allUrls = [nextPageHighPriority, nextPageInProgress, nextPageCompleted]

    //             for (let url = 0, url < allUrls.length; url++) {
    //                 let nextPageUrl = allUrls[url]

    //                 while nextPageUrl !== null {
    //                     const response = await axios.get(nextPageUrl)
    //                     const homePage
    //                 }
    //             }
    //         }
            

    //     }})

    useEffect(() => {
        const fetchHomePageData = async () => {
            try {
                const [
                    { data: highPriorityTasks },
                    { data: totalTasksInProgress },
                    { data: totalTasksCompleted },
                ] = await Promise.all([
                    axiosReq.get(`/tasks/?assignee=${profile_id}&priority_level=3&status=IN_PROGRESS`),
                    axiosReq.get(`/tasks/?status=IN_PROGRESS`),
                    axiosReq.get(`/tasks/?status=COMPLETED`),
                ]);
                setHighPriorityTasks(highPriorityTasks);
                setTotalTasksInProgress(totalTasksInProgress);
                setTotalTasksCompleted(totalTasksCompleted);
                setHasLoaded(true);
            } catch (err) {
                console.log(err)
            }
        }
        fetchHomePageData();
    }, [id, profile_id]);

    // useEffect(() => {
    //     fetchMoreData(totalTasksInProgress, setTotalTasksCompleted)
    //     fetchMoreData(totalTasksCompleted, setTotalCompletedCount)
    // }, [totalTasksInProgress, totalTasksCompleted])

    console.log(totalTasksInProgress)
    console.log(totalInProgressCount)

    useEffect(() => {
        
        setTotalInProgressCount(totalTasksInProgress.results.length);
        // if (totalTasksInProgress.next) {
        //     fetchMoreData(totalTasksInProgress.next, setTotalTasksInProgress)
        // }
        setTotalCompletedCount(totalTasksCompleted.results.length);
    }, [totalTasksInProgress.next, totalTasksInProgress.results.length, totalTasksCompleted.results.length])


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
                <p className='text-center'>
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
                    <tr>
                    <th scope='col'>
                        Status
                    </th>
                    <th scope='col'>
                        Total Count
                    </th>
                    </tr>
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
            {currentUser ? (
                hasLoaded ? (
                    <>
                        <h3 className='mt-2 text-center'>Hi {currentUser?.username}!</h3>
                        <hr />
                        <Row>
                            <Col lg={4}>
                            <Container
                                    className={`shadow rounded ${appStyles.Container}`}
                                >
                                    <h4 className='text-center'>All Tasks</h4>
                                    {globalTaskData}
                                </Container>
                            </Col>
                            <Col lg={8}>
                                <Container
                                    className={`shadow rounded ${appStyles.Container} ${styles.Container}`}
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
                <Jumbotron
                    className='mt-5 text-center shadow'
                >
                    <Container
                    >
                        <Row className='d-flex align-items-center'>
                            <Col md={7}>
                                <h1>
                                    Welcome to Tasked!
                                </h1>
                                <p>Organise, assign, and track your tasks with ease. Stay productive and accountable together.</p>
                                <hr />
                                <Link
                                to='/log-in'
                                >
                                <Button 
                                className={`mr-2 ${styles.Button}`}
                                aria-label='Log In'
                                >
                                    Log In
                                </Button>
                                </Link>
                                <Link
                                to='sign-up'
                                >
                                <Button 
                                className={`${styles.Button}`}
                                aria-label='Sign Up'
                                >
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

export default HomePage