import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomeStyle.css";
import lata from "./assets/IMG_2035.jpeg";
import poppey from "./assets/IMG_2038.jpeg";
import hang from "./assets/IMG_2039.jpeg";
import hirey from "./assets/IMG_2041.jpeg";
import jhupaey from "./assets/IMG_2042.jpeg";
import dinesh from "./assets/IMG_2043.jpeg";
import khasuh from "./assets/IMG_2044.jpeg";
import thakuri from "./assets/IMG_2045.jpeg";
import phokshing from "./assets/IMG_2052.jpeg";
import astik from "./assets/IMG_2053.jpeg";
import grng from "./assets/IMG_2054.jpeg";
import mottey from "./assets/IMG_2055.jpeg";
import logo from "./assets/mCk1.png";
export default function Login() {
  return (
    <>
      <header>
        <h1 className="title">Welcome to Team Mck Official</h1>
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/membership">Membership</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </div>
        </nav>
      </header>

      <section className="main-content">
        <h2>Founding Member</h2>

        <div className="founderImg">
          <div className="NameCard">
            <img src={lata} alt="Team" className="lata" />
            <h3>Kamal Rayemajhi</h3>
            <h4>McK-BornFoh37</h4>
            <h5>Tamghas,Nepal</h5>
          </div>
          <div className="NameCard">
            <img src={poppey} alt="Team" />
            <h3>Pabin Kauchha Magar</h3>
            <h4>Mck-PopPeY</h4>
            <h5>Tamghas,Nepal</h5>
          </div>
          <div className="NameCard">
            <img src={hang} alt="Team" className="hang" />
            <h3>Babil Reshmi Magar</h3>
            <h4>McK-BableY</h4>
            <h5>Tamghas,Nepal</h5>
          </div>
        </div>

        <h2>Members</h2>
        <div className="memberImg">
          <div className="first">
            <div>
              <img src={jhupaey} alt="Team" />
              <h3>Bishal Gharti Magar</h3>
              <h4>McK-JhupaeY</h4>
              <h5>Tamghas,Nepal</h5>
            </div>
            <div>
              <img src={mottey} alt="Team" className="foggy" />
              <h3>Bibek Kauchha Magar</h3>
              <h4>McK-FoGgy</h4>
              <h5>Tamghas,Nepal</h5>
            </div>
            <div>
              <img src={dinesh} alt="Team" />
              <h3>Dinesh Sen Thakuri</h3>
              <h4>McK-SeN</h4>
              <h5>Tamghas,Nepal</h5>
            </div>
            <div>
              <img src={hirey} alt="Team" />
              <h3>Sagar Pun Magar</h3>
              <h4>McK-SagaR</h4>
              <h5>Tamghas,Nepal</h5>
            </div>
            <div>
              <img src={thakuri} alt="Team" className="thakuri" />
              <h3>Tribikram Thakuri</h3>
              <h4>McK-thAkuRi</h4>
              <h5>Tamghas,Nepal</h5>
            </div>
          </div>

          <div className="second">
            <div>
              <img src={khasuh} alt="Team" />
              <h3>Bishal Khasu Magar</h3>
              <h4>McK-KhasuH</h4>
              <h5>Tamghas,Nepal</h5>
            </div>
            <div>
              <img src={phokshing} alt="Team" className="phokki" />
              <h3>Bishal Sutparai Magar</h3>
              <h4>McK-Phokki</h4>
              <h5>Tamghas,Nepal</h5>
            </div>
            <div>
              <img src={astik} alt="Team" />
              <h3>Astik Kunwar</h3>
              <h4>McK-AssTik</h4>
              <h5>Tamghas,Nepal</h5>
            </div>
            <div>
              <img src={grng} alt="Team" />
              <h3>Bibas Gurung</h3>
              <h4>McK-GrnG</h4>
              <h5>Tamghas,Nepal</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
