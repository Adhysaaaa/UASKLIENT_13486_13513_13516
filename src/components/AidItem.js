import React from 'react';
import { Card, Button } from 'react-bootstrap';

function AidItem({ aid, onDelete, onUpdate }) {
    const handleDelete = () => {
        onDelete(aid.id);
    };

    const handleUpdate = () => {
        onUpdate(aid);
    };
    

    return (
        <Card className="mb-4 card-hover">
            <Card.Body>
                <Card.Title>{aid.name}</Card.Title>
                <Card.Text>{aid.description}</Card.Text>
                <Card.Text><strong>Amount:</strong> {aid.amount}</Card.Text>
                <Card.Text><strong>Date:</strong> {aid.date}</Card.Text>
                <Card.Text><strong>Location:</strong> {aid.location}</Card.Text>
                <Button variant="warning" onClick={handleUpdate}>Edit</Button>
                <Button variant="danger" onClick={handleDelete} className="ms-2">Delete</Button>
            </Card.Body>
        </Card>
    );
}

export default AidItem;
