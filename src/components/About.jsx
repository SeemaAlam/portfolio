import Skills from "./inro/Skills";

const About = props => {
    return (
      <section id="about">
        <div className="wrapper">
          <article>
            <div className="title">
              <h3>About Me</h3>
              <p className="separator" />
            </div>
            <div className="desc full">
              <h4 className="subtitle">My name is Seema Alam</h4>
              <p>
              A full-stack web developer with a
specialisation in MERN stack.
              </p>
              <p>
              I really enjoy solving problems as well as making things pretty and easy to use. I can't stop learning new things; the more, the better. I also love listening music, it heals my mind in sorrow and doubles my joy in happiness.
              </p>
            </div>
            <Skills />
          </article>
        </div>
      </section>
    );
  };

  
  export default About
  