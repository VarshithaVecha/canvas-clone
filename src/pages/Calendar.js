import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Bell } from 'lucide-react';
import './Calendar.css';

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom">
        <h2 className="fw-bold fs-4 mb-0">Calendar</h2>
        <div style={{ position: 'relative' }}>
          <Bell size={24} />
          <span
            style={{
              position: 'absolute',
              top: -5,
              right: -5,
              background: 'red',
              color: 'white',
              borderRadius: '50%',
              fontSize: '12px',
              width: '18px',
              height: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            3
          </span>
        </div>
      </div>
      <div className="d-flex justify-content-center py-5">
        <div className="calendar-container bg-secoundary p-4 rounded shadow-sm mx-auto"
           style={{ width: '600px' }}
        >
          <Calendar
            onChange={setDate}
            value={date}
            calendarType="gregory"
            tileClassName={({ date: tileDate }) => {
              const today = new Date();
              if (
                tileDate.getDate() === today.getDate() &&
                tileDate.getMonth() === today.getMonth() &&
                tileDate.getFullYear() === today.getFullYear()
              ) {
                return 'highlight-today';
              }
              return null;
            }}
          />
        </div>
      </div>
      <div className="px-4 pb-4">
        <h2 className="fw-bold fs-4 mt-4">Recent Activities</h2>
        <ul className="list-unstyled mt-3">
          <li className="py-2 border-bottom">Assignment 1 due tomorrow</li>
          <li className="py-2 border-bottom">Grade released for Quiz 3</li>
          <li className="py-2">New message from Prof. Smith</li>
        </ul>
      </div>
    </div>
  );
};

export default CalendarPage;
