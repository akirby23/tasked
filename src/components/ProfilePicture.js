import React from 'react';
import styles from '../styles/ProfilePicture.module.css';

const ProfilePicture = ({ src, height = 45, text }) => {
  return (
    <span>
      <img
        src={src}
        width={height}
        alt='User'
        className={styles.ProfilePicture}
      />
      {text}
    </span>
  );
};

export default ProfilePicture;
