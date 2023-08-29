import React from 'react';
import { request } from "../helpers/axios_helper";
import { useState } from "react";
import { useEffect } from "react";
import Course from "../comp/courseCard";
import Header from "../comp/header";
import Footer from "../comp/footer";

const Trendingcourses = () => {
  const [trends, setTrends] = useState([]);
  const tit="trending Courses"
  const handleClick = (e) => {
    e.preventDefault();
    const url = `/course/getCoursesTrend`;
    request(
      "GET",
      url,
      {}
    )
    .then((res) => {
      if (res.status === 200) {
        setTrends(res.data); 
        console.log(res.data);
      }
    });
  }

  useEffect(() => {
    handleClick({ preventDefault: () => {} }); // Call the function
  }, []); // The empty array [] means this effect runs once when the component mounts



  return (
    <>
      <Header />
      <Course list={trends} title ={tit}></Course>
      <Footer />
    </>
  );
}

export default Trendingcourses;
