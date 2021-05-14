import React from "react";
import PropTypes from "prop-types";

HidingMenu.propTypes = {};

function HidingMenu(props) {
  return (
    <div className="container__base__navbar d-none">
      <div className="menu-button">
        <input id="dropdown-button" type="checkbox" className="dropdown-toggle" />
        <label className="dropdown-label" htmlFor="dropdown-button" />

        <div className="menu-slide-from-left" id="menu">
          <div className="content__left">
            <div className="content__left__logo">
              <img src="img/logo.jpg" alt="" />
            </div>

            <div />

            <ul className="content__left__list">
              <li>Tools</li>
              <li className="content__left__list__details">
                <i className="fab fa-windows" />

                <p>Dashboards</p>
              </li>
              <li className="content__left__list__details">
                <i className="fab fa-buffer" />
                <p>Offers</p>
              </li>
              <li className="content__left__list__details">
                <i className="fas fa-user" />

                <p>People</p>
              </li>
              <li className="content__left__list__details">
                <i className="fas fa-chart-bar" />
                <p>Statics</p>
              </li>
              <li className="content__left__list__details">
                <i className="fas fa-file-alt" />
                <p>Documents</p>
              </li>
            </ul>

            <ul className="content__left__list">
              <li>Others</li>
              <li className="content__left__list__details">
                <i className="fas fa-comment-dots" />
                <p>Chat</p>
                <div className="box-chat">5</div>
              </li>
              <li className="content__left__list__details">
                <i className="far fa-question-circle" />
                <p>Support</p>
              </li>
              <li className="content__left__list__details">
                <i className="fas fa-calendar-alt" />
                <p>Calendar</p>
              </li>

              <div className="content__left__footer">
                <div className="content__left__footer__logo">
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
