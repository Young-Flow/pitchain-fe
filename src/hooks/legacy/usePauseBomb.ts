import dayjs, { Dayjs } from 'dayjs';
import { useRef, useEffect } from 'react';

export default function usePauseBomb(onExpire: () => void, initialDuration: number) {
  const targetTimeRef = useRef<Dayjs>(null);
  const currentTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const initTimeout = setTimeout(onExpire, initialDuration * 1000);
    currentTimeoutRef.current = initTimeout;
    return () => {
      if (currentTimeoutRef.current !== null) clearTimeout(currentTimeoutRef.current);
    };
  }, [initialDuration, onExpire]);

  function newDurationIsLonger(newDuration: number) {
    if (!targetTimeRef.current) return true;
    return newDuration * 1000 > targetTimeRef.current.diff(dayjs());
  }

  function renew(newDuration: number) {
    if (!newDurationIsLonger(newDuration)) return;
    if (currentTimeoutRef.current !== null) clearTimeout(currentTimeoutRef.current);

    const now = dayjs();
    targetTimeRef.current = now.add(newDuration, 's');
    const newTimeout = setTimeout(onExpire, newDuration * 1000);
    currentTimeoutRef.current = newTimeout;
  }

  return renew;
}
