import { useState, useEffect } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 10);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [progress]);

  const progressBarStyle = {
    width: `${progress}%`,
    height: "30px",
    backgroundColor: "green",
  };

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={progressBarStyle}></div>
    </div>
  );
};

export default ProgressBar;
