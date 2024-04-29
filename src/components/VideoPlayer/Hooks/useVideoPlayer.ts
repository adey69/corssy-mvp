import { useCallback, useRef, useState } from 'react';
import Video, { OnLoadData, OnProgressData } from 'react-native-video';

export default () => {
  const videoRef = useRef<Video>(null);
  const [isError, setIsError] = useState(false);
  const [showBuffering, setShowBuffering] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [play, setPlay] = useState(true);

  const togglePlay = useCallback(() => {
    setPlay(prev => !prev);
  }, [play, videoRef?.current?.props?.source]);

  const onSeek = useCallback((data: IOnSeekData) => {
    videoRef?.current?.seek(data.seekTime);
    setCurrentTime(data.seekTime);
  }, []);

  const onProgress = (data: OnProgressData) => {
    setCurrentTime(data.currentTime);
  };

  const onLoadEnd = (data: OnLoadData) => {
    setDuration(data.duration);
    setCurrentTime(data.currentTime);
  };

  return {
    currentTime,
    duration,
    play,
    showBuffering,
    videoRef,
    isError,
    setIsError,
    setDuration,
    togglePlay,
    setCurrentTime,
    setShowBuffering,
    onSeek,
    onProgress,
    onLoadEnd,
  };
};
