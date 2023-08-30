import React from "react";
import Sidebar from "./sidebar";
import { useState } from "react";
import { request } from "../../helpers/axios_helper";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { GoTrash } from "react-icons/go";
import { FiFolder } from "react-icons/fi";

const Interests = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const interestPerPage = 5;
  const [interests, setInterests] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  

  const handleAddClick = (e) => {
    e.preventDefault();
    console.log(name)
    const url = `/interest/addInterest`;
        request(
          "POST",
          url,
          {name : name}
        )
        .then((res) => {
          if (res.status === 200) {
          //  window.location.href = "/interests";
          console.log(res.status)
          }
        });
  }

  const handleShowForm = () => {
    // Toggle the visibility of the form
    setShowForm(!showForm);
  };
  const handleInterestClick = (e) => {
    e.preventDefault();
    const url = `/interest/retrieveInterests`;
    request("GET", url, {}).then((res) => {
      if (res.status === 200) {
        // eslint-disable-next-line no-lone-blocks
        {
          /*JSON.parse(res.data)
        const newInterests = res.data.map((interest) => ({
          id: interest.id,
          name: interest.name,
          users: interest.usersLength,
          courses:interest.coursesLength,
          certifs: interest.certifsLength,
        }));*/
        }
        setInterests(res.data);
      }
    });
  };

  const handleDeleteInterest = (interestId) => {
    console.log(interestId);
    const url = `/interest/delInterest/${interestId}`;
    request("DELETE", url, { id: interestId }).then((res) => {
      if (res.status === 200) {
        //console.log(res.data);
      }
      window.location.href = "/interests";
    });
  };

  useEffect(() => {
    handleInterestClick({ preventDefault: () => {} }); // Call handleHomeClick
  }, []);
  const indexOfLastInterest = (currentPage + 1) * interestPerPage;
  const indexOfFirstInterest = indexOfLastInterest - interestPerPage;
  const currentInterests = interests.slice(
    indexOfFirstInterest,
    indexOfLastInterest
  );

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <section className="flex gap-6">
        <Sidebar />
        <div className="m-3 text-xl text-gray-900 font-semibold">
          <h3 className="myfont-black text-center">interests</h3>
          <div className="table-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>name</th>
                  <th>courses</th>
                  <th>users</th>
                  <th>certifs</th>
                  <th>Opt</th>
                  <th>Files</th>
                </tr>
              </thead>
              <tbody>
                {currentInterests.map((interest) => (
                  <tr key={interest.id}>
                    <td>{interest.name}</td>
                    <td>{interest.coursesLength}</td>
                    <td>{interest.usersLength}</td>
                    <td>{interest.certifsLength}</td>
                    <td style={{ backgroundColor: "black" }}>
                      <button onClick={() => handleDeleteInterest(interest.id)}>
                        <GoTrash />
                      </button>
                    </td>
                    <td style={{ backgroundColor: "black" }}>
                      <button>
                        <FiFolder />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pagination-container">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={Math.ceil(interests.length / interestPerPage)}
              onPageChange={handlePageChange}
              containerClassName={"pagination"}
              previousLinkClassName={"pagination-link"}
              nextLinkClassName={"pagination-link"}
              disabledClassName={"pagination-disabled"}
              activeClassName={"pagination-active"}
            />
          </div>
        </div>
        <div className="m-3 text-xl text-gray-900 font-semibold">
          <br/><br/><br/><br/><br/><br/>
          <button className="myfont-black-butt" onClick={handleShowForm}>add</button>
                  
          {showForm && (
            
              <div className="box">
                <form action="">
                  <h2 className="myfont">new interest</h2>
                  <div className="inputBox">
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <span>Interest name</span>
                    <i></i>
                  </div>
                  <input className="myfont" type="submit" value="add"   onClick={handleAddClick} />
                </form>
              </div>
            
          )}
        </div>
      </section>
    </>
  );
};

export default Interests;
