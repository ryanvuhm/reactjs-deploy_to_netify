import React from "react";
import PropTypes from "prop-types";

HidingMenu.propTypes = {};

function HidingMenu(props) {
  return (
    <div class="container__base__navbar d-none">
      <div class="menu-button">
        <input id="dropdown-button" type="checkbox" class="dropdown-toggle" />
        <label class="dropdown-label" for="dropdown-button" />

        <div class="menu-slide-from-left" id="menu">
          <div class="content__left">
            <div class="content__left__logo">
              <img src="img/logo.jpg" alt="" />
            </div>

            <div />

            <ul class="content__left__list">
              <li>Tools</li>
              <li class="content__left__list__details">
                <i class="fab fa-windows" />

                <p>Dashboards</p>
              </li>
              <li class="content__left__list__details">
                <i class="fab fa-buffer" />
                <p>Offers</p>
              </li>
              <li class="content__left__list__details">
                <i class="fas fa-user" />

                <p>People</p>
              </li>
              <li class="content__left__list__details">
                <i class="fas fa-chart-bar" />
                <p>Statics</p>
              </li>
              <li class="content__left__list__details">
                <i class="fas fa-file-alt" />
                <p>Documents</p>
              </li>
            </ul>

            <ul class="content__left__list">
              <li>Others</li>
              <li class="content__left__list__details">
                <i class="fas fa-comment-dots" />
                <p>Chat</p>
                <div class="box-chat">5</div>
              </li>
              <li class="content__left__list__details">
                <i class="far fa-question-circle" />
                <p>Support</p>
              </li>
              <li class="content__left__list__details">
                <i class="fas fa-calendar-alt" />
                <p>Calendar</p>
              </li>

              <div class="content__left__footer">
                <div class="content__left__footer__logo">
                  <img
                    src="img/people_avatar_head_wolverine_logan_xman_marvel-512.png"
                    alt=""
                  />
                </div>
                <div>
                  <p>Mr.Owen Brady</p>
                  <span>Admin</span>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HidingMenu;
