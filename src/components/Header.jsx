import seema from "../images/seema_professional_photo-removebg-preview.png";

const Header = (props) => {
  return (
    <header id="welcome-section">
      <div className="forest" />
      <div className="silhouette" />
      <img src={seema} alt="seema" className="seema"></img>

      <div className="container">
        <h1>
          <span className="line l1">I am</span>
          <span className="line color l1">A full stack</span>
          <span className="line color l1">
            <span className="color l1">web</span> developer.
          </span>
        </h1>
        <div className="buttons">
          <a href="#projects">my portfolio</a>
          <a
            href="https://drive.google.com/drive/folders/19WegQJ6Oc9jxwxufg0EKPBXkU2wY98EM?usp=sharing"
            className="cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
