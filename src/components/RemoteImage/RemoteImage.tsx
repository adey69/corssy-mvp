import { memo } from 'react';
import FastImage, { FastImageProps } from 'react-native-fast-image';
import { IMAGES } from 'src/assets';

const RemoteImage = (props: FastImageProps) => {
  return <FastImage {...props} defaultSource={IMAGES.placeholder} />;
};

export default memo(RemoteImage);
