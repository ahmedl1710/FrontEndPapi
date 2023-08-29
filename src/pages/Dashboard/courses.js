import React from "react";
import Sidebar from "./sidebar";
import { useState } from "react";
import { request } from "../../helpers/axios_helper";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { GoTrash } from "react-icons/go";
import { FiFolder } from "react-icons/fi";

const Courses = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const coursesPerPage = 5;
  const [courses, setCourses] = useState([]);
  const handleUsersClick = (e) => {
    e.preventDefault();
    const url = `/course/getAllCourses`;
    request("GET", url, {}).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        const newCourses = res.data.map((course) => ({
          id: course.id,
          title: course.title,
          interest: course.interest.name,
          source: course.source.name,
          likes: course.likes,
          dislikes: course.dislikes,
          price:course.price,
          nbParticipants: Array.isArray(course.students) ? course.students.length : 0,
        }));
        setCourses(newCourses);
      }
    });
  };

  const handleDeleteUser = (courseId) => {
    console.log(courseId)
    const url = `/interest/delInterest/${courseId}`;
    request("DELETE", url, {id:courseId}).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
      }
      window.location.href = "/users";
    }); 
  };
  
  useEffect(() => {
    handleUsersClick({ preventDefault: () => {} }); // Call handleHomeClick
  }, []);
  console.log(courses)
  const indexOfLastCourse = (currentPage + 1) * coursesPerPage;
  const indexOfFirstUser = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstUser, indexOfLastCourse);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <section className="flex gap-6">
        <Sidebar />
        <div className="m-3 text-xl text-gray-900 font-semibold">
          <h3 className="myfont-black text-center">Courses</h3>
          <br />
          <br />
          <br />
          <div className="table-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>title</th>
                  <th>interest</th>
                  <th>Owner</th>
                  <th>likes</th>
                  <th>dislikes</th>
                  <th>price</th>
                  <th>nb participants</th>
                  <th>total price</th>
                  <th>Opt</th>
                  <th>Files</th>
                </tr>
              </thead>
              <tbody>
                {currentCourses.map((course) => (
                  <tr key={course.id}>
                    <td>{course.title}</td>
                    <td>{course.interest}</td>
                    <td>{course.source}</td>
                    <td>{course.likes}</td>
                    <td>{course.dislikes}</td>
                    <td>{course.price}</td>
                    <td>{course.nbParticipants}</td>
                    <td>{(course.price=== 'FREE' || course.price=== 'free')? 0 : parseFloat(course.price) *course.nbParticipants+'$'}</td>
                    <td style={{ backgroundColor: 'black' }}>
                      <button onClick={() => handleDeleteUser(course.id)}>
                        <GoTrash/>
                      </button>
                    </td>
                    <td style={{ backgroundColor: 'black' }}>
                      <button >
                        <FiFolder/>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <br />
          <br />
          <div className="pagination-container">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={Math.ceil(courses.length / coursesPerPage)}
              onPageChange={handlePageChange}
              containerClassName={"pagination"}
              previousLinkClassName={"pagination-link"}
              nextLinkClassName={"pagination-link"}
              disabledClassName={"pagination-disabled"}
              activeClassName={"pagination-active"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
