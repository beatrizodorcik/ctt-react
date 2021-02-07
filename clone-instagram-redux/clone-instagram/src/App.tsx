import React from "react";
import './App.css';
import { FiUser, FiHeart } from "react-icons/fi";

import Logo from "./images/logo-instagram.png";

function App() {
  return (
    <>
      <div className="header">
        <header>
          <img src={Logo} alt="Logo Instagram" />
          <div className="top-info"> 
            <span>
              <FiUser />
              Seu nome
            </span>
          </div>
        </header>
      </div>
      <div className="home">
        <div className="post-container">
          <div className="post">
            <header>
              <img src="https://randomuser.me/api/portraits/women/17.jpg" alt="user" />
              <div className="post-user">
                <strong>nasa</strong>
                <span>Mars</span>
              </div>
            </header>
            <div className="post-image">
              <img src="https://www.publicdomainpictures.net/pictures/90000/velka/mars.jpg" alt="post" />
            </div>
            <div className="post-likes">
              <FiHeart />
            </div>
            <p>Waving goodbye to a spacecraft.</p>
          </div>
          <div className="post">
            <header>
              <img src="https://randomuser.me/api/portraits/women/17.jpg" alt="user" />
              <div className="post-user">
                <strong>nasa</strong>
                <span>Mars</span>
              </div>
            </header>
            <div className="post-image">
              <img src="https://www.publicdomainpictures.net/pictures/90000/velka/mars.jpg" alt="post" />
            </div>
            <div className="post-likes">
              <FiHeart />
            </div>
            <p>Waving goodbye to a spacecraft.</p>
          </div>
        </div>
        <div>
        <div className="user-info">
          <img
            alt="Perfil"
            src="https://randomuser.me/api/portraits/women/25.jpg"
          />
          <div className="user-bio">
            <strong>Jeniffer</strong>
            <span>jenicarvalho</span>
          </div>
        </div>
          <div className="stories">
            <h2>Stories</h2>

            <div className="storie">
              <div className="storie-image">
                <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="user" />
              </div>
              <div className="storie-user">
                <strong>history</strong>
                <span>há 2 horas</span>
              </div>
            </div>
            <div className="storie">
              <div className="storie-image">
                <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="user" />
              </div>
              <div className="storie-user">
                <strong>history</strong>
                <span>há 2 horas</span>
              </div>
            </div>
          </div>
        </div>        
      </div>
    </>
  );
}

export default App;

