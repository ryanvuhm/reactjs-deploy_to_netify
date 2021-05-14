import React from "react";
import PropTypes from "prop-types";

RightSideMenu.propTypes = {};

function RightSideMenu(props) {
  return (
    <div class="container__base__content__right2 " id="right2">
      <div class="container__base__content__right2__candidate ">
        <div class="container__base__content__right2__candidate__tag ">
          <img src="img/captain_marvel-512.png" alt="" />
          <div class="container__base__content__right2__candidate__tag__name">
            <p>Jean Wade</p>
            <span>Middle UI/UX Designer</span>
          </div>
        </div>
        <p class="des">
          Eperienced UX/UI designer with a strong backfround in visual art ,
          marketing, comunications and psychology.
        </p>
        <div class="container__base__content__right2__candidate__icon">
          <div class="container__base__content__right2__candidate__icon__part">
            <i class="fas fa-phone-alt" />
          </div>
          <div class="container__base__content__right2__candidate__icon__part">
            <i class="fas fa-envelope" />
          </div>
          <div class="container__base__content__right2__candidate__icon__part">
            <i class="fas fa-comment-alt" />
          </div>
          <div class="container__base__content__right2__candidate__icon__part">
            <i class="fas fa-ellipsis-h" />
          </div>
        </div>
      </div>

      <div class="container__base__content__right2__experience">
        <h3>Experience</h3>

        <div class="container__base__content__right2__experience__base">
          <div class="container__base__content__right2__experience__base__location">
            <div class="container__base__content__right2__experience__base__location__company">
              <i class="fab fa-google" />
              <p>Google</p>
            </div>
            <span>Oct 2018 - Present</span>
            <div class="container__base__content__right2__experience__base__location__geo">
              <i class="fas fa-map-marker-alt" />
              <span>California</span>
            </div>
          </div>

          <p>Lead UX Designer</p>
          <span>
            Designer full feature of Batmobile Autopilot , user flows , high
            fidelity mockups.
          </span>
        </div>

        <div class="container__base__content__right2__experience__base">
          <div class="container__base__content__right2__experience__base__location">
            <div class="container__base__content__right2__experience__base__location__company">
              <i class="fab fa-facebook" />
              <p>Facebook</p>
            </div>
            <span>Jan 2016 - Jun 2018</span>
            <div class="container__base__content__right2__experience__base__location__geo">
              <i class="fas fa-map-marker-alt" />
              <span>Poland</span>
            </div>
          </div>

          <p>Senior UX Designer</p>
          <span>
            Building new features and improving existing user flows of the
            mobile and web apps
          </span>
        </div>

        <div class="container__base__content__right2__experience__base">
          <div class="container__base__content__right2__experience__base__location">
            <div class="container__base__content__right2__experience__base__location__company">
              <i class="fab fa-sketch" />
              <p>Sketch</p>
            </div>
            <span>May 2015 - Jun 2018</span>
            <div class="container__base__content__right2__experience__base__location__geo">
              <i class="fas fa-map-marker-alt" />
              <span>Freelance</span>
            </div>
          </div>

          <p>Interface Designer</p>
          <span>
            At the company,I have the role of the interface desginer mostly
            working with ui desktop app development
          </span>
        </div>
      </div>
    </div>
  );
}

export default RightSideMenu;
