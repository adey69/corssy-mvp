import Video, { VideoProperties } from 'react-native-video';
import styles from './styles';
import { View } from 'react-native';
import { useVideoPlayer } from './Hooks';
import { Text } from 'react-native-paper';
import { APP_TEXT } from 'src/strings';

const VideoPlayer = (props: VideoProperties) => {
  const { isError, setIsError } = useVideoPlayer();
  return (
    <View style={styles.container}>
      {isError ? (
        <View>
          <Text>{APP_TEXT.video_not_loaded}</Text>
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
