import { useEffect, useRef, useState } from 'react';
import { type Timer as TimerProps } from '../context/TimersContext';
import Container from './UI/Container';

function Timer({ name, duration }: TimerProps) {
  const [remainingTime, setRemainingTime] = useState(duration * 1000);
  const interval = useRef<number | null>(null);

  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prev) => {
        return prev - 50;
      });
    }, 50);

    interval.current = timer;

    return () => clearInterval(timer);
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
