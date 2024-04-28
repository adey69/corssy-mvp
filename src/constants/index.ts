import Config from 'react-native-config';

export const BASE_URL = Config.BASE_URL;
export const USER_ID = Config.USER_ID;
export const GRADE_ID = Config.GRADE_ID;
export const TOKEN = Config.TOKEN;

export const API_ENDPOINTS = {
  courseRegistration: 'courseregistration',
  subjectLessons: 'lessons/subject',
  lessonDetails: 'lessons',
};
