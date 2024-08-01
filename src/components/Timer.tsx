import { useEffect, useRef, useState } from 'react';
import {
  useTimersContext,
  type Timer as TimerProps,
} from '../context/TimersContext';
import Container from './UI/Container';

function Timer({ name, duration }: TimerProps) {
  const { isRunning } = useTimersContext();

  const [remainingTime, setRemainingTime] = useState(duration * 1000);
  const interval = useRef<number | null>(null);

  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    let timer: number;

    if (isRunning) {
      timer = setInterval(() => {
        setRemainingTime((prev) => {
          return prev - 50;
        });
      }, 50);

      interval.current = timer;
    } else if (interval.current) {
      clearInterval(interval.current);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

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
