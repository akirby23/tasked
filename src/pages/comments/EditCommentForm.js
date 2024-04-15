import React, { useState } from 'react'
import { axiosRes } from '../../api/axiosDefaults';
import { Form, Button } from 'react-bootstrap';
import { useRedirect } from '../../hooks/useRedirect';
import appStyles from '../../App.module.css';
import toast from 'react-hot-toast';


const EditCommentForm = ({ id, comment_detail, setDisplayEditForm, setComments }) => {
    useRedirect('loggedOut');

    const [formContent, setFormContent] = useState(comment_detail);

    const handleChange = (event) => {
        setFormContent(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axiosRes.patch(`/comments/${id}/`, {
                comment_detail: formContent.trim(),
            });
            setComments((prevComments) => ({
                ...prevComments,
                results: prevComments.results.map((comment) => {
                    return comment.id === id
                        ? {
                            ...comment,
                            comment_detail: formContent.trim(),
                            updated_on: 'now',
                        }
                        : comment;
                }),
            }));
            toast.success('Your changes have been saved.')
            setDisplayEditForm(false);
        } catch (err) {
            console.log(err);
        };
    };

    return (
        <Form
            onSubmit={handleSubmit}
        >
            <Form.Group>
                <Form.Control
                    as='textarea'
                    value={formContent}
                    onChange={handleChange}
                    rows={2}
                />
            </Form.Group>
            <div>
                <Button
                    disabled={!comment_detail.trim()}
                    className={`mr-1 ${appStyles.ButtonPrimary}`}
                    type='submit'
                >
                    Save Changes
                </Button>
                <Button
                    onClick={() => setDisplayEditForm(false)}
                    variant='secondary'
                >
                    Cancel
                </Button>
            </div>
        </Form>
    )
}

export default EditCommentForm