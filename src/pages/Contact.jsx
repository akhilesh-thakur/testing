// Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">Contact Us</h1>
      <p className="text-gray-700">
        We would love to hear from you! Whether you have questions about our SEO services, want to discuss a potential
        collaboration, or simply say hello, feel free to reach out to us using the contact information below:
      </p>
      <div className="mt-4">
        <p className="text-gray-700">
          <span className="font-bold">Address:</span> Your Street, Mumbai, India
        </p>
        <p className="text-gray-700">
          <span className="font-bold">Phone:</span> +91 123 456 789
        </p>
        <p className="text-gray-700">
          <span className="font-bold">Email:</span> info@example.com
        </p>
      </div>
    </div>
  );
};

export default Contact;
