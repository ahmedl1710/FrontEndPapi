import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import CourseCard from "../comp/courseCard";
import { useState } from "react";
import { request } from "../helpers/axios_helper";
import { useEffect } from "react";
import { GiBlackBook } from "react-icons/gi";

const Managecourses = () => {
  const [showCourses, setShowCourses] = useState(false);
  const username = localStorage.getItem("username");
  const [courses, setCourses] = useState([]);
  const tit = "";
  const handleHomeClick = (e) => {
    e.preventDefault();
    const url = `/course/getUserCourses/${username}`;
    request("GET", url, {}).then((res) => {
      if (res.status === 200) {
        setCourses(res.data);
      }
    });
  };

  const renderCourseOptions = () => {
    return(<div className="list-group list-group-flush" role="tablist">
    { courses.map((course) => (
      <a
        className="list-group-item list-group-item-action mb-0"
        data-toggle="list"
        href="#password"
        role="tab"
        key={course.id}
      >
        {"------> " +course.title}
      </a>
    ))}
    </div>)
  };

  useEffect(() => {
    handleHomeClick({ preventDefault: () => {} }); // Call handleHomeClick
  }, []); // Empty dependency array ensures it runs once on component mount

  return (
    <>
      <Header />
      <div>
        <h2 className="myfont-black text-center">manage courses</h2>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <div className="container p-0">
          <div className="row">
            <div className="col-md-5 col-xl-4">
              <div className="mancard">
                <div className="mancard-header">
                  <h5 className="card-title mb-0">Courses manager</h5>
                </div>
                <div className="list-group list-group-flush" role="tablist">
                  <a
                    className="list-group-item list-group-item-action"
                    data-toggle="list"
                    role="tab"
                    onClick={() => setShowCourses(!showCourses)}
                  >
                    My courses
                    
                  </a>
                  {showCourses && renderCourseOptions()}
                  <a
                    className="list-group-item list-group-item-action"
                    data-toggle="list"
                    href="password"
                    role="tab"
                  >
                    add new course
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    data-toggle="list"
                    href="#"
                    role="tab"
                  >
                    Contact students
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    data-toggle="list"
                    href="#"
                    role="tab"
                  >
                    Email notifications
                  </a>
                  
                </div>
              </div>
            </div>
            <div className="col-md-7 col-xl-8">
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="account"
                  role="tabpanel"
                >
                  <div className="mancard">
                    <div className="mancard-header">
                      <h5 className="card-title mb-0">Private info</h5>
                    </div>
                    <div className="card-body">
                      <CourseCard list={courses} title={tit} />
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="password" role="tabpanel">
                  <div className="mancard">
                    <div className="card-body">
                      <h5 className="card-title">Password</h5>
                      <form>
                        <div className="form-group">
                          <label htmlFor="inputPasswordCurrent">
                            Current password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="inputPasswordCurrent"
                          />
                          <small>
                            <a href="#">Forgot your password?</a>
                          </small>
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputPasswordNew">New password</label>
                          <input
                            type="password"
                            className="form-control"
                            id="inputPasswordNew"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputPasswordNew2">
                            Verify password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="inputPasswordNew2"
                          />
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Save changes
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Managecourses;
