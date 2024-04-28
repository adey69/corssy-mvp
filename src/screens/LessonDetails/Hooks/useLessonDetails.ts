import { useRoute } from '@react-navigation/native';
import { useMemo, useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { useGetLessonDetailsQuery } from 'src/rtk';

export default () => {
  const [currentWidgetIndex, setCurrentWidgetIndex] = useState(0);
  const listRef = useRef<FlatList>(null);
  const {
    params: { id },
  } = useRoute<LessonDetailsRouteProp>();

  const {
    isLoading,
    isError,
    data: lessonDetails,
  } = useGetLessonDetailsQuery({ id });

  const widgetsList = useMemo(() => lessonDetails?.widgets, [lessonDetails]);

  const onNextPressed = () => {
    if (widgetsList && currentWidgetIndex < widgetsList?.length - 1) {
      listRef?.current?.scrollToIndex({ index: currentWidgetIndex + 1 });
      setCurrentWidgetIndex(prev => prev + 1);
    }
  };

  const onPreviousPressed = () => {
    if (widgetsList && currentWidgetIndex > 0) {
      listRef?.current?.scrollToIndex({ index: currentWidgetIndex - 1 });
      setCurrentWidgetIndex(prev => prev - 1);
    }
  };

  return {
    listRef,
    currentWidgetIndex,
    lessonDetails,
    widgetsList,
    onNextPressed,
    onPreviousPressed,
  };
};
