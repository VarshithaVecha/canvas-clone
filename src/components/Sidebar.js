import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HouseDoorFill,
  BookFill,
  CalendarEventFill,
  EnvelopeFill,
  QuestionCircleFill
} from 'react-bootstrap-icons';
import './Sidebar.css';

const Sidebar = ({ isOpen, onNavigate }) => {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <HouseDoorFill /> },
    { name: 'Courses', path: '/courses', icon: <BookFill /> },
    { name: 'Calendar', path: '/calendar', icon: <CalendarEventFill /> },
    { name: 'Inbox', path: '/inbox', icon: <EnvelopeFill /> },
    { name: 'Help', path: '/help', icon: <QuestionCircleFill /> },
  ];

  return (
    <>
      {isOpen && (
        <div className="sidebar-mobile bg-light border-end d-md-none position-fixed top-0 start-0 h-100 w-75 p-3">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-bold">Canvas</h5>
            <button className="btn btn-outline-danger" onClick={onNavigate}>X</button>
          </div>
          <ul className="nav flex-column">
            {navItems.map((item) => (
              <li className="nav-item" key={item.name}>
                <Link
                  to={item.path}
                  className={`nav-link d-flex align-items-center gap-2 ${location.pathname.startsWith(item.path) ? 'active fw-bold' : ''}`}
                  onClick={onNavigate}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="sidebar d-none d-md-flex flex-column bg-light border-end p-3 align-items-center align-items-lg-start">
        <h5 className="fw-bold d-none d-lg-block mb-4">Canvas</h5>
        <ul className="nav flex-column w-100">
          {navItems.map((item) => (
            <li className="nav-item" key={item.name}>
              <Link
                to={item.path}
                className={`nav-link d-flex align-items-center gap-2 px-2 py-2 ${
                  location.pathname.startsWith(item.path) ? 'active fw-bold' : ''
                }`}
              >
                {item.icon}
                <span className="d-none d-lg-inline">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
