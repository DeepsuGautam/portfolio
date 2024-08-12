// app/LoadingPage.jsx
import React from 'react';

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-900">
      <div className="flex space-x-[10px]">
        <div className="w-6 h-6 bg-slate-400 rounded-full animate-bounce delay-100"></div>
        <div className="w-6 h-6 bg-slate-400 rounded-full animate-bounce delay-200"></div>
        <div className="w-6 h-6 bg-slate-400 rounded-full animate-bounce delay-300"></div>
      </div>
      <p className="text-[16px] text-slate-100 mt-[20px]">
        Loading, please wait...
      </p>
    </div>
  );
};

export default LoadingPage;
