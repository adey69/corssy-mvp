import { StyleSheet } from 'react-native';
import { theme } from 'src/theme';

export default StyleSheet.create({
  scrollContainer: {
    flex: 1,
    paddingVertical: 16,
  },
  contentImg: {
    width: '100%',
    aspectRatio: 1,
    marginBottom: 16,
  },
  widgetItem: {
    width: theme.screenWidth,
    paddingHorizontal: 16,
  },
  footerContainer: {
    flexDirection: 'row',
    padding: 16,
  },
  footerButton: {
    flex: 1,
  },
  previousButton: {
    marginRight: 8,
  },
  nextButton: {
    color: theme.colors.background,
  },
  contentCard: {
    backgroundColor: theme.colors.background,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 8,
  },

  progressBar: {
    width: '80%',
    alignSelf: 'center',
    height: 20,
    borderRadius: 16,
    marginTop: 16,
  },
});
