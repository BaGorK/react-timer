import { useTimersContext } from '../context/TimersContext';
import Timer from './Timer';

function Timers() {
  const { timers } = useTimersContext();

  return (
    <ul>
      {timers.map((timer, i) => (
        <li key={i}>
          <Timer {...timer} />
        </li>
      ))}
    </ul>
  );
}

export default Timers;
