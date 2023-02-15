import { useCallback, useEffect, useRef } from 'react';
import { random } from '@/utils';

const useRandomInterval = (callback: () => void, minDelay?: number, maxDelay?: number) => {
  const timeoutId = useRef<number | null>(null);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const isEnabled = minDelay && maxDelay;
    if (isEnabled) {
      const handleTick = () => {
        timeoutId.current && window.clearTimeout(timeoutId.current);
        const nextTickAt = random(Number(minDelay), Number(maxDelay));
        timeoutId.current = window.setTimeout(() => {
          savedCallback.current();
          handleTick();
        }, nextTickAt);
      };
      handleTick();
    }
    return () => {
      timeoutId.current && window.clearTimeout(timeoutId.current);
    };
  }, [minDelay, maxDelay]);

  const cancel = useCallback(function () {
    timeoutId.current && window.clearTimeout(timeoutId.current);
  }, []);
  return cancel;
};

export default useRandomInterval;
