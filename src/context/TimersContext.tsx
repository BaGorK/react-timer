/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer, type ReactNode } from 'react';

export type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

type TimersContextProviderProps = {
  children: ReactNode;
};

type StartTimersAction = {
  type: 'START_TIMERS';
};

type StopTimersAction = {
  type: 'STOP_TIMERS';
};

type AddTimerAction = {
  type: 'ADD_TIMER';
  payload: Timer;
};

type Action = StartTimersAction | StopTimersAction | AddTimerAction;

const TimersContext = createContext<TimersContextValue | null>(null);

const timersReducer = (state: TimersState, action: Action): TimersState => {
  if (action.type === 'START_TIMERS') {
    return {
      ...state,
      isRunning: true,
    };
  }

  if (action.type === 'STOP_TIMERS') {
    return {
      ...state,
      isRunning: false,
    };
  }

  if (action.type === 'ADD_TIMER') {
    return {
      ...state,
      timers: [
        ...state.timers,
        { name: action.payload.name, duration: action.payload.duration },
      ],
    };
  }

  return state;
};

const initialState: TimersState = {
  isRunning: false,
  timers: [],
};

function TimersContextProvider({ children }: TimersContextProviderProps) {
  const [timersState, dispatch] = useReducer(timersReducer, initialState);

  const ctx: TimersContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer(timerData) {
      dispatch({
        type: 'ADD_TIMER',
        payload: timerData,
      });
    },
    startTimers() {
      dispatch({
        type: 'START_TIMERS',
      });
    },
    stopTimers() {
      dispatch({
        type: 'STOP_TIMERS',
      });
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
