import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Image,
  ListRenderItemInfo,
  SectionList,
  TouchableOpacity,
  View,
} from 'react-native';
import { useCallback } from 'react';
import { ActivityIndicator, List, Text } from 'react-native-paper';
import { theme } from 'src/theme';
import { EmptyList, InfoModal, RemoteImage } from 'src/components';
import { APP_TEXT } from 'src/strings';
import { IMAGES } from 'src/assets';
import styles from './styles';
import { useHome } from './Hooks';

const Home = () => {
  const {
    subjects,
    showErrorModal,
    isLoading,
    selectedSubjectData,
    selectedSubject,
    completedLessonsWidgets,
    setShowErrorModal,
    setSelectedSubject,
    handleLessonPress,
  } = useHome();

  const renderGradesList = useCallback(
    () => (
      <View style={styles.gradesListContainer}>
        {subjects && subjects?.length > 0 ? (
          subjects?.map(subject => {
            const isSelectedSubject = selectedSubject?._id === subject._id;
            return (
              <TouchableOpacity
                key={subject?._id}
                style={[
                  styles.gradeItemContainer,
                  isSelectedSubject && {
                    backgroundColor: theme.colors.primaryDull,
                  },
                ]}
                onPress={() => setSelectedSubject(subject)}
              >
                <RemoteImage
                  source={{ uri: subject?.subject?.subject_icon }}
                  style={styles.subjectImage}
                />
                <Text>{subject?.subject?.Subject_name}</Text>
                {isSelectedSubject && (
                  <Image source={IMAGES.check} style={styles.checkIcon} />
                )}
              </TouchableOpacity>
            );
          })
        ) : !isLoading ? (
          <EmptyList message={APP_TEXT.no_subjects_in_grade} />
        ) : null}
      </View>
    ),
    [subjects, selectedSubject, isLoading],
  );

  const renderLessonItem = useCallback(
    ({ item }: ListRenderItemInfo<ILessonOverview>) => {
      let completionPercentage = 0;
      if (completedLessonsWidgets[item?._id]) {
        completionPercentage =
          (completedLessonsWidgets[item?._id]?.completedWidgets /
            completedLessonsWidgets[item?._id]?.totalWidgets) *
          100;
      }

      return (
        <List.Item
          title={`${APP_TEXT.lesson} ${item?.lessonNumber}: ${item?.title}`}
          titleNumberOfLines={2}
          right={() => <Text>{Math.trunc(completionPercentage)}%</Text>}
          style={styles.chapterListItem}
          onPress={() => handleLessonPress(item._id)}
        />
      );
    },
    [completedLessonsWidgets],
  );

  return (
    <SafeAreaView
      style={[theme.commonStyles.screenContainer, styles.container]}
      edges={theme.safeAreaEdges}
    >
      {renderGradesList()}
      <SectionList
        initialNumToRender={20}
        sections={selectedSubjectData ?? []}
        renderSectionHeader={item => (
          <View style={styles.chapterHeaderContainer}>
            <Text variant="titleSmall">
              {APP_TEXT.chapter} {item?.section?.chapterNumber}:{' '}
              {item?.section?.title}
            </Text>
          </View>
        )}
        renderItem={renderLessonItem}
        ListEmptyComponent={() =>
          !isLoading ? <EmptyList message={APP_TEXT.no_chapters_found} /> : null
        }
      />
      {isLoading && (
        <View style={theme.commonStyles.absoluteCentered}>
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
