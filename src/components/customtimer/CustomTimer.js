import React from 'react';
import { useTimer } from 'react-timer-hook';
import Button from '@mui/material/Button';

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '100px' }}>
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </div>
        <p>{isRunning ? 'Running' : 'Not running'}</p>
        <Button variant="contained" onClick={start}>Start</Button>
        {/*<Button variant="contained" onClick={pause}>Pause</Button>*/}
        {/*<Button variant="contained" onClick={resume}>Resume</Button>*/}
        {/*<Button variant="contained"
          onClick={() => {
            // Restarts to 5 minutes timer
            const time = new Date();
            time.setSeconds(time.getSeconds() + 300);
            restart(time);
          }}
        >
          Restart
        </Button>*/}
      </div>
    </>
  );
};

function CustomTimer() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 300); // 5 minutes timer
  return <MyTimer expiryTimestamp={time} />;
};


export default CustomTimer