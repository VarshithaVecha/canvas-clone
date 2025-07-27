import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const mockCourses = [
  { id: 1, title: "Web Development", progress: 80 },
  { id: 2, title: "Data Structures", progress: 65 },
  { id: 3, title: "Machine Learning", progress: 40 },
  { id: 4, title: "DBMS", progress: 90 },
  { id: 5, title: "Cloud Computing", progress: 55 },
  { id: 6, title: "Operating Systems", progress: 75 },
];

const todoList = [
  "Complete Machine Learning Assignment",
  "Review DBMS Notes",
  "Attend OS Lecture at 2 PM",
  "Check Calendar for Deadlines",
  "Reply to Project Group Mail",
];

const Dashboard = () => {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container-fluid">
      <div className="mb-4">
        <h2 className="fw-bold">Welcome back, Student!</h2>
        <p className="text-muted">{today}</p>
      </div>
      <div className="mb-4">
        <h4 className="fw-bold">Your Courses</h4>
        <div className="row">
          {mockCourses.map((course) => (
            <div className="col-lg-4 col-md-6 mb-4" key={course.id}>
              <Card className="h-100 shadow-sm rounded-4">
                <Card.Body>
                  <Card.Title className="fw-bold">{course.title}</Card.Title>
                  <div className="mb-2">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${course.progress}%` }}
                        aria-valuenow={course.progress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {course.progress}%
                      </div>
                    </div>
                  </div>
                  <Link to={`/courses/${course.id}`}>
                    <Button variant="light" className="rounded-3 px-4">
                      Go to Course
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="fw-bold">To-Do List</h4>
        <Card className="shadow-sm rounded-4 p-3">
          <ListGroup variant="flush">
            {todoList.map((item, index) => (
              <ListGroup.Item key={index} className="d-flex align-items-center">
                <input
                  type="checkbox"
                  id={`check-${index}`}
                  className="form-check-input me-2 green-checkbox"
                />
                <label htmlFor={`check-${index}`} className="m-0">
                  {item}
                </label>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
