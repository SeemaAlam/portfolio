import Project from "./Project";

const Projects = props => {
    return (
      <section id="projects">
        <div className="projects-container">
          <div className="heading">
            <h3 className="title">Projects</h3>
            <p className="separator" />
            <p className="subtitle">
              Here's a list of the projects I've been working on lately. All of these
              were built during my full stack web developement course in{' '}
              <a href="https://www.masaischool.com/" target="_blank" rel="noopener noreferrer">
              Masai School
              </a>
              {/* , where I've been coding for almost 8 months non-stop until I completed all the units
              required to get my Full-Stack Developer certification. */}
            </p>
          </div>
          <div className="projects-wrapper">
           
            <Project
              title="Clone of Shoppersstop.com."
              img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/MetricImperialConverter.jpg'}
              tech="js node css mongobd"
              link="https://shoppesstop-clone.herokuapp.com/home#"
              repo="https://github.com/HardikThummar97/Shoppersstop.com_clone_2.0"
            >
              <small>Built using HTML | CSS | Javascript | local storage | Node | MongoDB | EJS </small>
              <p>
              A web application to clone e-commerce websites that sells the luxury products.
              </p>
            </Project>

            <Project
              title="Clone of Spareshub.com."
              img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/Cortala.jpg'}
              tech="js node css mongodb bootstrap"
              link="https://spareshub-clone.herokuapp.com/"
              repo="https://github.com/SeemaAlam/spareshub_project"
            >
              <small>Built using HTML | CSS | Bootstrap | Javascript | Node | MongoDB | HBS
             </small>
              <p>
              A web application to clone e-commerce websites that sells the auto parts.

              </p>
            </Project>

            <Project
              title="Caddy Cool."
              img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/ExerciseTracker.jpg'}
              tech="bootstrap react node css mongodb"
              link="https://caddycool.vercel.app/"
              repo="https://github.com/chandra-akash/DiabetesManagementApp"
            >
              <small>Built using React | CSS | Bootstrap | Axios | react-router-dom | Mongoose and Mongodb Atlas | Express js | Nodejs
              </small>
              <p>
              An app for diabetes management
              </p>
            </Project>
           
            
          </div>
        </div>
      </section>
    );
  };

  export default Projects