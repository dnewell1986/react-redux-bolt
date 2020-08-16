import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import CourseList from "./CourseList";

const CoursesContainer = () => {
  const dispatch = useDispatch();
  const [mappedCourses, setMappedCourses] = useState([]);
  const courses = useSelector((state) => state.courses);
  const authors = useSelector((state) => state.authors);

  useEffect(() => {
    if (authors.length === 0) {
      dispatch(authorActions.loadAuthors());
    }
    if (courses.length === 0) {
      dispatch(courseActions.loadCourses());
    }
  }, []);

  useEffect(() => {
    var updatedCourses = courses.map((course) => {
      return {
        ...course,
        authorName: authors.find((a) => a.id === course.authorId).name,
      };
    });
    setMappedCourses(updatedCourses);
  }, [courses]);

  return (
    <>
      <h2>Courses</h2>
      <CourseList courses={mappedCourses} />
    </>
  );
};

export default CoursesContainer;
