import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import Course from "../comp/courseCard";
import { useState } from "react";
import { request } from "../helpers/axios_helper";
import { useEffect } from 'react';
const Homeafterlogin = () => {
  const [courses, setCourses] = useState([]);
  const tit="our courses"
  const handleHomeClick = (e) => {
    e.preventDefault();
    const url = `/course/getAllCourses`;
    request(
      "GET",
      url,
      {}
    )
    .then((res) => {
      if (res.status === 200) {
      setCourses(res.data); 
        console.log(res.data);
      }
    });
  }

  useEffect(() => {
    handleHomeClick({ preventDefault: () => {} }); // Call handleHomeClick
  }, []); // Empty dependency array ensures it runs once on component mount

  
  return (
    <>
      <Header />
      <Course list={courses} title={tit}></Course>
      <Footer />
    </>
  );
};

export default Homeafterlogin;
