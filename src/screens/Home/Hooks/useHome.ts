import { useNavigation } from '@react-navigation/native';
import { useEffect, useMemo, useState } from 'react';
import {
  getLessonByIdSelector,
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

  const {
    isError: subjectsError,
    isLoading: subjectsLoading,
    data: subjectsList,
  } = useGetGradeSubjectsQuery();

  const [
    getSubjectLessons,
    {
      isLoading: loadingLessons,
      isFetching: fetchingLessons,
      isError: lessonsError,
      data: chaptersAndLessons,
    },
  ] = useLazyGetSubjectLessonsQuery();

  const completedLessonsWidgets = useAppSelector(getLessonByIdSelector);

  const isError = useMemo(
    () => lessonsError || subjectsError,
    [lessonsError, subjectsError],
  );

  const isLoading = useMemo(
    () => subjectsLoading || loadingLessons || fetchingLessons,
    [subjectsLoading, loadingLessons, fetchingLessons],
  );

  const selectedSubjectData = useMemo(() => {
    return chaptersAndLessons?.data?.map(item => ({
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
    if (subjectsList && subjectsList?.data?.length > 0) {
      setSelectedSubject(subjectsList?.data[0]);
      getSubjectLessons({ id: subjectsList?.data[0]?._id });
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
    subjects: subjectsList?.data,
    selectedSubject,
    selectedSubjectData,
    completedLessonsWidgets,
    setShowErrorModal,
    setSelectedSubject,
    handleLessonPress,
  };
};
