import React from "react";
import PropTypes from "prop-types";

MainMenu.propTypes = {};

function MainMenu(props) {
  return (
    <div class="container__base__content__main2 " id="main2">
      <div class="container__base__content__main2__title">
        <h2>Candidate Profile</h2>

        <button>Invite to job</button>
      </div>

      <div class="container__base__content__main2__portfolio">
        <div class="container__base__content__main2__portfolio__title">
          <h4>You need to hire</h4>
          <div class="container__base__content__main2__portfolio__title__action">
            <p>View all</p>
            <i class="fas fa-arrow-right" />
          </div>
        </div>

        <div class="container__base__content__main2__portfolio__template">
          <div class="container__base__content__main2__portfolio__template__details">
            <div class="container__base__content__main2__portfolio__template__details__picture">
              <img src="img/tem1.jpeg" alt="" />
            </div>

            <p>Online marker place for real estate agency</p>
          </div>

          <div class="container__base__content__main2__portfolio__template__details">
            <div class="container__base__content__main2__portfolio__template__details__picture">
              <img src="img/tem2.jpg" alt="" />
            </div>

            <p>Website and mobile app for food delivery service</p>
          </div>

          <div class="container__base__content__main2__portfolio__template__details">
            <div class="container__base__content__main2__portfolio__template__details__picture">
              <img src="img/tem3.jpeg" alt="" />
            </div>

            <p>Dashboard for a live streaming fitness platform </p>
          </div>
        </div>

        <div class="container__base__content__main2__portfolio__skills">
          <h4>Skills</h4>

          <div class="container__base__content__main2__portfolio__skills__base">
            <div class="container__base__content__main2__portfolio__skills__base__details">
              <p>UI</p>
            </div>

            <div class="container__base__content__main2__portfolio__skills__base__details">
              <p>UX</p>
            </div>

            <div class="container__base__content__main2__portfolio__skills__base__details">
              <p>UI Research</p>
            </div>

            <div class="container__base__content__main2__portfolio__skills__base__details">
              <p>Responsive Web Design</p>
            </div>

            <div class="container__base__content__main2__portfolio__skills__base__details">
              <p>Mobile Design</p>
            </div>

            <div class="container__base__content__main2__portfolio__skills__base__details">
              <p>Web UI </p>
            </div>

            <div class="container__base__content__main2__portfolio__skills__base__details">
              <p>Wireframing</p>
            </div>

            <div class="container__base__content__main2__portfolio__skills__base__details">
              <p>Branding</p>
            </div>

            <div class="container__base__content__main2__portfolio__skills__base__details">
              <p>Usability Testing</p>
            </div>

            <div class="container__base__content__main2__portfolio__skills__base__details">
              <p>UX Prototyping</p>
            </div>

            <div class="container__base__content__main2__portfolio__skills__base__details">
              <p>UI Graphics</p>
            </div>
          </div>
        </div>
      </div>

      <div class="container__base__content__main2__option">
        <div class="container__base__content__main2__option__recommend">
          <h3>Recomendations</h3>
          <div class="container__base__content__main2__option__recommend__candidate">
            <div class="container__base__content__main2__option__recommend__candidate__avt">
              <img src="img/cap.png" alt="" />
            </div>

            <div class="container__base__content__main2__option__recommend__candidate__text">
              <h6>Leon Ward, CEO</h6>

              <p>Its wad so good to work with Jean.She's very creative...</p>
            </div>
          </div>

          <div class="container__base__content__main2__option__recommend__candidate">
            <div class="container__base__content__main2__option__recommend__candidate__avt">
              <img src="img/iron.png" alt="" />
            </div>

            <div class="container__base__content__main2__option__recommend__candidate__text">
              <h6>Keith Scott, Project Manager</h6>

              <p>Its wad so good to work with Jean.She's very creative...</p>
            </div>
          </div>
          <div class="container__base__content__main2__option__recommend__footer">
            <p>View all</p>
            <i class="fas fa-arrow-right" />
          </div>
        </div>

        <div class="container__base__content__main2__option__documents">
          <h3>Documents</h3>

          <div class="container__base__content__main2__option__documents__details">
            <div class="container__base__content__main2__option__documents__details__file-icon">
              <i class="fas fa-file-alt" />
            </div>

            <div class="container__base__content__main2__option__documents__details__describe">
              <p>Resume.pdf</p>
              <span>1,26 MB</span>
            </div>
            <i class="fas fa-cloud-download-alt" />
          </div>

          <div class="container__base__content__main2__option__documents__details">
            <div class="container__base__content__main2__option__documents__details__file-icon">
              <i class="fas fa-file-alt" />
            </div>

            <div class="container__base__content__main2__option__documents__details__describe">
              <p>Resume.pdf</p>
              <span>1,26 MB</span>
            </div>
            <i class="fas fa-cloud-download-alt" />
          </div>

          <div class="container__base__content__main2__option__documents__details">
            <div class="container__base__content__main2__option__documents__details__file-icon">
              <i class="fas fa-file-alt" />
            </div>

            <div class="container__base__content__main2__option__documents__details__describe">
              <p>Resume.pdf</p>
              <span>1,26 MB</span>
            </div>
            <i class="fas fa-cloud-download-alt" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
