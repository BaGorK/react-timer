/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer, type ReactNode } from 'react';

type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

const initialState: TimersState = {
  isRunning: true,
  timers: [],
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

type TimersContextProviderProps = {
  children: ReactNode;
};

type Action = {
  type: 'ADD_TIMER' | 'START_TIMERS' | 'STOP_TIMERS';
};

const TimersContext = createContext<TimersContextValue | null>(null);

const timersReducer = (state: TimersState, action: Action): TimersState => {
  return state;
};

function TimersContextProvider({ children }: TimersContextProviderProps) {
  const [timersState, dispatch] = useReducer(timersReducer, initialState);

  const ctx: TimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer(timerData) {
      console.log(timerData);
      dispatch({
        type: 'ADD_TIMER',
      });
    },
    startTimers() {
      dispatch({
        type: 'START_TIMERS'
      })
    },
    stopTimers() {
      dispatch({
        type: 'STOP_TIMERS'
      })
    },
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}

export const useTimersContext = () => {
  const ctx = useContext(TimersContext);

  if (!ctx) {
    throw new Error('Timers context used outside of the scope');
  }

  return ctx;
};

export default TimersContextProvider;
