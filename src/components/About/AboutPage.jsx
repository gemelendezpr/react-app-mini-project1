import React from "react";
<<<<<<< HEAD
import "./About.css";
=======
import "./AboutPage.css";
>>>>>>> 1ae844a (mini-project done)
import github_icon from "../assets/github_icon.png";
import linkedin_icon from "../assets/linkedin_icon.png";
import team_member1 from "../assets/team_member1.png";
import team_member2 from "../assets/team_member2.jpg";
import team_member3 from "../assets/team_member3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutPage() {
  let message =
<<<<<<< HEAD
    "Meet the dynamic trio behind Tropify: the brain, the brawn, and the one who insists that coconuts make everything better. Together, we’re blending Puerto Rican spice with Cuban flair, proving that when you mix two islands, you get a tropical paradise on your doorstep. So, grab your virtual sunglasses, because our team is here to make shopping as sunny and vibrant as a Caribbean beach day – minus the sand in your shoes!";
=======
    "Meet the dynamic trio behind Tropify: the brain, the brawn, and the one who insists that coconuts make everything better. Together, we're blending Puerto Rican spice with Cuban flair, proving that when you mix two islands, you get a tropical paradise on your doorstep. So, grab your virtual sunglasses, because our team is here to make shopping as sunny and vibrant as a Caribbean beach day – minus the sand in your shoes!";
>>>>>>> 1ae844a (mini-project done)
  return (
    <section className="section-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">The Team Behind Tropify</h2>
            <p className="section-subtitle">{message}</p>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={team_member1} className="team-img" alt="pic" />
              <h3>VICTOR CARDONA</h3>
              <div className="team-info">
                <p>"Aquatic Swole Maestro"</p>
                <p>
                  Victor is our aquatic sensation, born with gills and fins, or
                  so the legend goes. A speedster in the water, he once raced a
                  dolphin and won. Aquaman, aqua who? When Victor isn't zipping
                  through the Caribbean waves, he's implementing lightning-fast
                  features to make your shopping experience smoother than his
                  freestyle stroke.
                </p>

                <ul className="team-icon">
                  <li>
                    <a
                      href="https://github.com/Victor-Julian-Cardona"
                      target="_blank"
                    >
                      <div className="github">
                        <img src={github_icon} alt="" />
                      </div>
                    </a>{" "}
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/victor-cardona-889020245/"
                      target="_blank"
                    >
                      <div className="linkedin">
                        <img src={linkedin_icon} alt="" />
                      </div>
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={team_member2} className="team-img" alt="pic" />
              <h3>LISANDRA FUNDORA </h3>
              <div className="team-info">
                <p>"Frosty Cleverella"</p>

                <p>
                  Meet Lisi, our frosty genius hailing from the icy realms of
                  Utah but with Caribbean roots deep enough to thaw even the
                  coldest winter. Known for her cool demeanor and even cooler
                  ideas. When she's not orchestrating the symphony of code,
                  rumor has it that she uses frostbite to debug code and turns
                  frozen coffee to Café cortadito.
                </p>

                <ul className="team-icon">
                  <li>
                    <a href="https://github.com/lisifun" target="_blank">
                      <div className="github">
                        <img src={github_icon} alt="" />
                      </div>
                    </a>{" "}
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/lisandra-fundora-300675290/"
                      target="_blank"
                    >
                      <div className="linkedin">
                        <img src={linkedin_icon} alt="" />
                      </div>
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
<<<<<<< HEAD
            <div className="team-item"> 
=======
            <div className="team-item">
>>>>>>> 1ae844a (mini-project done)
              <img src={team_member3} className="team-img" alt="pic" />
              <h3>GERARDO MELÉNDEZ</h3>
              <div className="team-info">
                <p>"Sir Mofongo-a-Lot"</p>

                <p>
                  Gerard, our mofongo connoisseur. They say his artistic sense
                  is so extraordinary that even a color wheel asked for his
                  advice. On one occasion, he ingeniously repaired a
                  malfunctioning computer with a mere tap of a mofongo. His
                  philosophy is simple: if mofongo can't fix it, it likely
                  wasn't a problem worth having. Imagine what it do for your
                  online shopping experience!"
                </p>

                <ul className="team-icon">
                  <li>
                    <a href="https://github.com/gemelendezpr" target="_blank">
                      <div className="github">
                        <img src={github_icon} alt="" />
                      </div>
                    </a>{" "}
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/gerardomelendezpr/"
                      target="_blank"
                    >
                      <div className="linkedin">
                        <img src={linkedin_icon} alt="" />
                      </div>
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
