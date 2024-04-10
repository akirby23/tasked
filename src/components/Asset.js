import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap'
import styles from '../styles/Asset.module.css';

/**
 * Multipurpose component used primarily to display the spinner
 * Obtained from CI's Moments walkthrough project
 */
const Asset = ({ spinner, src, message }) => {
  return (
    <Row className='d-flex justify-content-center align-items-center mt-4'>
      <Col md={8} className='text-center'>
      <div className={`${styles.Asset} p-4`}>
      {spinner && <Spinner animation='border' />}
      {src && <img src={src} alt={message} className={styles.Image}/>}
      {message && <p className='mt-4'>{message}</p>}
    </div>
      </Col>
    </Row>
  );
};

export default Asset;