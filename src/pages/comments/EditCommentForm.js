import React, { useState } from 'react'
import { axiosRes } from '../../api/axiosDefaults';
import { Form, Button } from 'react-bootstrap';

const EditCommentForm = ({ id, comment_detail, setDisplayEditForm, setComments }) => {
    const [formContent, setFormContent] = useState(comment_detail);

    const handleChange = (event) => {
        setFormContent(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axiosRes.put(`/comments/${id}/`, {
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
                    type='submit'
                    variant='primary'
                    className='mr-1'
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