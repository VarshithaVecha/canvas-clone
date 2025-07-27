import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const mockCourses = [
  { id: 1, title: 'Web Development', description: 'Learn HTML, CSS, JS, and React' },
  { id: 2, title: 'Data Structures', description: 'Master arrays, stacks, queues, and trees' },
  { id: 3, title: 'Machine Learning', description: 'Supervised and unsupervised learning' },
  { id: 4, title: 'DBMS', description: 'Database design, SQL, and transactions' },
  { id: 5, title: 'Cloud Computing', description: 'AWS, Azure and cloud fundamentals' },
  { id: 6, title: 'Operating Systems', description: 'Processes, memory, and file systems' },
];

const Courses = () => {
  return (
    <div className="container-fluid">
      <h2 className="fw-bold mb-4">All Courses</h2>
      <div className="row">
        {mockCourses.map((course) => (
          <div className="col-lg-4 col-md-6 mb-4" key={course.id}>
            <Card className="h-100 shadow-sm rounded-4">
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title className="fw-bold">{course.title}</Card.Title>
                  <Card.Text>{course.description}</Card.Text>
                </div>
                <div className="mt-3">
                  <Link to={`/courses/${course.id}`}>
                    <Button variant="primary" className="rounded-3 px-4">
                      View Course
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
