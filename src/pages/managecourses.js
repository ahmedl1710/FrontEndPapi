import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";

const Managecourses = () => {
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
                  <h5 className="card-title mb-0">Profile Settings</h5>
                </div>
                <div className="list-group list-group-flush" role="tablist">
                  <a
                    className="list-group-item list-group-item-action active"
                    data-toggle="list"
                    href="#account"
                    role="tab"
                  >
                    Account
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    data-toggle="list"
                    href="#password"
                    role="tab"
                  >
                    Password
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    data-toggle="list"
                    href="#"
                    role="tab"
                  >
                    Privacy and safety
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    data-toggle="list"
                    href="#"
                    role="tab"
                  >
                    Email notifications
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    data-toggle="list"
                    href="#"
                    role="tab"
                  >
                    Web notifications
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    data-toggle="list"
                    href="#"
                    role="tab"
                  >
                    Widgets
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    data-toggle="list"
                    href="#"
                    role="tab"
                  >
                    Your data
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    data-toggle="list"
                    href="#"
                    role="tab"
                  >
                    Delete account
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
                      <div className="card-actions float-right">
                        <div className="dropdown show">
                          <a
                            href="#"
                            data-toggle="dropdown"
                            data-display="static"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-more-horizontal align-middle"
                            >
                              <circle cx={12} cy={12} r={1} />
                              <circle cx={19} cy={12} r={1} />
                              <circle cx={5} cy={12} r={1} />
                            </svg>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </div>
                      <h5 className="card-title mb-0">Private info</h5>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="inputFirstName">First name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputFirstName"
                              placeholder="First name"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="inputLastName">Last name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputLastName"
                              placeholder="Last name"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputEmail4">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            id="inputEmail4"
                            placeholder="Email"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputAddress">Address</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputAddress"
                            placeholder="1234 Main St"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputAddress2">Address 2</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputAddress2"
                            placeholder="Apartment, studio, or floor"
                          />
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="inputCity">City</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputCity"
                            />
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="inputState">State</label>
                            <select id="inputState" className="form-control">
                              <option selected="">Choose...</option>
                              <option>...</option>
                            </select>
                          </div>
                          <div className="form-group col-md-2">
                            <label htmlFor="inputZip">Zip</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputZip"
                            />
                          </div>
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Save changes
                        </button>
                      </form>
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
