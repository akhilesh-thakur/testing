// Services.jsx
import React from 'react';

const Services = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">SEO Services in Mumbai</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ServiceCard title="On-Page Optimization" description="Optimizing website content, meta tags, and structure for search engines." />
        <ServiceCard title="Link Building" description="Building high-quality backlinks to improve your website's authority." />
        <ServiceCard title="Content Creation" description="Creating valuable, relevant, and engaging content for your target audience." />
        {/* Add more services as needed */}
      </div>
    </div>
  );
};

const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Services;
