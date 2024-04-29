import { StyleSheet } from 'react-native';
import { theme } from 'src/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundVideo: {
    width: theme.screenWidth,
    aspectRatio: 1,
  },
  videoContainer: {
    width: theme.screenWidth,
    aspectRatio: 1 / 0.78,
    marginBottom: 8,
  },
  pausedVideo: {
    opacity: 0.5,
  },
  playIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  playWrapper: {
    padding: 16,
    borderRadius: 50,
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    width: 20,
    height: 20,
    left: 2,
  },
});
