interface ISubject {
  _id: string;
  subject_price: number;
  isActive: boolean;
  Subject_name: string;
  subject_icon: string;
  grade: string;
  uniCode: string;
}

interface IGradeSubject {
  _id: string;
  registeredCourseID: string;
  grade: string;
  isPurchase: boolean;
  subject: ISubject;
}

interface IChapter {
  chapterID: string;
  chapter_name: string;
  chapter_icon: string;
  isActive: boolean;
  chapter_number: number;
  price: number;
  isHidden: boolean;
}

interface ILessonOverview {
  _id: string;
  title: string;
  subject: string;
  grade: string;
  level: string;
  shortDescription: string;
  longDescription: string;
  realLifeScenario: string;
  isActive: boolean;
  lessonIcon: string;
  isPaid: boolean;
  price: number;
  lessonNumber: number;
}
