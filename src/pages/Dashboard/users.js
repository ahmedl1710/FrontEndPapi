import React from "react";
import Sidebar from "./sidebar";
import { useState } from "react";
import { request } from "../../helpers/axios_helper";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { GoTrash } from "react-icons/go";
const Users = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const usersPerPage = 5;
  const [users, setUsers] = useState([]);
  const handleUsersClick = (e) => {
    e.preventDefault();
    const url = `/user/allusers`;
    request("GET", url, {}).then((res) => {
      if (res.status === 200) {
        const newUsers = res.data.map((user) => ({
          id: user.id,
          username: user.username,
          name: user.name,
          naissance: user.naissance,
          email: user.email,
          phone: user.phone,
        }));
        setUsers(newUsers);
      }
    });
  };

  const handleDeleteUser = (userId) => {
    console.log(userId)
    const url = `/user/deleteUser/${userId}`;
    request("DELETE", url, {id:userId}).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
      }
      window.location.href = "/users";
    }); 
  };
  
  useEffect(() => {
    handleUsersClick({ preventDefault: () => {} }); // Call handleHomeClick
  }, []);

  const indexOfLastUser = (currentPage + 1) * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <section className="flex gap-6">
        <Sidebar />
        <div className="m-3 text-xl text-gray-900 font-semibold">
          <h3 className="myfont-black text-center">USers</h3>
          <br />
          <br />
          <br />
          <div className="table-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Name</th>
                  <th>Birthdate</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Opt</th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.username}</td>
                    <td>{user.name}</td>
                    <td>{user.naissance}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td style={{ backgroundColor: 'black' }}>
                      <button onClick={() => handleDeleteUser(user.id)}>
                        <GoTrash/>
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
              pageCount={Math.ceil(users.length / usersPerPage)}
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

export default Users;
