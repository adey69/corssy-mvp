interface IGradeState {
  gradeSubjects: IGradeSubject[];
  subjectLessons: ISubjectChapters[];
  lessonCompletion: {
    [key: string]: {
      totalWidgets: number;
      completedWidgets: number;
    };
  };
}
