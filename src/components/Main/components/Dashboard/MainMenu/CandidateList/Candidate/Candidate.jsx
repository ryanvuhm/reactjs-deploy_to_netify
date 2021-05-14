import React, { useState } from "react";
import PropTypes from "prop-types";
import { db } from "../../../../../../../firebaseConntect";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import DateRangeIcon from "@material-ui/icons/DateRange";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatIcon from "@material-ui/icons/Chat";
import UpdateCandidate from "../UpdateCandidate/UpdateCandidate";
import firebase from "../../../../../../../firebaseConntect";

import {
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Typography
} from "@material-ui/core";
Candidate.propTypes = {};
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(3)
  }
}));
function Candidate({ dataCandidate, ChangeSpells }) {
  const classes = useStyles();
  const [fileUrl, setFileUrl] = React.useState(null);
  const [time, setTime] = React.useState("");
  const [candidate, setCandidate] = React.useState();
  const [attractive, setAttractive] = React.useState(true);


  const onUpdate = async values => {
    // const newCandidate = {...dataCandidate,...values}
    const newCandidate = {...dataCandidate, ...values, image: fileUrl,time: time};
    console.log({...dataCandidate})
    console.log({...values})
    console.log(newCandidate)
 
    
    console.log(newCandidate)
    console.log(dataCandidate)
    await db.collection("Projects").doc(dataCandidate.id).update(newCandidate);
    // const data = await db.collection("Projects").get();
    // ChangeSpells(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

  const onDelete = async () => {
    await db.collection("Projects").doc(dataCandidate.id).delete();

    // console.log( db.collection("Projects").doc(dataCandidate.id))


    // const data = await db.collection("Projects").get();
    // ChangeSpells(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFileChange = async e => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };


  const handleCalendar = async e => {
 

    setTime(e.target.value)
  };
  const handleAttractive = async e => {
 

    setAttractive(e.target.value)
  };

  var color = ""

  if(dataCandidate.attractive != "default"){
    color = "purple"
  }
  else color = ""

  console.log(color)
  return (
    <div className="container__base__content__main__candidate__info__details">
      <div className="container__base__content__main__candidate__info__details__base">
        <div className="eclip-v">
          <i className="fas fa-ellipsis-v" />
        </div>
        <div className="candidate-logo">
          <div className="candidate-logo__base">
            <img src={dataCandidate.image} alt="" />
          </div>
        </div>
        <h4>
          {dataCandidate.name}
        </h4>
        <p>
          {dataCandidate.positon}
        </p>
        <div className="container__base__content__main__candidate__info__details__base__footer">
          <FavoriteIcon 
          
          style={{color : color}}
          />
          <IconButton
            color="secondary"
            aria-label="plus"
            color="primary"
            onClick={handleClickOpen}
            style={{padding: 0}}
          >
            <DateRangeIcon />
          </IconButton>

          <Dialog
            fullWidth
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogContent >
              <Typography>{dataCandidate.time.replace("T", " And ")}</Typography>
              </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
            </DialogActions>
          </Dialog>

          <ChatIcon />
        </div>

        <UpdateCandidate onSubmit={onUpdate}
          handleFileChange={handleFileChange}
          handleCalendar={handleCalendar}
          handleAttractive={handleAttractive}

          data={dataCandidate}
          />
          
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<DeleteIcon />}
          onClick={onDelete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default Candidate;
