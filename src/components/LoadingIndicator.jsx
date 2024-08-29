import React from 'react';

const LoadingIndicator = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="loader"></div>
    <style >{`
      .loader {
        border: 8px solid #f3f3f3;
        border-radius: 50%;
        border-top: 8px solid #3498db;
        width: 60px;
        height: 60px;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

export default LoadingIndicator;
