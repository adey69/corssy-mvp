import { useNavigation } from '@react-navigation/native';
import { useEffect, useMemo, useState } from 'react';
import {
  chapterAndLessonsSelector,
  subjectsSelector,
  useAppSelector,
  useGetGradeSubjectsQuery,
} from 'src/rtk';
import { useLazyGetSubjectLessonsQuery } from 'src/rtk/api/gradeApi';

export default () => {
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<
    IGradeSubject | undefined
  >(undefined);

  const navigation = useNavigation<RootStackNavigationProp>();

  const { isError: subjectsError, isLoading: subjectsLoading } =
    useGetGradeSubjectsQuery();

  const [
    getSubjectLessons,
    {
      isLoading: loadingLessons,
      isFetching: fetchingLessons,
      isError: lessonsError,
    },
  ] = useLazyGetSubjectLessonsQuery();

  const subjectsList = useAppSelector(subjectsSelector);
  const chaptersAndLessons = useAppSelector(chapterAndLessonsSelector);

  const isError = useMemo(
    () => lessonsError || subjectsError,
    [lessonsError, subjectsError],
  );

  const isLoading = useMemo(
    () => subjectsLoading || loadingLessons || fetchingLessons,
    [subjectsLoading, loadingLessons, fetchingLessons],
  );

  const selectedSubjectData = useMemo(() => {
    return chaptersAndLessons?.map(item => ({
      title: item?.chapter[0]?.chapter_name,
      chapterNumber: item?.chapter[0]?.chapter_number,
      data: item?.lessons,
    }));
  }, [chaptersAndLessons]);

  const handleLessonPress = (id: string) => {
    navigation.navigate('LessonDetails', { id });
  };

  useEffect(() => {
    setShowErrorModal(isError);
  }, [isError]);

  useEffect(() => {
    if (subjectsList && subjectsList?.length > 0) {
      setSelectedSubject(subjectsList[0]);
      getSubjectLessons({ id: subjectsList[0]?._id });
    }
  }, [subjectsList]);

  useEffect(() => {
    if (selectedSubject) {
      getSubjectLessons({ id: selectedSubject?._id });
    }
  }, [selectedSubject]);

  return {
    showErrorModal,
    subjectsList,
    isLoading,
    subjects: subjectsList,
    selectedSubject,
    selectedSubjectData,
    setShowErrorModal,
    setSelectedSubject,
    handleLessonPress,
  };
};
