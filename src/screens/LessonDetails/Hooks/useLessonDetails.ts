import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useMemo, useRef, useState } from 'react';
import { FlatList } from 'react-native';
import {
  GradeSliceActions,
  getLessonByIdSelector,
  useAppDispatch,
  useAppSelector,
  useGetLessonDetailsQuery,
} from 'src/rtk';
import { APP_TEXT } from 'src/strings';

export default () => {
  const [showErrorModal, setShowErrorModal] = useState(false);
  const navigation = useNavigation<RootStackNavigationProp>();
  const dispatch = useAppDispatch();
  const listRef = useRef<FlatList>(null);
  const {
    params: { id },
  } = useRoute<LessonDetailsRouteProp>();
  const completedLessonsWidgets = useAppSelector(getLessonByIdSelector)[id];

  const {
    isLoading,
    isFetching,
    isError,
    data: lessonDetails,
  } = useGetLessonDetailsQuery({ id });

  const widgetsList = useMemo(() => lessonDetails?.widgets, [lessonDetails]);

  const initialListIndex = useMemo(() => {
    if (
      completedLessonsWidgets &&
      widgetsList &&
      completedLessonsWidgets?.completedWidgets < widgetsList?.length
    ) {
      return completedLessonsWidgets.completedWidgets;
    } else if (
      completedLessonsWidgets &&
      widgetsList &&
      completedLessonsWidgets?.completedWidgets === widgetsList?.length
    ) {
      return completedLessonsWidgets?.completedWidgets - 1;
    }
    return 0;
  }, [completedLessonsWidgets, widgetsList?.length]);

  const [currentWidgetIndex, setCurrentWidgetIndex] = useState(
    initialListIndex ?? 0,
  );

  const onNextPressed = () => {
    if (widgetsList && currentWidgetIndex < widgetsList?.length - 1) {
      dispatch(
        GradeSliceActions.updateLessonsCompletion({
          lessonId: id,
          completedWidgets: currentWidgetIndex + 1,
          totalWidgets: widgetsList?.length,
        }),
      );
      listRef?.current?.scrollToIndex({ index: currentWidgetIndex + 1 });
      setCurrentWidgetIndex(prev => prev + 1);
    } else if (widgetsList && currentWidgetIndex === widgetsList?.length - 1) {
      dispatch(
        GradeSliceActions.updateLessonsCompletion({
          lessonId: id,
          completedWidgets: currentWidgetIndex + 1,
          totalWidgets: widgetsList?.length,
        }),
      );
      navigation.goBack();
    }
  };

  const onPreviousPressed = () => {
    if (widgetsList && currentWidgetIndex > 0) {
      dispatch(
        GradeSliceActions.updateLessonsCompletion({
          lessonId: id,
          completedWidgets: currentWidgetIndex - 1,
          totalWidgets: widgetsList?.length,
        }),
      );
      listRef?.current?.scrollToIndex({ index: currentWidgetIndex - 1 });
      setCurrentWidgetIndex(prev => prev - 1);
    }
  };

  useEffect(() => {
    setShowErrorModal(isError);
  }, [isError]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: `${APP_TEXT.lesson} ${lessonDetails?.lessonNumber ?? ''}`,
    });
  }, [lessonDetails]);

  return {
    initialListIndex,
    listRef,
    currentWidgetIndex,
    lessonDetails,
    widgetsList,
    showErrorModal,
    isLoading,
    isFetching,
    completedLessonsWidgets,
    setShowErrorModal,
    onNextPressed,
    onPreviousPressed,
  };
};
