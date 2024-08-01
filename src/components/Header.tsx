import { useTimersContext } from '../context/TimersContext';
import Button from './UI/Button';

function Header() {
  const { isRunning, startTimers, stopTimers } = useTimersContext();

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button onClick={isRunning ? stopTimers : startTimers}>
        {isRunning ? 'Stop' : 'Start'} Timers
      </Button>
    </header>
  );
}

export default Header;
