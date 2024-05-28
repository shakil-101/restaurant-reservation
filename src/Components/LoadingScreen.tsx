import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-deepDark/70 z-[100] flex justify-center items-center">
      <div className="loader"></div>
    </div>
  );
};

export default LoadingScreen;
