import { type Timer as TimerProps } from '../context/TimersContext';
import Container from './UI/Container';

function Timer({ name, duration }: TimerProps) {
  return (
    <Container as='article'>
      <h1>{name}</h1>
      <p>{duration}</p>
    </Container>
  );
}

export default Timer;
