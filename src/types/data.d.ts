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
  completedPercentage: number;
}

interface IVideoWidgetContent {
  title: string;
  videoType: string;
  videoUrl: string;
  transcript: string;
  voiceOverUrl: string;
  introduction: string;
  exercise: string;
  example: string;
  summary: string;
  theory: string;
  whatNext: string;
  application: string;
  questions: [];
}

interface ITextAndImageWidgetContent {
  contentType: string;
  contentTitle: string;
  image: string;
  fileUrl: string;
  description: string;
}

interface IMultipleChoiceWidgetContent {
  title: string;
  totalMark: number;
  passingMark: number;
  numberOfQuestion: number;
  questions: string;
}

interface IWidget {
  widgetType: 'textAndImages' | 'video' | 'multipleChoice';
  videoWidgetContent?: IVideoWidgetContent;
  isActive: boolean;
  _id: string;
  content?: ITextAndImageContent;
  mcqWidgetContent?: IMultipleChoiceWidgetContent;
}

interface ILessonDetail {
  _id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  realLifeScenario: string;
  lessonIcon: string;
  level: string;
  grade: string;
  subject: string;
  chapter: string;
  isActive: boolean;
  widgets: IWidget[];
  isPaid: true;
  price: number;
  lessonNumber: number;
}
