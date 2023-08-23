import React from 'react';
import Header from '../comp/header'
import Footer from '../comp/footer'


const username = localStorage.getItem("username");

const Profil = () => {
  return (
    <div>
      <Header/>
      <main>
          <h1 className='myfont-black text-center'>{username}</h1>
        </main>
      <Footer/>
    </div>
  );
}

export default Profil;
