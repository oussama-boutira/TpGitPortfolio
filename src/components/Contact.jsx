import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-description">
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="contact-content">
          <a href="mailto:hello@example.com" className="email-link">
            Say Hello
          </a>

          <div className="social-links">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              GitHub
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              LinkedIn
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              Twitter
            </a>
          </div>
        </div>

        <footer className="footer">
          <p>Designed & Built by John Doe</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
