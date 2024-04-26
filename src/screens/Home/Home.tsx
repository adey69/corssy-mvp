import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { Text } from 'react-native';
import { APP_TEXT } from 'src/strings';
import { theme } from 'src/theme';

const Home = () => {
  return (
    <SafeAreaView style={styles.container} edges={theme.safeAreaEdges}>
      <Text>{APP_TEXT.home}</Text>
    </SafeAreaView>
  );
};

export default Home;
