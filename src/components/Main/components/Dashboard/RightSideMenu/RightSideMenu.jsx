import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

RightSideMenu.propTypes = {};

function RightSideMenu(props) {
  const data = useSelector(state => state.interviewCalendar);

  return (
    <div className="container__base__content__right" id="right">
      <div className="container__base__content__right__title">
        <h4>Calendar</h4>
        <div className="container__base__content__right__title__action">
          <i className="fas fa-calendar-alt" />
        </div>
      </div>
      {data.interviewCalendar.map(interview => {


      

        const arr = interview.time.split("T")
        // const date = 

        return (
          <div className="container__base__content__right__content" key={interview.id}>
            <div className="container__base__content__right__content__title2">
              <h4>{arr[0]}</h4>
              <div className="container__base__content__right__content__title2__action">
                <i className="fas fa-ellipsis-v" />
              </div>
            </div>

            <div className="container__base__content__right__content__schedule">
              <p className="bold time1">{arr[1]}</p>

              <div>
                <p>{interview.positon}</p>
                <p className="bold">Text Interview</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RightSideMenu;
