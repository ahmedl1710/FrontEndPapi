import React from "react";

const Headerbeflog = () => {
  return (
    <div>
      <>
        <header className="hide-when-mobile">
          <h1>
            <a href="/" className="myfonte">
              PaPi Education
            </a>
          </h1>
          <ul className="flex">
            <li className="main-list">
              <a className="main-link" href="/">
                Home
              </a>
            </li>
            <li className="main-list">
              <a className="main-link" href="/about">
                About us
              </a>
            </li>
            <li className="main-list">
              <a className="main-link" href="#">
                Content
              </a>
              <ul className="sub-ul sub-of-js">
                <li>
                  <a href="#">Interests🔥</a>
                </li>
                <li>
                  <a href="">Courses🔥</a>
                </li>
                <li>
                  <a href="">Trainings</a>
                </li>
              </ul>
            </li>
            <li className="main-list">
              <a className="main-link" href="/login">
                access account
              </a>
            </li>
          </ul>
        </header>
        <header className="show-when-mobile">
          <h1 className="myfont">PaPi education</h1>
          <label className="absolute" htmlFor="burger">
            <i className="fas fa-bars" />
          </label>
          <input id="burger" type="checkbox" />
          <div className="show-on-click">
            <div className="main-div">
              <label htmlFor="html">
                HTML <i className="fas fa-plus" />
              </label>
              <input id="html" type="checkbox" />
              <ul className="sub-div">
                <li>
                  <a href="">Full Course</a>
                </li>
                <li>
                  <a href="">Crash Course</a>
                </li>
                <li>
                  <a href="">learn in 1h</a>
                </li>
              </ul>
            </div>
            <div className="main-div">
              <label htmlFor="css">
                CSS <i className="fas fa-plus" />
              </label>
              <input id="css" type="checkbox" />
              <ul className="sub-div">
                <li>
                  <a href="">Full Course</a>
                </li>
                <li>
                  <a href="">CSS Examples</a>
                </li>
                <li>
                  <label className="mini-projects" htmlFor="mini">
                    mini projects <i className="fas fa-plus" />
                  </label>
                  <input id="mini" type="checkbox" />
                  <ul className="sub-sub-div">
                    <li>
                      <a href="">project 1</a>
                    </li>
                    <li>
                      <a href="">project 2</a>
                    </li>
                    <li>
                      <a href="">project 3</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="main-div">
              <label htmlFor="js">
                JavaScript <i className="fas fa-plus" />
              </label>
              <input id="js" type="checkbox" />
              <ul className="sub-div">
                <li>
                  <a href="">coming soon🔥</a>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </>
    </div>
  );
};

export default Headerbeflog;
