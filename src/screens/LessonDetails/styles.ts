import { StyleSheet } from 'react-native';
import { theme } from 'src/theme';

export default StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    marginTop: 16,
  },
  listContainer: {
    flexGrow: 1,
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
    height: '100%',
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
  progressBar: {
    width: '80%',
    alignSelf: 'center',
    height: 20,
    borderRadius: 16,
    marginTop: 16,
  },
  contentTitleContainer: {
    backgroundColor: theme.colors.primaryContainer,
    borderTopEndRadius: 8,
    borderBottomEndRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 12,
    left: -16,
  },
  contentDescContainer: {
    backgroundColor: theme.colors.green,
    borderTopStartRadius: 8,
    borderBottomStartRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 12,
    right: -16,
    marginTop: 16,
  },
});
