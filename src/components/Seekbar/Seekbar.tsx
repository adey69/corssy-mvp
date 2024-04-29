import React from 'react';
import styles from './styles';
import Slider from '@react-native-community/slider';
import { View } from 'react-native';
import { useSeekbar } from './Hooks';
import { Text } from 'react-native-paper';

interface ISeekBarProps {
  currentTime: number;
  duration: number;
  onSlideCapture: (data: IOnSeekData) => void;
  onSlideStart: () => void;
  onSlideComplete: () => void;
}

const SeekBar = (props: ISeekBarProps) => {
  const {
    currentTime,
    duration,
    onSlideCapture,
    onSlideStart,
    onSlideComplete,
  } = props;

  const { position, handleOnSlide } = useSeekbar({
    currentTime,
    duration,
    onSlideCapture,
  });
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Slider
          value={currentTime}
          minimumValue={0}
          maximumValue={duration}
          step={1}
          onValueChange={handleOnSlide}
          onSlidingStart={onSlideStart}
          onSlidingComplete={onSlideComplete}
        />
      </View>
      <Text style={styles.timeRight}>{position}</Text>
    </View>
  );
};

export default React.memo(SeekBar);
