import React from "react";
import { Dropdown } from "react-bootstrap";
import styles from "../styles/DropDownMenu.module.css"

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
    className='ml-auto'>
      <Dropdown.Toggle as={ThreeDots} />

      <Dropdown.Menu
      className='text-center'
      popperConfig={{ strategy: "fixed" }}
      >
        <Dropdown.Item
          onClick={handleEdit}
          aria-label='edit'
          className={styles.DropdownItem}
        >
          <i class="fa-regular fa-pen-to-square"></i>
        </Dropdown.Item>
        <Dropdown.Item
          onClick={handleDelete}
          aria-label='delete'
          className={styles.DropdownItem}
        >
          <i class="fa-regular fa-trash-can"></i>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
