import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import PersonIcon from "@material-ui/icons/Person";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import DescriptionIcon from "@material-ui/icons/Description";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import HelpIcon from "@material-ui/icons/Help";
import DateRangeIcon from "@material-ui/icons/DateRange";
LeftSideMenu.propTypes = {};

function LeftSideMenu(props) {
  const handldePeopleClick = () => {
    props.peopleClick();
  };
  return (
    <div className="container__base__content__left">
      <div className="container__base__content__left__logo">
        <img src="img/logo.jpg" alt="" />
      </div>

      <div />

      <ul className="container__base__content__left__list">
        <li>Tools</li>
        <li
          className="container__base__content__left__list__details"
          id="dashboard"
        >
          <DashboardIcon />

          <Link to="/home">
            <p>Dashboards</p>{" "}
          </Link>
        </li>
        <li className="container__base__content__left__list__details">
          <LocalOfferIcon />
          <p>Offers</p>
        </li>
        <li
          className="container__base__content__left__list__details"
          id="people"
        >
          <PersonIcon />
          <Link to="/people" onClick={handldePeopleClick}>
            <p>People</p>
          </Link>
        </li>
        <li className="container__base__content__left__list__details">
          <InsertChartIcon />
          <p>Statics</p>
        </li>
        <li className="container__base__content__left__list__details">
          <DescriptionIcon />
          <p>Documents</p>
        </li>
      </ul>

      <ul className="container__base__content__left__list">
        <li>Others</li>
        <li className="container__base__content__left__list__details">
          <AnnouncementIcon />
          <p>Chat</p>
          <div className="box-chat">5</div>
        </li>
        <li className="container__base__content__left__list__details">
          <HelpIcon />
          <p>Support</p>
        </li>
        <li className="container__base__content__left__list__details">
          <DateRangeIcon />
          <p>Calendar</p>
        </li>

        <div className="container__base__content__left__footer">
          <div className="container__base__content__left__footer__logo">
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
  );
}

export default LeftSideMenu;
