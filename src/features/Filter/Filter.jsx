import React from "react";
import PropTypes from "prop-types";
import { Fragment } from "react";
import { ContactSupportTwoTone } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import ConfirmationPosition from "./FilterByPosition/FilterByPosition";
import ConfirmationDateRange from "./FilterByDate/FilterByDate";
import FilterByDate from "./FilterByDate/FilterByDate";
Filter.propTypes = {};

function Filter(props) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const TagName = props.tag;


  return (
    <Fragment>
      <div className="position" onClick={handleClickOpen}>
        <p>
          Filter By {props.name}
        </p>
        <i className="fas fa-user-friends" />
      </div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        style={{ padding: theme.spacing(2) }}
      >
        <DialogTitle id="responsive-dialog-title">
          {"Filter By Choosing Date Range"}
        </DialogTitle>
        <DialogContent />

        <TagName />

        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}

export default Filter;
