import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Container, Button, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { useRedirect } from '../../hooks/useRedirect';
import appStyles from '../../App.module.css';
import axios from 'axios';
import toast from 'react-hot-toast';

const CreateTaskForm = () => {
    useRedirect('loggedOut');

    const [categories, setCategories] = useState([])

    const [priorityLevels, setPriorityLevels] = useState([])

    const [profiles, setProfiles] = useState([])

    const [errors, setErrors] = useState({})

    const [taskData, setTaskData] = useState({
        title: '',
        category: '',
        priority_level: '',
        task_detail: '',
        assignee: '',
    });

    const { title, category, priority_level, task_detail, assignee } = taskData

    // Retrieve categories from the drf-tasked API
    const retrieveCategories = async () => {
        try {
            const { data } = await axios.get('/categories/')
            setCategories(data)
        } catch (err) {
            console.log(err)
        }
    }

    // Retrieve priority levels from the drf-tasked API
    const retrievePriorityLevels = async () => {
        try {
            const { data } = await axios.get('/priority-levels/')
            setPriorityLevels(data)
        } catch (err) {
            console.log(err)
        }
    }

    // Retrieve profiles from the drf-tasked API
    const retrieveProfiles = async () => {
        try {
            const { data } = await axios.get('/profiles/')
            setProfiles(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        retrieveCategories();
        retrievePriorityLevels();
        retrieveProfiles();
    }, []);

    const handleChange = (event) => {
        setTaskData({
            ...taskData,
            [event.target.name]: event.target.value,
        });
    }

    const history = useHistory()

    const returnToPreviousPage = () => {
        history.goBack();
    };

    const dropdownFields = (
        <div>
            <Form.Group controlId='category'>
                <Form.Label>Category</Form.Label>
                <Form.Control
                    as='select'
                    name='category'
                    onChange={handleChange}
                    aria-label='category'
                    defaultValue='Select a category'
                >
                    <option 
                    disabled 
                    hidden>Select a category</option>
                    {categories.results?.map(category => (
                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}: {category.description}
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>
            {errors?.category?.map((message, idx) =>
                <Alert variant='warning' key={idx}>
                    {message}
                </Alert>
            )}

            <Form.Group controlId='priority-level'>
                <Form.Label>Priority Level</Form.Label>
                <Form.Control
                    as='select'
                    name='priority_level'
                    onChange={handleChange}
                    aria-label='priority level'
                    defaultValue='Select a priority level'
                >
                    <option 
                    disabled 
                    hidden>Select a priority level</option>
                    {priorityLevels.results?.map(priority_level => (
                        <option
                            key={priority_level.id}
                            value={priority_level.id}
                        >
                            {priority_level.name}: {priority_level.description}
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>
            {errors?.priority_level?.map((message, idx) =>
                <Alert variant='warning' key={idx}>
                    {message}
                </Alert>
            )}

            <Form.Group controlId='assignee'>
                <Form.Label>Assignee</Form.Label>
                <Form.Control
                    as='select'
                    name='assignee'
                    onChange={handleChange}
                    aria-label='assignee'
                    defaultValue='Select an assignee'
                >
                    <option 
                    disabled 
                    hidden>Select an assignee</option>
                    {profiles.results?.map((profile) => (
                        <option
                            key={profile.id}
                            value={profile.id}
                        >
                            {profile.username}
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>
            {errors?.assignee?.map((message, idx) =>
                <Alert variant='warning' key={idx}>
                    {message}
                </Alert>
            )}

        </div>
    )

    const textFields = (
        <div>
            <Form.Group controlId='title'>
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type='text'
                    name='title'
                    value={title}
                    onChange={handleChange}
                    placeholder='Enter a title'
                >
                </Form.Control>
            </Form.Group>
            {errors?.title?.map((message, idx) =>
                <Alert variant='warning' key={idx}>
                    {message}
                </Alert>
            )}

            <Form.Group controlId='task-detail'>
                <Form.Label>Task Details</Form.Label>
                <Form.Control
                    as='textarea'
                    rows={5}
                    name='task_detail'
                    value={task_detail}
                    onChange={handleChange}
                    placeholder='Enter task details'
                >
                </Form.Control>
            </Form.Group>
            {errors?.task_detail?.map((message, idx) =>
                <Alert variant='warning' key={idx}>
                    {message}
                </Alert>
            )}
        </div>

    )

    const handleSubmit = async (event) => {
        // Prevents default form behaviour
        event.preventDefault();
        const formData = new FormData()

        formData.append('title', title)
        formData.append('category', category)
        formData.append('priority_level', priority_level)
        formData.append('task_detail', task_detail)
        formData.append('assignee', assignee)

        try {
            const { data } = await axiosReq.post('/tasks/', formData)
            toast.success('Task created successfully!')
            history.push(`/tasks/${data.id}`)
        } catch (err) {
            console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    }

    return (
        <Form 
        onSubmit={handleSubmit}
        >
            <Row className='d-flex justify-content-center mt-3'>
                <Col className='text-center' md={6}>
                    <Container
                        className={`shadow rounded mb-2 ${appStyles.Container}`}
                    >
                        <h2>Create New Task</h2>

                        {textFields}
                        {dropdownFields}
                        <p className='text-muted'>
                            <small>
                            Please note that your task will be visible to other members of the Tasked community.
                            </small>
                            </p>
                        <Button
                            className={`mr-1 ${appStyles.ButtonPrimary}`}
                            type='submit'
                        >Create Task
                        </Button>
                        <Button
                            variant='secondary'
                            onClick={returnToPreviousPage}
                        >
                            Cancel
                        </Button>
                    </Container>
                </Col>
            </Row>
        </Form>
    )
}

export default CreateTaskForm