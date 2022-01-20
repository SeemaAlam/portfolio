import Project from "./Project";
import shopstop from '../images/shoppersstop2.png';
import spareshub from '../images/spareshub2.png';
import caddycool from '../images/caddycool.png';
import acko from '../images/acko.png'

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
              title="Clone of Shoppersstop.com"
              img={shopstop}
              tech="js node css mongobd"
              link="https://shoppesstop-clone.herokuapp.com/home#"
              repo="https://github.com/HardikThummar97/Shoppersstop.com_clone_2.0"
            >
              <small>Built using EJS | CSS | Javascript | local storage | Node | MongoDB </small>
              <p>
              A web application to clone e-commerce website that sells the luxury products.
              </p>
            </Project>

            <Project
              title="Clone of Spareshub.com"
              img={spareshub}
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
              title="Caddy Cool"
              img={caddycool}
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
            <Project
              title="Acko insurance clone"
              img={acko}
              tech="react node css mongodb"
              link="https://ackoclone-huxly123.vercel.app/"
              repo="https://github.com/pratikjadhav718/ACKO"
            >
              <small>Built using React | CSS  | Axios | react-router-dom | Mongoose and Mongodb Atlas | Express js | Nodejs
              </small>
              <p>
              An Insurance app for cars
              </p>
            </Project>
           
            
          </div>
        </div>
      </section>
    );
  };

  export default Projects