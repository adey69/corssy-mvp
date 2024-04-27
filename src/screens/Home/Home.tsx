import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { useCallback } from 'react';
import { ActivityIndicator, List, Text } from 'react-native-paper';
import { theme } from 'src/theme';
import { APP_TEXT } from 'src/strings';
import styles from './styles';
import { useHome } from './Hooks';
import { InfoModal, RemoteImage } from 'src/components';

const Home = () => {
  const { subjects, showErrorModal, isLoading, setShowErrorModal } = useHome();

  const renderGradesList = useCallback(
    () => (
      <View style={styles.gradesListContainer}>
        {subjects?.map(subject => (
          <TouchableOpacity
            key={subject?._id}
            style={styles.gradeItemContainer}
            onPress={() => console.log(subject)}
          >
            <RemoteImage
              source={{ uri: subject?.subject?.subject_icon }}
              style={styles.subjectImage}
            />
            <Text>{subject?.subject?.Subject_name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    ),
    [subjects],
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
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator animating={isLoading} />
        </View>
      )}
      <InfoModal
        onDismiss={() => setShowErrorModal(false)}
        visible={showErrorModal}
        message={APP_TEXT.something_went_wrong}
      />
    </SafeAreaView>
  );
};

export default Home;
