import { StyleSheet } from 'react-native';
import { theme } from 'src/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  closeBtn: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    backgroundColor: theme.colors.secondaryContainer,
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 12,
  },
});
