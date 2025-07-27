import React from 'react';
import { Card, ListGroup, Badge } from 'react-bootstrap';
import { Mail } from 'lucide-react';

const Inbox = () => {
  const messages = [
    {
      id: 1,
      sender: 'Prof. Smith',
      subject: 'Assignment Feedback',
      date: '26 Jul 2025',
      unread: true,
    },
    {
      id: 2,
      sender: 'Admin',
      subject: 'Canvas Maintenance',
      date: '25 Jul 2025',
      unread: false,
    },
    {
      id: 3,
      sender: 'Course Bot',
      subject: 'Reminder: Quiz Tomorrow',
      date: '24 Jul 2025',
      unread: true,
    },
  ];

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Inbox</h2>
        <div className="position-relative">
          <Mail size={28} />
          <Badge
            bg="primary"
            pill
            className="position-absolute top-0 start-100 translate-middle"
          >
            {messages.filter((msg) => msg.unread).length}
          </Badge>
        </div>
      </div>

      <Card className="shadow-sm rounded-4">
        <ListGroup variant="flush">
          {messages.map((msg) => (
            <ListGroup.Item
              key={msg.id}
              className={`d-flex justify-content-between align-items-center ${
                msg.unread ? 'fw-bold bg-light' : ''
              }`}
            >
              <div>
                <div>{msg.subject}</div>
                <small className="text-muted">From: {msg.sender}</small>
              </div>
              <div className="text-muted">{msg.date}</div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
};

export default Inbox;
