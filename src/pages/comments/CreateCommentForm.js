import React, { useState } from 'react';
import { axiosRes } from '../../api/axiosDefaults';
import { Form, InputGroup, Button } from 'react-bootstrap';
import ProfilePicture from '../../components/ProfilePicture';
import { Link } from 'react-router-dom';
import { useCurrentUser } from '../../contexts/CurrentUserContext';

// Adapted from CI's Moments walkthrough project
const CreateCommentForm = (props) => {
    const { task, setTask, setComments, profile_id } = props;
    const [comment_detail, setCommentDetail] = useState("");
    const currentUser = useCurrentUser();

    const handleChange = (event) => {
        setCommentDetail(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Sends a post request to the API containing comment data
            const { data } = await axiosRes.post('/comments/', {
                comment_detail,
                task,
            });
            // 
            setComments((prevComments) => ({
                ...prevComments,
                results: [data, ...prevComments.results],
            }));
            setTask((prevTask) => ({
                results: [
                    {
                        ...prevTask.results[0],
                        // Increments the comment count
                        comments_count: prevTask.results[0].comments_count + 1,
                    },
                ],
            }));
            setCommentDetail("");
        } catch (err) {
            console.log(err);
        };
    };
        

  return (
      <Form onSubmit={handleSubmit}>
        <Form.Group>
        <InputGroup>
        <Link 
        to={`/profiles/${profile_id}`}
        >
            <ProfilePicture 
            src={currentUser?.profile_picture}
            />
        </Link>
        <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your comment here"
            value={comment_detail}
            onChange={handleChange}
            />
        </InputGroup>
          </Form.Group>
        <Button
        type="submit"
        disabled={!comment_detail.trim()}
        >
            Submit
        </Button>
      </Form>
  )
}

export default CreateCommentForm