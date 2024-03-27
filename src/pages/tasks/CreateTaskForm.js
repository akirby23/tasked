import React from 'react'
import { Form, Row, Col, Container, Button } from 'react-bootstrap'

const CreateTaskForm = () => {
    return (
        <Form>
            <Row>
                <Col>
                    <Container>
                        <h1>Create New Task</h1>
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="title" placeholder="Enter a title" />
                        </Form.Group>
                        
                        <Form.Group controlId="category">
                        <Form.Label>Category</Form.Label>
                            <Form.Control
                            as='select'
                            name='category'
                            aria-label='category'
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="priority-level">
                        <Form.Label>Priority Level</Form.Label>
                            <Form.Control
                            as='select'
                            name='priority-level'
                            aria-label='priority level'
                            >
                            </Form.Control>
                        </Form.Group>
                        
                        <Form.Group controlId="task-details">
                            <Form.Label>Task Details</Form.Label>
                            <Form.Control type="title" placeholder="Enter task details" />
                        </Form.Group>

                        <Form.Group controlId="assignee">
                        <Form.Label>Assignee</Form.Label>
                            <Form.Control
                            as='select'
                            name='assignee'
                            aria-label='assignee'
                            >
                            </Form.Control>
                        </Form.Group>

                        <Button
                            variant="primary"
                            type="submit">
                            Submit Task
                        </Button>

                    </Container>
                </Col>
            </Row>
        </Form>
    )
}

export default CreateTaskForm