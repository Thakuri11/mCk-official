import "./AboutStyle.css";
import { useEffect, useState } from "react";
export default function About() {
  const [current, setCurrent] = useState(0);
  const images = ["./IMG_2050.jpeg", "./IMG_2049.jpeg",];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <header>
        <div className="marquee">
          <div className="marquee-content">
            <span>
              Welcome to Team Mck Official • Beyond PUBG • Beyond Borders •
              Forever United •
            </span>

            <span>
              Welcome to Team Mck Official • Beyond PUBG • Beyond Borders •
              Forever United •
            </span>
          </div>
        </div>

        <h1>Know More About Team Mck</h1>
      </header>
      <section className="about">
        <h2>Team Mck Official Journey </h2>
        <p className="about-text">
          Team Mck Official began its journey in 2021, founded by three teenage
          PUBG players who shared a common passion for gaming, friendship, and
          teamwork. What started as a small gaming squad soon grew into
          something much greater. Team Mck was never just about playing PUBG—it
          became a symbol of unity, trust, and the strong bond between its
          members. Every match, every victory, and even every defeat
          strengthened the friendships that brought the team together. As time
          passed, more friends and classmates joined the team, each contributing
          their own skills, ideas, and support. Together, they helped Team Mck
          grow into a close-knit community where everyone was valued, both as a
          player and as a friend. The team's journey has been built on respect,
          loyalty, unforgettable memories, and the belief that true teamwork
          extends far beyond the game itself. Today, many of our teammates are
          pursuing their dreams in different countries around the world.
          Although distance separates us, it has never weakened the bond we
          share. We continue to stay connected, support one another, and
          celebrate each other's achievements. Team Mck Official is more than a
          gaming team—it is a family that will always stand together, no matter
          where life takes us. Once a member of Team Mck, always a part of the
          journey.
        </p>
        <h3>
          "United by friendship, strengthened by teamwork, and connected for
          life—beyond PUBG, beyond borders."
        </h3>
      </section>
      {/* <section className="about-img">
        <img src="./IMG_2050.jpeg" alt="" />
        <img src="./IMG_2049.jpeg" alt="" />
      </section> */}
      <div className="slider">
        <img src={images[current]} alt="" />
      </div>
    </>
  );
}
