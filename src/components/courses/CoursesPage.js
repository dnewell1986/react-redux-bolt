import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";

const CoursesPage = () => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(courseActions.createCourse(course));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Courses</h2>
      <h3>Add Course</h3>
      <input
        type="text"
        onChange={(event) => setCourse({ title: event.target.value })}
        value={course.title}
      />

      <input type="submit" value="Save" />
      {courses.map((course) => (
        <div key={course.title}>{course.title}</div>
      ))}
    </form>
  );
};

export default CoursesPage;
