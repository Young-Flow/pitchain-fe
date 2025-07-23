import { useRef } from 'react';
import { useStopwatch } from 'react-timer-hook';

export default function useAttentionTime(onComplete: (result: number) => void) {
  const stopWatchRef = useRef<ReturnType<typeof useStopwatch>>(null);
  stopWatchRef.current = useStopwatch();
  function start() {
    if (!stopWatchRef.current || stopWatchRef.current.isRunning) return;
    stopWatchRef.current.start();
    console.log('stopwatch started');
  }

  function pause() {
    if (!stopWatchRef.current) return;
    stopWatchRef.current.pause();
    console.log('stopwatch paused');
  }

  function stop() {
    if (!stopWatchRef.current) return;
    stopWatchRef.current.pause();
    onComplete(stopWatchRef.current.totalSeconds);
    console.log('stopwatch stopped');
  }
  return { start, pause, stop };
}
