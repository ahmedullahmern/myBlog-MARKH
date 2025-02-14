import React from "react";

const NotFoundComponent = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-2xl text-gray-700 mt-4">Page Not Found</p>
        <p className="text-lg text-gray-500 mt-2">Sorry, the page you're looking for doesn't exist.</p>
        <a href="/" className="mt-6 text-blue-600 hover:text-blue-800 text-lg font-semibold">
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundComponent;
