import React, { useState, useEffect } from 'react';

const CustomTimer = ({ initialTime, autoStartDelay, onExpire }) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(timer);
            setIsRunning(false);
            onExpire();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, onExpire]);

  useEffect(() => {
    let delayTimer;
    if (autoStartDelay > 0) {
      delayTimer = setTimeout(() => {
        setIsRunning(true);
      }, autoStartDelay * 1000);
    } else {
      setIsRunning(true);
    }

    return () => clearTimeout(delayTimer);
  }, [autoStartDelay]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="timer" style={{ fontSize: '110px', margin: '0 0'  }}>
      <p>{formatTime(time)}</p>
    </div>
  );
};

export default CustomTimer;


