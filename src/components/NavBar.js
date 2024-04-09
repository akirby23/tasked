import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import logo from '../assets/tasked-logo.png';
import styles from '../styles/NavBar.module.css';
import { NavLink } from 'react-router-dom';
import { useCurrentUser } from '../contexts/CurrentUserContext';
import ProfilePicture from './ProfilePicture';

const NavBar = () => {
  const currentUser = useCurrentUser();

  // Navlinks to display while logged out
  const loggedOutIcons = (
    <>
    <NavLink
         to='log-in'
         className={styles.NavLink}
         activeClassName={styles.Active}
         >
        <i className="fa-solid fa-right-to-bracket"></i> Log In
          </NavLink>
        <NavLink 
        to='sign-up'
        className={styles.NavLink}
        activeClassName={styles.Active}
        >
        <i className="fa-solid fa-user-plus"></i> Sign Up
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
        <i className="fa-regular fa-square-plus"></i> New Task
        </NavLink>
      <NavLink
        to='/tasks'
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fa-solid fa-list"></i> All Tasks
      </NavLink>
    <NavLink
        to='/my-tasks'
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fa-solid fa-list-check"></i> My Tasks
        </NavLink>
        <NavLink
        to='/my-assigned-tasks'
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fa-solid fa-clipboard-list"></i> My Assigned Tasks
        </NavLink>
        <NavDropdown title={<ProfilePicture 
        src={currentUser?.profile_picture} 
        text={currentUser?.username} 
        />} 
        id="basic-nav-dropdown">
        <NavDropdown.Item
        as={NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
        >
        <i className="fa-regular fa-user"></i> My Profile
        </NavDropdown.Item>
        <NavDropdown.Item
        as={NavLink}
        to='/log-out'
        >
        <i className="fa-solid fa-right-from-bracket"></i> Log Out
        </NavDropdown.Item>
      </NavDropdown>
    </>
  )

  return (
    <Navbar 
    collapseOnSelect 
    expand="md" 
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
          width="70"
          height="70"
          className="d-inline-block align-top"
          alt="Tasked logo"
        />
      </Navbar.Brand>
      </NavLink>
      
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
    
      <Nav className='ml-auto text-center'>
        {currentUser ? loggedInIcons : loggedOutIcons}
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar;