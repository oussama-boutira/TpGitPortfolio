import "./About.css";

const About = () => {
  const skills = [
    { name: "JavaScript (ES6+)", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "TypeScript", category: "Languages" },
    { name: "HTML5 & CSS3", category: "Frontend" },
    { name: "Git & GitHub", category: "Tools" },
    { name: "SQL / NoSQL", category: "Database" },
    { name: "AWS", category: "Cloud" },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <p>
            I am a passionate software engineer with a strong focus on building
            scalable and user-centric web applications. With a background in
            both frontend and backend technologies, I enjoy tackling complex
            problems and turning them into simple, elegant solutions.
          </p>
          <p>
            When I'm not coding, you can find me exploring new coffee shops,
            reading sci-fi novels, or hiking in the mountains.
          </p>
        </div>
        <div className="skills-content">
          <h3 className="skills-title">Technical Skills</h3>
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={index} className="skill-item">
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
