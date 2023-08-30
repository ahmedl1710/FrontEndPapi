import React from "react";
import Sidebar from "./sidebar";
import { useState } from "react";
import { request } from "../../helpers/axios_helper";
import { useEffect } from "react";
import { GoTrash } from "react-icons/go";

const Roles = () => {
  const [selectedRole, setSelectedRole] = useState("ROLE_USER");
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);

  const handleUsers = () => {
    const url = `/user/getUserByRolename/${selectedRole}`;
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
  
  const handleRoleSelect = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleRoles = () => {
    const url = `/user/allroles`;
    request("GET", url, {}).then((res) => {
      if (res.status === 200) {
        setRoles(res.data);
      }
    });
  };

  useEffect(() => {
    handleRoles();
  }, []);

  useEffect(() => {
    handleUsers(); // Call handleUsers when selectedRole changes
  }, [selectedRole]);

  return (
    <>
      <section className="flex gap-6">
        <Sidebar />
        <div className="m-3 text-xl text-gray-900 font-semibold">
          <h3 className="myfont-black text-center">select role</h3>

          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
          <div className="container mb-4 main-container">
            <div className="row">
              {/* Orders Table*/}
              <div className="col-lg-8 pb-5">
                <div className="d-flex justify-content-end pb-3">
                  <div className="form-inline">
                    <select
                      className="form-control "
                      id="order-sort"
                      onChange={handleRoleSelect}
                      value={selectedRole}
                    >
                      {roles.map((role) => (
                        <option key={role.id} value={role.name}>
                          {role.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <h3 className="myfont-black text-left">role owners</h3>
                <br />
                <br />
                <table className="table table-hover mb-0">
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
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.username}</td>
                        <td>{user.name}</td>
                        <td>{user.naissance}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td style={{ backgroundColor: "black" }}>
                          <button>
                            <GoTrash />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Roles;
