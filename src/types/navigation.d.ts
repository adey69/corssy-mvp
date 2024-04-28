type RootStackParamsList = {
  Home: undefined;
  LessonDetails: {
    id: string;
  };
};

type RootStackNavigationProp =
  import('@react-navigation/stack').StackNavigationProp<RootStackParamsList>;

type LessonDetailsRouteProp = import('@react-navigation/native').RouteProp<
  RootStackParamsList,
  'LessonDetails'
>;
