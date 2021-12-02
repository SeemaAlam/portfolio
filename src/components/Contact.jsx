import SocialLinks from "./Social";

const Contact = (props) => {
  return (
    <section id="contact">
      <div className="container">
        <div className="heading-wrapper">
          <div className="heading">
            <p className="title">
              Wants to <br />
              contact me?
            </p>
            <p className="separator" />
            <p className="subtitle">
              Send an email to {""}
              <br></br>
              <span className="mail">
                Sim.alam20
                <i className="fas fa-at at" />
                gmail
                <i className="fas fa-circle dot" />
                com
              </span>
            </p>
            <br></br>
            <p className="subtitle">Or call me  <br></br> 9082833425</p>
          </div>
          <SocialLinks />
        </div>
        {/* <form id="contact-form" action="#">
            <input placeholder="Name" name="name" type="text" required />
            <input placeholder="Email" name="email" type="email" required />
            <textarea placeholder="Message" type="text" name="message" />
            <input className="button sub" id="submit" value="Submit" type="submit" />
          </form> */}
      </div>
    </section>
  );
};

export default Contact;
