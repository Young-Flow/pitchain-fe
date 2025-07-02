import Hls from 'hls.js';
import { useRef, useEffect, ComponentProps } from 'react';

interface VideoPlayerProps extends ComponentProps<'video'> {
  src: string;
  className?: string;
}

export default function VideoPlayer({ src, className, ...props }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current && src !== '') {
      const video = videoRef.current;

      const hls = new Hls({
        autoStartLoad: true,
        startPosition: -1,
        // 마지막 재생 위치 계산 개발
      });

      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        hls.loadSource(src);
      });
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
      });
      hls.attachMedia(video);

      function resetVideo() {
        video.currentTime = 0;
        video.play();
      }

      video.addEventListener('ended', resetVideo);

      return () => {
        hls.destroy();
        video.removeEventListener('ended', resetVideo);
      };
    }
  }, [src]);

  return <video className={className} ref={videoRef} controls {...props} />;
}
