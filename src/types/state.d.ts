interface IGradeState {
  lessonCompletion: {
    [key: string]: {
      totalWidgets: number;
      completedWidgets: number;
    };
  };
}
