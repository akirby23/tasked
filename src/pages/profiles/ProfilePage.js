import React, { useEffect, useState } from 'react'
import Asset from '../../components/Asset';
import styles from '../../styles/ProfilePage.module.css'
import appStyles from '../../App.module.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { useProfileData, useSetProfileData } from '../../contexts/ProfileDataContext';
import { EditProfileDropdown } from '../../components/DropDownMenu';

const ProfilePage = () => {
    const [hasLoaded, setHasLoaded] = useState(false);
    const { id } = useParams();
    const setProfileData = useSetProfileData();
    const { pageProfile } = useProfileData();
    const [profile] = pageProfile.results;

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const [{ data: pageProfile }] = await Promise.all([
                    axiosReq.get(`/profiles/${id}/`),
                ]);
                setProfileData(prevState => ({
                    ...prevState,
                    pageProfile: { results: [pageProfile] },
                }));
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
                        <p>{profile.owner} has not provided a bio yet.</p>
                    )}
                </Col>
            </Row>
            <Row className='text-center p-3'>
                <Col>
                    <div>{profile?.created_tasks_count}</div>
                    <div>tasks</div>
                </Col>
                <Col>
                    Placeholder
                </Col>
                <Col>
                    Placeholder
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

    return (
        <Row
        >
            <Col lg={8}>
                <Container
                    className={`shadow mt-3 ${appStyles.Container}`}
                    lg={8}
                >
                    {hasLoaded ? (
                        <>
                            {mainProfile}
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