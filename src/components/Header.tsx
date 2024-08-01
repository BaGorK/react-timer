import { useTimersContext } from '../context/TimersContext';
import Button from './UI/Button';

function Header() {
  const { isRunning } = useTimersContext();

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button>{isRunning ? 'Stop' : 'Start'} Timers</Button>
    </header>
  );
}

export default Header;
