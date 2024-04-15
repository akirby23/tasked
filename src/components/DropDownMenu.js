import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import styles from '../styles/DropDownMenu.module.css'


// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const ThreeDots = React.forwardRef(({ onClick }, ref) => (
  <i
    className='fa-solid fa-ellipsis-vertical'
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

export const DropDownMenu = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown 
    className={`ml-auto ${styles.Absolute}`}
    drop='left'
    >
      <Dropdown.Toggle as={ThreeDots} />

      <Dropdown.Menu
      className='text-center'
      popperConfig={{ strategy: 'fixed' }}
      >
        <Dropdown.Item
          onClick={handleEdit}
          aria-label='edit'
          className={styles.DropdownItem}
        >
          <i className='fa-regular fa-pen-to-square'></i>
        </Dropdown.Item>
        <Dropdown.Item
          onClick={handleDelete}
          aria-label='delete'
          className={styles.DropdownItem}
        >
          <i className='fa-regular fa-trash-can'></i>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

// Displays on user's own profile to allow them to edit it
// Adapted from CI's Moment's walkthrough project
export function EditProfileDropdown({ id }) {
  const history = useHistory();
  return (
    <Dropdown 
    drop='left'
    className={`ml-auto px-5 ${styles.Absolute}`}
    >
      <Dropdown.Toggle 
      as={ThreeDots} 
      />
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit`)}
          aria-label='edit-profile'
        >
          <i className='fa-solid fa-user-pen' /> Edit Profile
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/username`)}
          aria-label='edit-username'
        >
          <i className='fa-regular fa-id-card mr-1' />
            Change Username
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/password`)}
          aria-label='edit-password'
        >
          <i className='fa-solid fa-lock mr-1' />
            Change Password
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
