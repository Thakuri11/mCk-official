import { useNavigate, Link } from "react-router-dom";
import "./MembershipStyle.css";
export default function Membership() {
  const navigate = useNavigate();
  return (
    <>
      {/* <button onClick={() => navigate("/RegistrationForm")}>Join Now</button> */}
      <div className="membershipBody">
        <header>
          <p>
            Become a Member Join Team McK and be part of our gaming family.
            Compete, improve your skills, and make new friends.
          </p>
        </header>
        <section className="display-cards">
          <div className="merits">
            <h2>Why to Join McK ? </h2>
            <ul>
              <li>Friendly Community</li>
              <li>Tournaments</li>
              <li>Recognition</li>
              <li>Exclusive Events</li>
            </ul>
          </div>
          <div className="qualification">
            <h2>Membership Requirements </h2>
            <ul>
              <li>Be respectful to all members</li>
              <li>Maintain good sportsmanship</li>
              <li>Teamwork over toxicity</li>
              <li>Age must be above 16</li>
            </ul>
          </div>
          <div className="processToJoin">
            <h2>How To Join</h2>
            <ul>
              <li>1.Fill out the application form</li>
              <li>2.Wait for review</li>
              <li>3.Join our community</li>
              <li>4.Welcome to Team McK</li>
            </ul>
          </div>
        </section>
        <div className="join">
            <span>Ready To Join ? </span>
        <Link to="/registrationForm" className="join-btn">
          Join Now
        </Link>
        </div>
      </div>
    </>
  );
}
