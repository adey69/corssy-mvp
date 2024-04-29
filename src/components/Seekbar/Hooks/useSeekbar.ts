interface IUseSeekBarParams {
  currentTime: number;
  duration: number;
  onSlideCapture: (data: IOnSeekData) => void;
}

export default ({
  currentTime,
  duration,
  onSlideCapture,
}: IUseSeekBarParams) => {
  const getMinutesFromSeconds = (currentTime: number) => {
    const time = duration - currentTime;
    const minutes = time >= 60 ? Math.floor(time / 60) : 0;
    const seconds = Math.floor(time - minutes * 60);

    return `-${minutes >= 10 ? minutes : '0' + minutes}:${
      seconds >= 10 ? seconds : '0' + seconds
    }`;
  };

  const position = getMinutesFromSeconds(currentTime);

  const handleOnSlide = (time: number) => {
    onSlideCapture({ seekTime: time });
  };

  return {
    position,
    getMinutesFromSeconds,
    handleOnSlide,
  };
};
