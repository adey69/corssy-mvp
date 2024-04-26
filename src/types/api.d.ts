interface IGetGradeSubjectsResponse {
  data: IGradeSubject[];
  message: string;
}

interface IGetChaptersListData {
  chapter: IChapter[];
  lessons: ILessonOverview[];
}

interface IGetChaptersListResponse {
  totalChapter: number;
  data: IGetChaptersListData[];
  length: number;
  message: string;
}
