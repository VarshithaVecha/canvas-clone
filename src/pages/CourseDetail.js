import React, { useState } from 'react';
import { Tab, Nav, Row, Col, Card, ListGroup } from 'react-bootstrap';

const CourseDetail = () => {
  
  const [key, setKey] = useState('overview');

  const mockCourse = {
    title: 'Web Development',
    overview: 'This course covers HTML, CSS, JavaScript, and React.js. You will learn to build modern web apps.',
    assignments: [
      { id: 1, title: 'Build a Personal Portfolio', due: '2025-08-10' },
      { id: 2, title: 'JavaScript Game Project', due: '2025-08-20' },
    ],
    grades: [
      { assignment: 'Portfolio', grade: 'A' },
      { assignment: 'JS Game', grade: 'B+' },
    ],
  };

  return (
    <div className="container-fluid">
      <h2 className="fw-bold mb-4">Course: {mockCourse.title}</h2>
      <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column mb-3">
              <Nav.Item>
                <Nav.Link eventKey="overview">Overview</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="assignments">Assignments</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="grades">Grades</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="overview">
                <Card className="shadow-sm rounded-4 p-3">
                  <Card.Body>
                    <Card.Text>{mockCourse.overview}</Card.Text>
                  </Card.Body>
                </Card>
              </Tab.Pane>

              <Tab.Pane eventKey="assignments">
                <Card className="shadow-sm rounded-4 p-3">
                  <Card.Body>
                    <ListGroup>
                      {mockCourse.assignments.map((a) => (
                        <ListGroup.Item key={a.id}>
                          <strong>{a.title}</strong> — Due: {a.due}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Tab.Pane>

              <Tab.Pane eventKey="grades">
                <Card className="shadow-sm rounded-4 p-3">
                  <Card.Body>
                    <ListGroup>
                      {mockCourse.grades.map((g, idx) => (
                        <ListGroup.Item key={idx}>
                          {g.assignment}: <strong>{g.grade}</strong>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default CourseDetail;
