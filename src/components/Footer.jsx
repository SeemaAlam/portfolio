import SocialLinks from "./Social";

const Footer = props => {
    return (
      <footer>
        <div className="wrapper">
          <h3>THANKS FOR VISITING</h3>
          <p>© {new Date().getFullYear()} Seema Alam</p>
          <SocialLinks />
        </div>
      </footer>
    );
  };
  
  export default Footer
