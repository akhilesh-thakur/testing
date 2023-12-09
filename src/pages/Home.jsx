// Home.jsx
import React from 'react';

const Home = () => {
  const backgroundStyle = {
    backgroundImage: 'url("./public/img.webp")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', 
    display: 'flex',
    color: 'white', 
  };

  return (
    <div style={backgroundStyle}>
      <h1 style={{marginLeft:"200px"}} className="text-4xl font-bold m-40">Welcome to Our Website</h1>
    </div>
  );
};

export default Home;
