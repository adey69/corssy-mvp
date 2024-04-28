interface IGetGradeSubjectsResponse {
  data: IGradeSubject[];
  message: string;
}

interface ISubjectChapters {
  chapter: IChapter[];
  lessons: ILessonOverview[];
}

interface IGetChaptersListRequest {
  id: string;
}

interface IGetChaptersListResponse {
  totalChapter: number;
  data: ISubjectChapters[];
  length: number;
  message: string;
}

interface IGetLessonDetailsRequest {
  id: string;
}

interface IGetLessonDetailsResponse {
  message: string;
  data: ILessonDetail[];
}
