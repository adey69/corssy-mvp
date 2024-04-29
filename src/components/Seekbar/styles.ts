import { StyleSheet } from 'react-native';
import { theme } from 'src/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
  },
  timeRight: {
    color: theme.colors.shadow,
    marginLeft: 7,
  },
});
