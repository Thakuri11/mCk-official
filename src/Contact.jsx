import "./ContactStyle.css";
export default function Contact() {
  return (
    <>
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
          <h3>Location:</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.3132172033806!2d83.23551647518362!3d28.07598730913672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39964100236d86b9%3A0x2e273d39e96d2715!2sTamghas%20gulmi!5e0!3m2!1sen!2snp!4v1784884433253!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
        </div>
      </section>
            </main>
    </>
  );
}
