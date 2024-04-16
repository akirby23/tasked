import React, { useEffect, useState } from 'react';
import Asset from '../../components/Asset';
import styles from '../../styles/ProfilePage.module.css';
import appStyles from '../../App.module.css';
import Task from '../tasks/Task';
import InfiniteScroll from 'react-infinite-scroll-component';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { fetchMoreData } from '../../utils/utils';
import { useParams } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import {
  useProfileData,
  useSetProfileData,
} from '../../contexts/ProfileDataContext';
import { EditProfileDropdown } from '../../components/DropDownMenu';
import { useRedirect } from '../../hooks/useRedirect';

const ProfilePage = () => {
  useRedirect('loggedOut');

  const [hasLoaded, setHasLoaded] = useState(false);
  const [profileInProgressTasks, setProfileInProgressTasks] = useState({
    results: [],
  });
  const [profileCompletedTasks, setProfileCompletedTasks] = useState({
    results: [],
  });

  const [assignedInProgressCount, setAssignedInProgressCount] = useState(0);
  const [assignedCompletedCount, setAssignedCompletedCount] = useState(0);

  const { id } = useParams();
  const setProfileData = useSetProfileData();
  const { pageProfile } = useProfileData();
  const [profile] = pageProfile.results;

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const [
          { data: pageProfile },
          { data: profileInProgressTasks },
          { data: profileCompletedTasks },
        ] = await Promise.all([
          axiosReq.get(`/profiles/${id}/`),
          axiosReq.get(`/tasks/?assignee=${id}&status=IN_PROGRESS&`),
          axiosReq.get(`/tasks/?assignee=${id}&status=COMPLETED&`),
        ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfileInProgressTasks(profileInProgressTasks);
        setProfileCompletedTasks(profileCompletedTasks);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProfileData();
  }, [id, setProfileData]);

  useEffect(() => {
    setAssignedInProgressCount(profileInProgressTasks.results.length);
    setAssignedCompletedCount(profileCompletedTasks.results.length);
  }, [profileInProgressTasks.results.length, profileCompletedTasks.results]);

  const mainProfile = (
    <>
      {profile?.is_owner && <EditProfileDropdown id={profile?.id} />}
      <Row noGutters className='my-1'>
        <Col
          md={3}
          className='d-flex justify-content-md-center align-items-center'
        >
          <Image
            src={profile?.profile_picture}
            roundedCircle
            className={`shadow ${styles.ProfilePicture}`}
          />
        </Col>
        <Col md={8} className='text-center'>
          <h3>{profile?.owner}</h3>
          <hr />
          {profile?.content ? (
            <p>{profile.content}</p>
          ) : (
            <p>{profile?.owner} has not provided a bio yet.</p>
          )}
        </Col>
      </Row>
      <Row className='text-center p-2'>
        <Col sm={4}>
          <div>{profile?.created_tasks_count}</div>
          <div>tasks created</div>
        </Col>
        <Col sm={4}>
          <div>{assignedInProgressCount}</div>
          <div>tasks assigned</div>
        </Col>
        <Col sm={4}>
          <div>{assignedCompletedCount}</div>
          <div>tasks completed</div>
        </Col>
      </Row>
      <Row>
        <Col lg={12} className={`font-weight-light ${styles.CreatedOn}`}>
          Member since {profile?.created_on}
        </Col>
      </Row>
    </>
  );

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
          next={() =>
            fetchMoreData(profileInProgressTasks, setProfileInProgressTasks)
          }
        />
      ) : (
        <p className='mt-2'>{profile?.owner} has no ongoing tasks assigned.</p>
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
          next={() =>
            fetchMoreData(profileCompletedTasks, setProfileCompletedTasks)
          }
        />
      ) : (
        <p className='mt-2'>
          {profile?.owner} has not completed any assigned tasks yet.
        </p>
      )}
    </>
  );

  return (
    <Row>
      <Col className='py-2 p-0' lg={11}>
        <Container className={`shadow mt-3 ${appStyles.Container}`}>
          {hasLoaded ? (
            <>
              {mainProfile}
              <hr />
              <h4 className='text-center'>{profile?.owner}'s assigned tasks</h4>
              <hr />
              <Row>
                <Col>
                  <Tabs className='font-weight-bold'>
                    <Tab
                      eventKey='in_progress'
                      title={
                        <>
                          <i className='fa-solid fa-spinner' /> In Progress
                        </>
                      }
                    >
                      {mainProfileTasksInProgress}
                    </Tab>
                    <Tab
                      eventKey='completed'
                      title={
                        <>
                          <i className='fa-solid fa-check-double' /> Completed
                        </>
                      }
                    >
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
  );
};

export default ProfilePage;
