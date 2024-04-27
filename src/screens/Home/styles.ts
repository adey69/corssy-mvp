import { StyleSheet } from 'react-native';
import { theme } from 'src/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  gradesListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gradeItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
    marginBottom: 8,
    backgroundColor: theme.colors.primaryContainer,
    borderRadius: 8,
    padding: 8,
  },
  subjectImage: { height: 30, width: 30, marginRight: 4 },
  chapterListItem: {
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.outline,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
