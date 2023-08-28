import React from "react";

const CourseCard = (props) => {
  
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g=="
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/ti-icons@0.1.2/css/themify-icons.css"
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="popular_courses">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="main_title">
                <h2 className="myfont-black text-center">
                  {props.title}
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="owl-carousel active_course owl-loaded owl-drag">
                <div className="owl-stage-outer">
                  <div className="owl-stage">
                    <br />
                    <br />
                    <br />
                    <br />

                    {props.list.map((course) => (
                      < div key={course.id}>
                      <div
                        className="owl-item active"
                        style={{ width: 350, marginRight: 20 }}
                      >
                        <div className="single_course">
                          <div className="course_head">
                            <img
                              className="img-fluid"
                              src="/images/books1.jpg"
                              alt=""
                              style={{ height: 350 }}
                            />
                          </div>
                          <div className="course_content">
                            <span className="price">{course.price}</span>
                            <span className="tag mb-4 d-inline-block">
                              {course.interest.name}
                            </span>
                            <h4 className="mb-3">
                              <a href="#">{course.title}</a>
                            </h4>
                            <p className="mb-33">{course.description}</p>
                            <div className="course_meta d-flex justify-content-lg-between align-items-lg-center flex-lg-row flex-column mt-4">
                              <div className="authr_meta">
                                <img
                                  src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                  alt=""
                                />
                                <span className="d-inline-block ml-2">
                                  Cameron
                                </span>
                              </div>
                              <div className="mt-lg-0 mt-3">
                                <span className="meta_info mr-4">
                                  <a href="">
                                    {course.likes}
                                    <i className="ti-user mr-2" />
                                    {course.dislikes}
                                  </a>
                                </span>
                                <span className="meta_info">
                                  <a href="#">
                                    <i className="ti-heart mr-2" />
                                  </a>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
