import React, { useEffect, useState } from 'react';
import Asset from '../../components/Asset';
import styles from '../../styles/ProfilePage.module.css'
import appStyles from '../../App.module.css';
import Task from '../tasks/Task';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchMoreData } from '../../utils/utils';
import { Col, Container, Image, Row, Tabs, Tab } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { useProfileData, useSetProfileData } from '../../contexts/ProfileDataContext';
import { EditProfileDropdown } from '../../components/DropDownMenu';


const ProfilePage = () => {
    const [hasLoaded, setHasLoaded] = useState(false);
    const [profileInProgressTasks, setProfileInProgressTasks] = useState({ results: [] });
    const [profileCompletedTasks, setProfileCompletedTasks] = useState({ results: [] });

    // const [assignedInProgressCount, setAssignedInProgressCount] = useState(0);
    // const [assignedCompletedCount, setAssignedCompletedCount] = useState(0);

    console.log('profileInProgressTasks:', profileInProgressTasks)
    console.log('profileCompletedTasks:', profileCompletedTasks)

    const { id } = useParams();
    const setProfileData = useSetProfileData();
    const { pageProfile } = useProfileData();
    const [profile] = pageProfile.results;

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const [{ data: pageProfile }, { data: profileInProgressTasks }, { data: profileCompletedTasks }] = await Promise.all([
                    axiosReq.get(`/profiles/${id}/`),
                    axiosReq.get(`/tasks/?assignee=${id}&status=IN_PROGRESS&`),
                    axiosReq.get(`/tasks/?assignee=${id}&status=COMPLETED&`)
                ]);
                setProfileData(prevState => ({
                    ...prevState,
                    pageProfile: { results: [pageProfile] },
                }));
                setProfileInProgressTasks(profileInProgressTasks);
                setProfileCompletedTasks(profileCompletedTasks);
                setHasLoaded(true);
            } catch (err) {
                console.log(err)
            }
        }
        fetchProfileData();
    }, [id, setProfileData]);

    const mainProfile = (
        <>
            {profile?.is_owner &&
                <EditProfileDropdown
                    id={profile?.id}
                />}
            <Row className='m-3'>
                <Col lg={3}>
                    <Image
                        src={profile?.profile_picture}
                        roundedCircle
                        className={`shadow ${styles.ProfilePicture}`}
                    />
                </Col>
                <Col className='text-center'>
                    <h3>{profile?.owner}</h3>
                    <hr />
                    {profile?.content ? (
                        <p>{profile.content}</p>
                    ) : (
                        <p>{profile?.owner} has not provided a bio yet.</p>
                    )}
                </Col>
            </Row>
            <Row className='text-center p-3'>
                <Col>
                    <div>{profile?.created_tasks_count}</div>
                    <div>tasks created</div>
                </Col>
                <Col>
                <div>{assignedInProgressCount}</div>
                    <div>tasks assigned</div> 
                </Col>
                <Col>
                <div>{assignedCompletedCount}</div>
                    <div>tasks completed</div>
                </Col>
            </Row>
            <Row>
                <Col
                    md={4}
                >
                    Member since: {profile?.created_on}
                </Col>
            </Row>
        </>

    )

    const mainProfileTasksInProgress = (
        <>
            {profileInProgressTasks.results.length ? (
                <InfiniteScroll
                    children={profileInProgressTasks.results.map((task) => (
                        <Task
                            key={task.id}
                            {...task}
                            setProfileInProgressTasks={setProfileInProgressTasks}
                        />
                    ))}
                    dataLength={profileInProgressTasks.results.length}
                    loader={<Asset spinner />}
                    hasMore={!!profileInProgressTasks.next}
                    next={() => fetchMoreData(profileInProgressTasks, setProfileInProgressTasks)}
                />
            ) : (
                <p>
                    {profile?.owner} has no ongoing tasks assigned.
                </p>
            )}
        </>
    );

    const mainProfileTasksCompleted = (
        <>
            {profileCompletedTasks.results.length ? (
                <InfiniteScroll
                    children={profileCompletedTasks.results.map((task) => (
                        <Task
                            key={task.id}
                            {...task}
                            setProfileCompletedTasks={setProfileCompletedTasks}
                        />
                    ))}
                    dataLength={profileCompletedTasks.results.length}
                    loader={<Asset spinner />}
                    hasMore={!!profileCompletedTasks.next}
                    next={() => fetchMoreData(profileCompletedTasks, setProfileCompletedTasks)}
                />
            ) : (
                <p>
                    {profile?.owner} has not completed any assigned tasks yet.
                </p>
            )}
        </>
    );

    return (
        <Row>
            <Col lg={11}>
                <Container
                    className={`shadow mt-3 ${appStyles.Container}`}
                    lg={11}
                >
                    {hasLoaded ? (
                        <>
                            {mainProfile}
                            <hr />
                            <h4 className='text-center'>{profile?.owner}'s assigned tasks</h4>
                            <hr />
                            <Row>
                                <Col>
                                    <Tabs className='font-weight-bold'>
                                        <Tab eventKey='in_progress' title={<><i className='fa-solid fa-spinner' /> In Progress</>}>
                                            {mainProfileTasksInProgress}
                                        </Tab>
                                        <Tab eventKey='completed' title={<><i className='fa-solid fa-check-double' /> Completed</>}>
                                            {mainProfileTasksCompleted}
                                        </Tab>
                                    </Tabs>
                                </Col>
                            </Row>

                        </>
                    ) : (
                        <Asset spinner />
                    )}
                </Container>
            </Col>
        </Row>
    )
}

export default ProfilePage