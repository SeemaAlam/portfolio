

const SocialLinks = props => {
    return (
      <div className="social">
        <a
          id="profile-link"
          href=" https://github.com/seemaAlam"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's GitHub Profile"
        >
          {' '}
          <i className="fab fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/seema-alam-40886bb4/"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's Linkedin Profile"
        >
          {' '}
          <i className="fab fa-linkedin" />
        </a>
        <a
          href="https://medium.com/@SeemAlam"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's Medium Profile"
        >
          {' '}
          <i className="fab fa-medium" />
        </a>


      </div>
    );
  };
  
  export default SocialLinks