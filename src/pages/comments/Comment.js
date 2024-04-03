import React from 'react'
import ProfilePicture from '../../components/ProfilePicture'
import { Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Comment = ( { profile_id, profile_image, owner, created_on, updated_on, comment_detail }) => {

  return (
    <div>
        <Media
        className='m-2 p-2 rounded shadow'
        >
            <Link
            to={`/profiles/${profile_id}`}
            >
            <ProfilePicture
            src={profile_image}
            />
            </Link>
            <Media.Body>
                <span className='mr-1'>{owner}</span> 
                <span>{created_on}</span>
                <p>{comment_detail}</p>
                <span>Last updated: {updated_on}</span>
            </Media.Body>
        </Media>
    </div>
  )
}

export default Comment