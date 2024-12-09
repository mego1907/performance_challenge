import {useEffect, useState} from 'react';

const defaultBody = () => {
  console.log('Interval active');
};

const useInterval = (init = 0, state = true, body = defaultBody) => {
  const [count, setCount] = useState(init);

  // Interval
  useEffect(() => {
    // Memory leak issue: Listener not removed
    const interval = setInterval(() => {
      body();

      // if their is a state
      if (state) {
        setCount(prev => prev + 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [state, body]);

  return [count];
};

export default useInterval;
