import React, { useState } from 'react'
import ProfilePicture from '../../components/ProfilePicture'
import { Media, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { DropDownMenu } from '../../components/DropDownMenu';
import { axiosRes } from '../../api/axiosDefaults';
import ModalPopup from '../../components/ModalPopup';
import EditCommentForm from './EditCommentForm';
import toast from 'react-hot-toast';

const Comment = ({ profile_id, profile_image, owner, created_on, updated_on, comment_detail, id, setTask, setComments }) => {

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const [displayEditForm, setDisplayEditForm] = useState(false);
  const [displayDeleteModal, setDisplayDeleteModal] = useState(false);

  const handeDisplayDeleteModal = () => {
    setDisplayDeleteModal(true);
  }

  const handleCloseDeleteModal = () => {
    setDisplayDeleteModal(false);
  }

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/${id}/`);
      setTask((prevTask) => ({
        ...prevTask.results?.[0],
        comments_count: prevTask.results?.[0].comments_count - 1,
      }));
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
      toast.success('Your comment has been deleted.')
    } catch (err) {
      console.log(err);
      setDisplayDeleteModal(false);
    };
  };

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
          {displayEditForm ? (
            <EditCommentForm
              id={id}
              profile_id={profile_id}
              comment_detail={comment_detail}
              setComments={setComments}
              setDisplayEditForm={setDisplayEditForm}
            />
          ) : <p>{comment_detail}</p>}
          <span>Last updated: {updated_on}</span>
        </Media.Body>
        {is_owner && !displayEditForm && (
          <DropDownMenu
            handleEdit={() => setDisplayEditForm(true)}
            handleDelete={handeDisplayDeleteModal}
          />
        )}
      </Media>
      {displayDeleteModal && (<ModalPopup
        show={displayDeleteModal}
        onHide={handleCloseDeleteModal}
        title={<h2>Delete Comment</h2>}
        body={<p>Are you sure you want to delete this comment? This action cannot be undone.</p>}
        footer={
          <div>
            <Button
              variant='danger'
              onClick={handleDelete}
            >
              Delete Comment
            </Button>
            <Button
              variant='secondary'
              onClick={handleCloseDeleteModal}
            >
              Cancel
            </Button>
          </div>
        }
      />
      )};
    </div>
  )
}

export default Comment