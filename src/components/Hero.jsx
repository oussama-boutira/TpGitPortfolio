import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <span className="greeting">Hello, I'm</span>
        <h1 className="name">John Doe</h1>
        <h2 className="title">Full Stack Developer</h2>
        <p className="description">
          I build exceptional digital experiences that are fast, accessible, and
          visually stunning.
        </p>
        <div className="cta-group">
          <a href="#projects" className="btn btn-primary">
            View Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
    </section>
  );
};

export default Hero;
