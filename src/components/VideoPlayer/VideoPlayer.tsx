import Video, { VideoProperties } from 'react-native-video';
import styles from './styles';
import { View } from 'react-native';
import { useVideoPlayer } from './Hooks';
import { Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

const VideoPlayer = (props: VideoProperties) => {
  const { isError, setIsError } = useVideoPlayer();
  const { t } = useTranslation('common');
  return (
    <View style={styles.container}>
      {isError ? (
        <View>
          <Text>{t('video_not_loaded')}</Text>
        </View>
      ) : (
        <Video
          {...props}
          style={styles.backgroundVideo}
          onError={err => {
            setIsError(true);
            console.log({ err });
          }}
        />
      )}
    </View>
  );
};

export default VideoPlayer;
