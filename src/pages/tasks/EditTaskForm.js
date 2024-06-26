import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { useParams } from 'react-router-dom';
import { useRedirect } from '../../hooks/useRedirect';
import axios from 'axios';
import appStyles from '../../App.module.css';
import toast from 'react-hot-toast';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const EditTaskForm = () => {
  useRedirect('loggedOut');

  const [categories, setCategories] = useState([]);

  const [priorityLevels, setPriorityLevels] = useState([]);

  const [profiles, setProfiles] = useState([]);

  const [errors, setErrors] = useState({});

  const [taskData, setTaskData] = useState({
    title: '',
    category: '',
    priority_level: '',
    task_detail: '',
    assignee: '',
  });

  const { title, category, priority_level, task_detail, assignee } = taskData;

  const history = useHistory();

  const returnToPreviousPage = () => {
    history.goBack();
  };

  // Retrieve categories from the drf-tasked API
  const retrieveCategories = async () => {
    try {
      const { data } = await axios.get('/categories/');
      setCategories(data);
    } catch (err) {
      // console.log(err);
    }
  };

  // Retrieve priority levels from the drf-tasked API
  const retrievePriorityLevels = async () => {
    try {
      const { data } = await axios.get('/priority-levels/');
      setPriorityLevels(data);
    } catch (err) {
      // console.log(err);
    }
  };

  // Retrieve profiles from the drf-tasked API
  const retrieveProfiles = async (setCategories) => {
    try {
      const { data } = await axios.get('/profiles/');
      setProfiles(data);
    } catch (err) {
      // console.log(err);
    }
  };

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
        >
          <option disabled>Select a category</option>
          {categories.results?.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}: {category.description}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      {errors?.category?.map((message, idx) => (
        <Alert variant='warning' key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group controlId='priority-level'>
        <Form.Label>Priority Level</Form.Label>
        <Form.Control
          as='select'
          name='priority_level'
          onChange={handleChange}
          aria-label='priority level'
        >
          <option disabled>Select a priority level</option>
          {priorityLevels.results?.map((priority_level) => (
            <option key={priority_level.id} value={priority_level.id}>
              {priority_level.name}: {priority_level.description}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      {errors?.priority_level?.map((message, idx) => (
        <Alert variant='warning' key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group controlId='assignee'>
        <Form.Label>Assignee</Form.Label>
        <Form.Control
          as='select'
          name='assignee'
          onChange={handleChange}
          aria-label='assignee'
        >
          <option disabled>Select an assignee</option>
          {profiles.results?.map((profile) => (
            <option key={profile.id} value={profile.id}>
              {profile.username}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      {errors?.assignee?.map((message, idx) => (
        <Alert variant='warning' key={idx}>
          {message}
        </Alert>
      ))}
    </div>
  );

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
        ></Form.Control>
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant='warning' key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group controlId='task-detail'>
        <Form.Label>Task Details</Form.Label>
        <Form.Control
          as='textarea'
          rows={5}
          name='task_detail'
          value={task_detail}
          onChange={handleChange}
          placeholder='Enter task details'
        ></Form.Control>
      </Form.Group>
      {errors?.task_detail?.map((message, idx) => (
        <Alert variant='warning' key={idx}>
          {message}
        </Alert>
      ))}
    </div>
  );

  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/tasks/${id}/`);
        const {
          title,
          category,
          priority_level,
          task_detail,
          assignee,
          is_owner,
          is_assignee,
        } = data;

        is_owner || is_assignee
          ? setTaskData({
              title,
              category,
              priority_level,
              task_detail,
              assignee,
            })
          : history.push('/');
      } catch (err) {
        // console.log(err);
      }
    };

    handleMount();
  }, [history, id]);

  const handleSubmit = async (event) => {
    // Prevents default form behaviour
    event.preventDefault();
    const formData = new FormData();

    formData.append('title', title);
    formData.append('category', category);
    formData.append('priority_level', priority_level);
    formData.append('task_detail', task_detail);
    formData.append('assignee', assignee);

    try {
      await axiosReq.put(`/tasks/${id}/`, formData);
      toast.success('Your changes have been saved.');
      history.push(`/tasks/${id}`);
    } catch (err) {
      // console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className='d-flex justify-content-center mt-4'>
        <Col className='text-center' md={6}>
          <Container className={`shadow rounded ${appStyles.Container}`}>
            <h2>Edit Task</h2>

            {textFields}
            {dropdownFields}

            <Button className={`mr-1 ${appStyles.ButtonPrimary}`} type='submit'>
              Save Changes
            </Button>
            <Button variant='secondary' onClick={returnToPreviousPage}>
              Cancel
            </Button>
          </Container>
        </Col>
      </Row>
    </Form>
  );
};

export default EditTaskForm;
