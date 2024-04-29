import Video, { VideoProperties } from 'react-native-video';
import styles from './styles';
import { Image, TouchableOpacity, View } from 'react-native';
import { useVideoPlayer } from './Hooks';
import { Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Seekbar } from '../Seekbar';
import { IMAGES } from 'src/assets';

const VideoPlayer = (props: VideoProperties) => {
  const {
    isError,
    currentTime,
    videoRef,
    duration,
    play,
    togglePlay,
    onProgress,
    onSeek,
    setShowBuffering,
    onLoadEnd,
    setIsError,
  } = useVideoPlayer();
  const { t } = useTranslation('common');
  return (
    <View style={styles.container}>
      {isError ? (
        <View>
          <Text>{t('video_not_loaded')}</Text>
        </View>
      ) : (
        <>
          <TouchableOpacity activeOpacity={1} onPress={togglePlay}>
            <Video
              ref={videoRef}
              fullscreen
              paused={!play}
              onProgress={onProgress}
              resizeMode="cover"
              style={[!play && styles.pausedVideo, styles.videoContainer]}
              muted
              onLoadStart={() => setShowBuffering(true)}
              onReadyForDisplay={() => setShowBuffering(false)}
              onLoad={onLoadEnd}
              onError={() => setIsError(true)}
              {...props}
            />
          </TouchableOpacity>
          {!play && (
            <TouchableOpacity
              activeOpacity={1}
              onPress={togglePlay}
              style={styles.playIconContainer}
            >
              <View style={styles.playWrapper}>
                <Image source={IMAGES.play} style={styles.playIcon} />
              </View>
            </TouchableOpacity>
          )}
          <Seekbar
            currentTime={currentTime}
            duration={duration > 0 ? duration : 0}
            onSlideStart={togglePlay}
            onSlideComplete={togglePlay}
            onSlideCapture={onSeek}
          />
        </>
      )}
    </View>
  );
};

export default VideoPlayer;
