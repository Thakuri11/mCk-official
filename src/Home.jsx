import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomeStyle.css";
export default function Login() {
  return (
    <>
      <header>
        <h1 className="title">Welcome to Team Mck Official</h1>
        <nav className="navbar">
          <div className="logo">
            <img src="./mCk1.png" alt="" />
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
          <div>
            <img src="/IMG_2035.jpeg" alt="Team" className="lata" />
            <h3>Kamal Rayemajhi aka LatA</h3>
          </div>
          <div>
            <img src="/IMG_2038.jpeg" alt="Team" />
            <h3>Pabin Kauchha Magar aka PoppeY</h3>
          </div>
          <div>
            <img src="/IMG_2039.jpeg" alt="Team" />
            <h3>Babil Reshmi Magar aka HanG</h3>
          </div>
        </div>

        <h2>Members</h2>
        <div className="memberImg">
          <div className="first">
            <div>
              <img src="/IMG_2042.jpeg" alt="Team" />
              <h3>Bishal Gharti Magar aka JhupaeY</h3>
            </div>
            <div>
              <img src="/IMG_2055.jpeg" alt="Team" className="foggy" />
              <h3>Bibek Kauchha Magar aka MotteY</h3>
            </div>
            <div>
              <img src="/IMG_2043.jpeg" alt="Team" />
              <h3>Dinesh Sen Thakuri aka HakkU</h3>
            </div>
            <div>
              <img src="/IMG_2041.jpeg" alt="Team" />
              <h3>Sagar Pun Magar aka HireY</h3>
            </div>
            <div>
              <img src="/IMG_2045.jpeg" alt="Team" className="thakuri" />
              <h3>Tribikram Thakuri aka thakuRi</h3>
            </div>
          </div>

          <div className="second">
            <div>
              <img src="/IMG_2044.jpeg" alt="Team" />
              <h3>Bishal Khasu Magar aka KhasuH</h3>
            </div>
            <div>
              <img src="/IMG_2052.jpeg" alt="Team" className="phokki" />
              <h3>Bishal Sutparai Magar aka PhokshinG</h3>
            </div>
            <div>
              <img src="/IMG_2053.jpeg" alt="Team" />
              <h3>Astik Kunwar aka KukhuroH</h3>
            </div>
            <div>
              <img src="/IMG_2054.jpeg" alt="Team" />
              <h3>Bibas Gurung aka GrnG</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
