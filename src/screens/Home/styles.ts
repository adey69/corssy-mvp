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
    marginLeft: 8,
    marginBottom: 8,
  },
  chapterListItem: {
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.outline,
  },
});
