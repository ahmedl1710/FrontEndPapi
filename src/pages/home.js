/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import Headerbelog from "../comp/headerbeflog";
import Footer from "../comp/footer";
const Home = () => {
  return (
    <>
      <Headerbelog />
      <section className="about section-padding" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <h3 className="mb-4">This is Ben's Resume</h3>
              <p>
                PaPI is your ultimate gateway to self-guided learning and career
                advancement. Our intelligent platform offers a diverse range of
                courses, expert training, and certifications tailored to your
                unique interests and goals. With personalized roadmaps and a
                robust progress-tracking system, PaPI empowers individuals to
                take control of their learning journey while providing
                insightful suggestions to supercharge their careers. Elevate
                your knowledge, skills, and prospects with PaPI - your partner
                in lifelong learning and professional growth.
              </p>
              <ul className="mt-4 mb-5 mb-lg-0 profile-list list-unstyled">
                <li>
                  <strong>Full Name :</strong> Ben Wilson{" "}
                </li>
                <li>
                  <strong>Date of Birth:</strong> 26 September 1999
                </li>
                <li>
                  <strong>Website :</strong> company.co
                </li>
                <li>
                  <strong>Email :</strong> hello@company.co
                </li>
              </ul>
            </div>
            <div className="col-lg-5 mx-auto col-md-6 col-12">
              <img
                src="images/true-agency.jpg"
                className="about-image img-fluid"
                alt="Ben's Resume HTML Template"
              />
            </div>
          </div>
        </div>
      </section>
      {/* TESTIMONIAL here we are going to put feed backs of people*/}
      <section className="testimonials section-padding" id="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="myfont-black text-center">What People Say</h3>
              <p>this is reserved for feed backs</p>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="faq section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <h3 className="myfont-black text-center">Our featureS</h3>
              <div className="card-group">
                <div className="card">
                  <img className="card-img-top" src="images/progress.jpg" />
                  <div className="card-body">
                    <h5>boost your progress</h5>
                    <p className="card-text">
                      our platform helps you boost your progress by implementing systems that helps you 
                      respect your deadlines and schedule your learning time
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        a score and a rank will be given depending on your progress
                      </small>
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img
                    className="card-img-top"
                    src="images/mind.jpg"
                  />
                  <div className="card-body">
                    <h5 className="card-title">explore yourself</h5>
                    <p className="card-text">
                      with papi's advanced technologies you could identify your minds weaknesses and 
                      strengths
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        algorithms will follow you in yoour learning experience to help you improve your self
                      </small>
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img
                    className="card-img-top"
                    src="images/harrypoter.jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">you won't be lost</h5>
                    <p className="card-text">
                      papi will provide you with roadmaps to achieve the career you want
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        experts will be in touch
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* col */}
          </div>
          {/* row */}
        </div>
        {/* container */}
      </section>
      <section className="contact section-padding pt-0" id="contact">
      <h3 className="myfont-black text-center">Say hello</h3>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <form action="#" className="contact-form webform">
                <div className="form-group d-flex flex-column-reverse">
                  <input
                    type="text"
                    className="form-control"
                    name="cf-name"
                    id="cf-name"
                    placeholder="Your Name"
                    required
                  />
                  <label htmlFor="cf-name" className="webform-label">
                    Full Name
                  </label>
                </div>
                <div className="form-group d-flex flex-column-reverse">
                  <input
                    type="email"
                    className="form-control"
                    name="cf-email"
                    id="cf-email"
                    placeholder="Your Email"
                    required
                  />
                  <label htmlFor="cf-email" className="webform-label">
                    Your Email
                  </label>
                </div>
                <div className="form-group d-flex flex-column-reverse">
                  <textarea
                    className="form-control"
                    rows={5}
                    name="cf-message"
                    id="cf-message"
                    placeholder="Your Message"
                    defaultValue={""}
                    required
                  />
                  <label htmlFor="cf-message" className="webform-label">
                    Message
                  </label>
                </div>
                <button
                  type="submit"
                  className="myfonte"
                  id="submit-button"
                  name="submit"
                >
                  Send
                </button>
              </form>
            </div>
            <div className="mx-auto col-lg-4 col-md-6 col-12">
              <h3 className="my-4 pt-4 pt-lg-0">Say hello</h3>
              <p className="mb-1">21-08-2023</p>
              <p>
                <a href="#">
                  hello@company.co
                  <i className="fas fa-arrow-right custom-icon" />
                </a>
              </p>
              <ul className="social-links mt-2">
                <li>
                  <a
                    href="https://www.facebook.com/ahmedl17/"
                    rel="noopener noreferrer"
                    className="fab fa-facebook"
                    target="_blank"
                  />
                </li>
                <li>
                  <a href="#" rel="noopener" className="fab fa-twitter" />
                </li>
                <li>
                  <a href="#" rel="noopener" className="fab fa-instagram" />
                </li>
                <li>
                  <a href="#" rel="noopener" className="fab fa-linkedin" />
                </li>
                <li>
                  <a href="#" rel="noopener" className="fab fa-youtube" />
                </li>
              </ul>
              <p className="copyright-text mt-5 pt-3">
                Copyright © 2023 Ahmedl17
              </p>
              
            </div>
          </div>
        </div>
      </section>
      {/* SCRIPTS */}

      <Footer />
    </>
  );
};

export default Home;
