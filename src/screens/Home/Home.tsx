import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, View } from 'react-native';
import { useCallback } from 'react';
import { Chip, List } from 'react-native-paper';
import { theme } from 'src/theme';
import styles from './styles';

const Home = () => {
  const renderGradesList = useCallback(
    () => (
      <View style={styles.gradesListContainer}>
        {['Math', 'English', 'Chemistry', 'Science'].map((item, index) => (
          <Chip
            key={index}
            style={styles.gradeItemContainer}
            onPress={() => console.log(item)}
          >
            {item}
          </Chip>
        ))}
      </View>
    ),
    [],
  );

  return (
    <SafeAreaView
      style={theme.commonStyles.screenContainer}
      edges={theme.safeAreaEdges}
    >
      {renderGradesList()}
      <FlatList
        data={['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4']}
        renderItem={({ item }) => (
          <List.Item
            title={item}
            style={styles.chapterListItem}
            onPress={() => console.log(item)}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
