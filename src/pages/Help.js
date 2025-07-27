import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { MessageCircle } from 'lucide-react';

const Help = () => {
  return (
    <div className="container-fluid">
      <h2 className="fw-bold mb-4">Help & Support</h2>

      <Card className="mb-4 shadow-sm rounded-4 p-3">
        <h5 className="mb-3">Contact Information</h5>
        <p><strong>Email:</strong> support@canvaslms.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Office Hours:</strong> Monday to Friday, 9 AM - 6 PM</p>
      </Card>

      <Card className="shadow-sm rounded-4 p-3 d-flex align-items-center justify-content-center" style={{ height: '250px', position: 'relative' }}>
        <h5 className="mb-3">Need quick help?</h5>
        <p>Click the chat icon to get instant assistance from our support team.</p>

        <Button variant="primary" className="rounded-circle p-3 position-absolute bottom-0 end-0 m-3">
          <MessageCircle size={24} />
        </Button>
      </Card>
    </div>
  );
};

export default Help;
