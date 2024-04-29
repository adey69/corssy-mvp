import { StyleSheet } from 'react-native';
import { theme } from 'src/theme';

export default StyleSheet.create({
  container: {
    padding: 16,
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
  chapterHeaderContainer: {
    padding: 8,
  },
  checkIcon: {
    width: 14,
    height: 14,
    marginLeft: 4,
  },
});
