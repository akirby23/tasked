import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  useCurrentUser,
  useSetCurrentUser,
} from '../contexts/CurrentUserContext';
import { removeTokenTimestamp } from '../utils/utils';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import ProfilePicture from './ProfilePicture';
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';
import axios from 'axios';
import logo from '../assets/tasked-logo.png';
import styles from '../styles/NavBar.module.css';
import toast from 'react-hot-toast';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

/**
 * Displays the nav bar on all pages
 */
const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const history = useHistory();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleLogOut = async () => {
    try {
      await axios.post('/dj-rest-auth/logout/');
      setCurrentUser(null);
      removeTokenTimestamp();
      toast.success('Successfully logged out.');
      history.push('/');
    } catch (err) {
      // console.log(err);
    }
  };

  const newTaskIcon = (
    <NavLink
      to='/create-task'
      className={styles.NavLink}
      activeClassName={styles.Active}
    >
      <i className='fa-regular fa-square-plus' /> New Task
    </NavLink>
  );

  // Navlinks to display while logged out
  const loggedOutIcons = (
    <>
      <NavLink
        to='log-in'
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className='fa-solid fa-right-to-bracket' /> Log In
      </NavLink>
      <NavLink
        to='sign-up'
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className='fa-solid fa-user-plus' /> Sign Up
      </NavLink>
    </>
  );

  // Navlinks to display while logged in
  const loggedInIcons = (
    <>
      <NavLink
        to='/tasks'
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className='fa-solid fa-list' /> All Tasks
      </NavLink>
      <NavLink
        to='/my-tasks'
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className='fa-solid fa-list-check' /> My Tasks
      </NavLink>
      <NavLink
        to='/my-assigned-tasks'
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className='fa-solid fa-clipboard-list' /> My Assigned Tasks
      </NavLink>
      <NavLink as={NavLink} onClick={handleLogOut} to='/'>
        <i className='fa-solid fa-right-from-bracket' /> Log Out
      </NavLink>
      <NavLink
        as={NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
        className='pl-1'
      >
        <ProfilePicture
          src={currentUser?.profile_picture}
          text={currentUser?.username}
          height={40}
        />
      </NavLink>
    </>
  );

  return (
    <>
      <Navbar
        expanded={expanded}
        collapseOnSelect
        expand='md'
        className={styles.NavBar}
      >
        <Container>
          <NavLink exact to='/' className={styles.NavLink}>
            <Navbar.Brand>
              <img
                src={logo}
                width='70'
                height='70'
                className='d-inline-block align-top'
                alt='Tasked logo'
              />
            </Navbar.Brand>
          </NavLink>
          {currentUser && newTaskIcon}
          <Navbar.Toggle
            aria-controls='responsive-navbar-nav'
            ref={ref}
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ml-auto text-center d-flex align-items-center'>
              {currentUser ? loggedInIcons : loggedOutIcons}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
