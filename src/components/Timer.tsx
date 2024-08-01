import { useEffect, useState } from 'react';
import { type Timer as TimerProps } from '../context/TimersContext';
import Container from './UI/Container';

function Timer({ name, duration }: TimerProps) {
  const [remainingTime, setRemainingTime] = useState(duration * 1000);

  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prev) => {
        if (prev === 0) return 0;
        return prev - 50;
      });
    }, 50);
  }, []);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as='article'>
      <h1>{name}</h1>
      <p>
        <progress max={duration * 1000} value={remainingTime} />
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}

export default Timer;
