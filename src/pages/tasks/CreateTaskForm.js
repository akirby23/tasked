import React, { useEffect, useState } from 'react'
import { Form, Row, Col, Container, Button, Alert } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { axiosReq } from '../../api/axiosDefaults';

const CreateTaskForm = () => {
    const [categories, setCategories] = useState([])

    const [priorityLevels, setPriorityLevels] = useState([])

    const [profiles, setProfiles] = useState([])

    const [errors, setErrors] = useState({})

    // Retrieve categories from the drf-tasked API
    const retrieveCategories = async () => {
        try {
            const {data} = await axios.get('/categories/')
            setCategories(data)
        } catch (err){
            console.log(err)
        }
    }

    // Retrieve priority levels from the drf-tasked API
    const retrievePriorityLevels = async () => {
        try {
            const {data} = await axios.get('/priority-levels/')
            setPriorityLevels(data)
        } catch (err){
            console.log(err)
        }
    }

    // Retrieve profiles from the drf-tasked API
    const retrieveProfiles = async () => {
        try {
            const {data} = await axios.get('/profiles/')
            setProfiles(data)
        } catch (err){
            console.log(err)
        }
    }
    
    useEffect(() => {
        retrieveCategories();
        retrievePriorityLevels();
        retrieveProfiles();
    }, []);

    const [taskData, setTaskData] = useState({
        title: '',
        category: '',
        priority_level: '',
        task_detail: '',
        assignee: '',
        status: ''
    });

    const { title, category, priority_level, task_detail, assignee } = taskData

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
            <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control
                    as='select'
                    onChange={handleChange}
                    aria-label='category'
                >
                    {categories.map(category => (
                        <option
                            key={category.id}
                        >
                            {category.name}: {category.description}
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>
            {errors?.category?.map((message, idx) =>
                        <Alert variant="warning" key={idx}>
                            {message}
                        </Alert>
                        )}

            <Form.Group controlId="priority-level">
                <Form.Label>Priority Level</Form.Label>
                <Form.Control
                    as='select'
                    onChange={handleChange}
                    aria-label='priority level'
                >
                    {priorityLevels.map(priority_level => (
                        <option
                            key={priority_level.id}
                        >
                            {priorityLevels.priority_level}
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>
            {errors?.priority_level?.map((message, idx) =>
                        <Alert variant="warning" key={idx}>
                            {message}
                        </Alert>
                        )}

            <Form.Group controlId="assignee">
                <Form.Label>Assignee</Form.Label>
                <Form.Control
                    as='select'
                    onChange={handleChange}
                    aria-label='assignee'
                >
                    {profiles.map((profile) => (
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
                        <Alert variant="warning" key={idx}>
                            {message}
                        </Alert>
                        )}

        </div>
    )

    const textFields = (
        <div>
            <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChange}
                    placeholder="Enter a title" />
            </Form.Group>
            {errors?.title?.map((message, idx) =>
                        <Alert variant="warning" key={idx}>
                            {message}
                        </Alert>
                        )}

            <Form.Group controlId="task-details">
                <Form.Label>Task Details</Form.Label>
                <Form.Control
                    as='textarea'
                    rows={7}
                    name='task-details'
                    value={task_detail}
                    onChange={handleChange}
                    placeholder='Enter task details'
                />
            </Form.Group>
            {errors?.task_details?.map((message, idx) =>
                        <Alert variant="warning" key={idx}>
                            {message}
                        </Alert>
                        )}


            <Button
                variant="primary"
                type="submit"
            >Create Task
            </Button>
            <Button
                variant="outline-primary"
                onClick={returnToPreviousPage}
            >
                Cancel
            </Button>
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
            const {data} = await axiosReq.post('/tasks/', formData)
            history.push(`/tasks/${data.id}`)
        } catch(err){
            console.log(err);
            if (err.response?.status !== 401){
                setErrors(err.response?.data);
            }
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Container>
                        <h1>Create New Task</h1>

                        {textFields}
                        {dropdownFields}

                    </Container>
                </Col>
            </Row>
        </Form>
    )
}

export default CreateTaskForm