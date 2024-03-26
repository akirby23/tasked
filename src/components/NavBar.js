import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/tasked-logo.png';
import styles from '../styles/NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
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
        activeClassName={styles.Active}
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
      </Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Container>
      <Nav className='ml-auto text-center'>
        <NavLink
         to='log-in'
         className={styles.NavLink}
         activeClassName={styles.Active}
         >
        <i class="fa-solid fa-right-to-bracket"></i> Log In
          </NavLink>
        <NavLink 
        to='sign-up'
        className={styles.NavLink}
        activeClassName={styles.Active}
        >
        <i class="fa-solid fa-user-plus"></i> Sign Up
        </NavLink>
      </Nav>
      </Container>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default NavBar;