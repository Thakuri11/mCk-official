import { useEffect, useState } from "react";
import "./ContactStyle.css";
import img1 from "./assets/TmgImg.jpg";
import img2 from "./assets/TmgImg2.jpg";
import img3 from "./assets/TmgImg3.jpg";
import img4 from "./assets/TmgImg4.jpg";
import img5 from "./assets/TmgImg5.png";
import img6 from "./assets/TmgImg6.jpg";
import img7 from "./assets/TmgNightImg.jpg";
export default function Contact() {
  const [tmgImg, setTmgImg] = useState(0);
  const collect = [img2, img3, img4, img5, img6, img7];
  useEffect(() => {
    const interval2 = setInterval(() => {
      setTmgImg((prev) => (prev + 1) % collect.length);
    }, 3000);
    return () => clearInterval(interval2);
  }, []);
  return (
    <>
      <div className="contactBody">
        <main>
          <h1>Reach us : </h1>
          <section className="contact-info">
            <div className="contact-detail">
              <ul>
                <li>Phone : 961994028</li>
                <li>Gmail : mCkOfficial@gmail.com</li>
              </ul>
            </div>
            <div className="location">
              <h2>Location:</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.3132172033806!2d83.23551647518362!3d28.07598730913672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39964100236d86b9%3A0x2e273d39e96d2715!2sTamghas%20gulmi!5e0!3m2!1sen!2snp!4v1784884433253!5m2!1sen!2snp"
                width="400"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </section>
        </main>
        <section className="jussss">
          <h2>Home Town Images : </h2>
          <img src={collect[tmgImg]} alt="" />
        </section>
      </div>
    </>
  );
}
