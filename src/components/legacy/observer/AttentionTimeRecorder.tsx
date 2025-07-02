import { useEffect } from 'react';
import usePauseBomb from '@hooks/usePauseBomb';
import useAttentionTime from '@hooks/useAttentionTime';
import { useParams } from 'react-router';
import postAttentionTime from '@api/postAttentionTime';

interface AttentionTimeRecorderProps {
  children: React.ReactNode;
}

export default function AttentionTimeRecorder({ children }: AttentionTimeRecorderProps) {
  const params = useParams().initialShortPitch ?? null;
  const { start: startAttentionCount, stop: stopAttentionCount } = useAttentionTime((result) => {
    if (result > 0) postAttentionTime(Number(params), result);
  });

  const renew = usePauseBomb(stopAttentionCount, 3);

  const giveAttention = (attentionTime: number) => {
    startAttentionCount();
    renew(attentionTime);
  };

  useEffect(() => {
    const recorder = document.getElementById('attention-recorder');
    if (!recorder) return;
    giveAttention(20);
    function detailButtonHandler(event: MouseEvent) {
      const button = document.getElementById('to-details-button');
      if (!button || !button.contains(event.target as Node)) return;
      stopAttentionCount();
    }
    recorder.addEventListener('click', () => giveAttention(10));
    recorder.addEventListener('mousemove', () => giveAttention(5));
    recorder.addEventListener('click', detailButtonHandler);
    window.addEventListener('blur', () => stopAttentionCount());
    window.addEventListener('beforeunload', () => stopAttentionCount());
    window.removeEventListener('beforeunload', () => stopAttentionCount());
  }, []);

  return <div id="attention-recorder">{children}</div>;
}
