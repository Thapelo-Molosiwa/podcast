import React from 'react';
import './Loading.css'; // Add your CSS styles for the loading component

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="spinner"></div>
    </div>
  );
};

export default Loading;
