import { useState } from "react";
import { request } from "../helpers/axios_helper";

const Header = () => {
  const userConnected = localStorage.getItem("connectedUser");
  const user = JSON.parse(userConnected);

  const handleClearLocalStorage = () => {
    // Clear all items in localStorage
    localStorage.clear();
  };
  const [selectedInterest, setSelectedInterest] = useState(null);
  const handleInterestClick = (interestName) => {
    setSelectedInterest(JSON.stringify(interestName));
  };
  console.log(selectedInterest);
  return (
    <>
      <header className="hide-when-mobile">
        <h1>
          <a href="/home" className="myfonte">
            PaPi Education
          </a>
        </h1>
        <ul className="flex">
          <li className="main-list">
            <a className="main-link" href="/home">
              home
            </a>
          </li>
          <li className="main-list">
            <a className="main-link" href="#">
              explore
            </a>
            <ul className="sub-ul">
              <li>
                <a href="/trendyCourses">trending 🔥</a>
              </li>
              <li>
                <a href="">latest 🆕</a>
              </li>
              <li className="mini-projects">
                My interests 
                <ul className="sub-sub-ul">
                  {user.interests.map((interest) => (
                    <li key={interest.id} >
                      <a
                        href={`/interests/${selectedInterest}`}
                        onClick={() => handleInterestClick(interest.name) }
                      >
                        {interest.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <a className="main-link" href="/about">
              community
            </a>
            <ul className="sub-ul sub-of-js">
              <li>
                <a href="">coming soon🔥</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li className="main-list">
            <a className="main-link" href="/profil">
              profil
            </a>
            <ul className="sub-ul sub-of-js">
              <li>
                <a href="/updateProfil">Update</a>
              </li>
              <li>
                <a href="">Settings ⚙️</a>
              </li>
              <li>
                <a href="/login" onClick={handleClearLocalStorage}>
                  Log out 🖐
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </header>
      <header className="show-when-mobile">
        <ul className="flex">
          <li className="main-list">
            <a className="main-link" href="/home">
              home
            </a>
          </li>
          <li className="main-list">
            <a className="main-link" href="#">
              explore
            </a>
            <ul className="sub-ul">
              <li>
                <a href="">trending 🔥</a>
              </li>
              <li>
                <a href="">latest </a>
              </li>
              <li className="mini-projects">
                <a href="">my interests&nbsp; + </a>
                <ul className="sub-sub-ul">
                  <li>
                    <a href="">interest 1</a>
                  </li>
                  <li>
                    <a href="">interest 2</a>
                  </li>
                  <li>
                    <a href="">interest 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <a className="main-link" href="#">
              community
            </a>
            <ul className="sub-ul sub-of-js">
              <li>
                <a href="">coming soon🔥</a>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <a className="main-link" href="profil">
              access account
            </a>
            <ul className="sub-ul sub-of-js">
              <li>
                <a href="/login">log in</a>
              </li>
              <li>
                <a href="">sign up🔥</a>
              </li>
            </ul>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
