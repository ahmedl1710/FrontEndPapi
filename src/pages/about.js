import React from "react";
import Header from "../comp/headerbeflog";
import Footer from "../comp/footer";

const About = () => {
  return (
    <>
      <Header />
      <section className="testimonials section-padding" id="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="myfont-black text-center">Our engineerS</h3>
            </div>
          </div>
        </div>
      </section>
      <section
        className="hero d-flex flex-column justify-content-center align-items-center"
        id="intro"
      >
        <div className="container">
          <div className="row">
            <div className="mx-auto col-lg-5 col-md-5 col-10">
              <img
                src="images/ahmed.png"
                className="img-fluid-ahmed"
                alt="Ben Resume HTML Template"
              />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center col-lg-7 col-md-7 col-12">
              <div className="hero-text">
                <h1 className="hero-title">👋 Ahmed Marzouk, our ceo</h1>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                
                <p>
                  currently a Fifth year student student studying Software Architecture
                  Engineering (SAE) at the Private School of Engineering and
                  Technology (ESPRIT). I am specializing in Web and Software
                  Technologies and architectures. Being creative, versatile, and
                  independent, I have a strong passion for programming and web
                  development. I am highly motivated to undertake projects and
                  find innovative solutions.
                </p>
                <a
                  href="https://www.linkedin.com/in/ahmed-marzouk-a2338b1b8/"
                  className="email-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  know me better
                </a>
              </div>
            </div>
          </div>
        </div>
        <section className="testimonials section-padding" id="testimonials">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="myfont-black text-center"></h3>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row">
            <div className="mx-auto col-lg-5 col-md-5 col-10">
              <img
                src="images/sahraoui.png"
                className="img-fluid-ahmed"
                alt="Ben Resume HTML Template"
              />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center col-lg-7 col-md-7 col-12">
              <div className="hero-text">
                <p className="hero-title">Mohamed sr Guesmi,ProductOwner</p>
                <a
                  href="https://www.facebook.com/medsahraoui.guesmi44"
                  className="email-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  know me better
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
