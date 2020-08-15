import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import CourseList from "./CourseList";

const CoursesContainer = () => {
  const dispatch = useDispatch();
  const [course, setCourse] = useState({ title: "" });
  const courses = useSelector((state) => state.courses);

  useEffect(() => {
    try {
      dispatch(courseActions.loadCourses());
    } catch (error) {
      throw error;
    }
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <CourseList courses={courses} />
    </>
  );
};

export default CoursesContainer;
