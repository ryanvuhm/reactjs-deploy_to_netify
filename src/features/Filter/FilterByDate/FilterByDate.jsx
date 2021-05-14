import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, TextField, Typography } from "@material-ui/core";
import { Fragment } from "react";
import { updateDateRange } from "../FilterSlice";
import { useDispatch } from "react-redux";

FilterByDate.propTypes = {};

function FilterByDate(props) {
  const dispatch = useDispatch();
  const [selectedDateStart, setSelectedDateStart] = useState("");
  const [selectedDateEnd, setSelectedDateEnd] = useState("");
  const onChangeCalendarStart = e => {
    setSelectedDateStart(e.target.value);
    console.log(selectedDateStart);
    // const { handleCalendar } = props;
    // if (handleCalendar) {
    //   await handleCalendar(e);
    // }
  };
  const onChangeCalendarEnd = e => {
    setSelectedDateEnd(e.target.value);
    console.log(selectedDateEnd);
    // const { handleCalendar } = props;
    // if (handleCalendar) {
    //   await handleCalendar(e);
    // }
  };


  const handleOnClick =()=>{

    const arr = [selectedDateStart,selectedDateEnd];

    const update = updateDateRange(arr);

    dispatch(update)
  }

  return (
    <Fragment>
      <Typography>Selecte Time Start</Typography>
      <TextField
        id="datetime-local"
        name="time-start"
        type="datetime-local"
        // value={selectedDate}
        value={selectedDateStart}
        // placeholder={selectedDate}
        onChange={onChangeCalendarStart}
        // className={classes.textField}
        // InputLabelProps={{
        //   shrink: true
        // }}
      />
      <Typography>Selecte Time Start</Typography>
      <TextField
        id="datetime-local"
        name="time-end"
        type="datetime-local"
        // value={selectedDate}
        value={selectedDateEnd}
        // placeholder={selectedDate}
        onChange={onChangeCalendarEnd}
        // className={classes.textField}
        // InputLabelProps={{
        //   shrink: true
        // }}
      />

      <Button variant="contained" color="secondary" onClick={handleOnClick}>
        Success
      </Button>
    </Fragment>
  );
}

export default FilterByDate;
