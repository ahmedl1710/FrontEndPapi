import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import { useParams } from 'react-router-dom';
import { request } from "../helpers/axios_helper";
import { useState } from "react";
import { useEffect } from "react";
import Course from "../comp/courseCard";

const CoursesInterest = () => {
  const { selectedInterest } = useParams();
  const interest=JSON.parse(selectedInterest)
  const [coursesInterst, setCoursesInterest] = useState([]);
  const handleHomeClick = (e) => {
    e.preventDefault();
    const url = `/course/getCoursesInt/${interest}`;
    request(
      "GET",
      url,
      {}
    )
    
    .then((res) => {
      
      if (res.status === 200) {
        setCoursesInterest(res.data); 
        console.log(res.data);
      }
    });
  }

  useEffect(() => {
    handleHomeClick({ preventDefault: () => {} }); // Call the function
  }, []); // The empty array [] means this effect runs once when the component mounts



  return (
    <>
      <Header />
      
      <Course list={coursesInterst} title ={interest}></Course>
      <Footer />
    </>
  );
};

export default CoursesInterest;
