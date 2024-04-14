import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import { removeTokenTimestamp } from '../utils/utils';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import ProfilePicture from './ProfilePicture';
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';
import axios from 'axios';
import logo from '../assets/tasked-logo.png';
import styles from '../styles/NavBar.module.css';
import toast from 'react-hot-toast';
import ModalPopup from './ModalPopup';
import appStyles from '../App.module.css';


const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const history = useHistory()

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const [displayLogOutModal, setDisplayLogOutModal] = useState(false);

  const handleDisplayLogOutModal = () => {
    setDisplayLogOutModal(true);
  }

  const handleCloseLogOutModal = () => {
    setDisplayLogOutModal(false);
  }

  const handleLogOut = async () => {
    try {
      await axios.post('/dj-rest-auth/logout/');
      setCurrentUser(null);
      removeTokenTimestamp();
      handleCloseLogOutModal();
      toast.success('Successfully logged out.')
      history.push('/')
    } catch (err) {
      console.log(err)
    }
  }

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
  )

  // Navlinks to display while logged in
  const loggedInIcons = (
    <>
      <NavLink
        to='/create-task'
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className='fa-regular fa-square-plus' /> New Task
      </NavLink>
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
      <NavDropdown title={<ProfilePicture
        src={currentUser?.profile_picture}
        text={currentUser?.username}
      />}
        id='basic-nav-dropdown'>
        <NavDropdown.Item
          as={NavLink}
          to={`/profiles/${currentUser?.profile_id}`}
        >
          <i className='fa-regular fa-user' /> My Profile
        </NavDropdown.Item>
        <NavDropdown.Item
          as={NavLink}
          onClick={handleDisplayLogOutModal}
          to='#'
        >
          <i className='fa-solid fa-right-from-bracket' /> Log Out
        </NavDropdown.Item>
      </NavDropdown>
    </>
  )

  return (
    <>
    <Navbar
      expanded={expanded}
      collapseOnSelect
      expand='md'
      className={styles.NavBar}
    >
      <Container>
        <NavLink
          exact
          to='/'
          className={styles.NavLink}
        >
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

        <Navbar.Toggle
          aria-controls='responsive-navbar-nav'
          ref={ref}
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse
          id='responsive-navbar-nav'
        >
          <Nav className='ml-auto text-center d-flex align-items-center'>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {displayLogOutModal && (
      <ModalPopup
        show={displayLogOutModal}
        onHide={handleCloseLogOutModal}
        title={<h2>Log Out</h2>}
        body={<p>Are you sure you want to log out?</p>}
        footer={
          <div>
            <Button
              className={`mr-1 ${appStyles.ButtonPrimary}`}
              type='submit'
              aria-label='Log out'
              onClick={handleLogOut}
            >
              Log Out
            </Button>
            <Button
              variant='secondary'
              onClick={handleCloseLogOutModal}
              aria-label='Cancel'
            >
              Cancel
            </Button>
          </div>
        }
      />
    )
  }
    </>
  )
}

export default NavBar;