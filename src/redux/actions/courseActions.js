import { CREATE_COURSE } from "../constants/actionTypes";

export function createCourse(course) {
  return { type: CREATE_COURSE, course: course };
}
