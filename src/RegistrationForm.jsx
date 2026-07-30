import "./RegistrationStyle.css";
import { useState, useEffect } from "react";
export default function RegistrationForm() {
  return (
    <>
      <section className="Registration">
        <h1>Registration Form</h1>
        <form action="">
          <div className="name">
            <label htmlFor="name">Name :</label>
            <input type="text" id="name" />
          </div>
          <div className="age">
            <label htmlFor="age">Age :</label>
            <input type="number" id="age" />
          </div>
          <div className="address">
            <label htmlFor="address">Address :</label>
            <input type="text" id="address" />
          </div>
          <div className="email">
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" />
          </div>
          <input type="submit" className="submitInput" />
        </form>
      </section>
    </>
  );
}
