import React from 'react';
import PageNotFound from '../assets/404.png';
import Asset from './Asset';

const NotFound = ({ message }) => {
  return <Asset src={PageNotFound} message={message} />;
};

export default NotFound;
