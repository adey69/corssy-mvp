import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from 'src/theme';

const LessonDetails = () => {
  return (
    <SafeAreaView
      edges={theme.safeAreaEdges}
      style={theme.commonStyles.screenContainer}
    >
      <Text>Lesson Details</Text>
    </SafeAreaView>
  );
};

export default LessonDetails;
