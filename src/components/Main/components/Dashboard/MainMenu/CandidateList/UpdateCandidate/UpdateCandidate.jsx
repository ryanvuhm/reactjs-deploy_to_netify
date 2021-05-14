import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import UpdateIcon from "@material-ui/icons/Update";

import {
  Fab,
  IconButton,
  Input,
  LinearProgress,
  makeStyles,
  Typography
} from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import { InputField } from "../../../../../../InputField/InputField";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    paddingTop: theme.spacing(4)
  },

  avatar: {
    margin: "0 auto",
    backgroundColor: theme.palette.secondary.main
  },

  title: {
    margin: theme.spacing(2, 0, 3, 0),
    textAlign: "center"
  },

  submit: {
    margin: theme.spacing(3, 0, 2, 0)
  },

  progress: {
    position: "absolute",
    top: theme.spacing(1),
    left: 0,
    right: 0
  }
}));
export default function UpdateCandidate(props) {
   const { data } = props;


  const [selectedDate, setSelectedDate] = useState(data.time);

  const [value, setValue] = React.useState("attractive");

 
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const form = useForm({
    defaultValues: {
      name: "",
      positon: "",
      time: "",
      image: "",
      attractive: ""
    }
    // resolver: yupResolver(schema)
  });

  const handleSubmit = async values => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
    setOpen(false);
    // form.reset();
  };

  const onFileChange = async values => {
    const { handleFileChange } = props;
    if (handleFileChange) {
      await handleFileChange(values);
    }
  };

  const onChangeCalendar = async e => {
    setSelectedDate(e.target.value);
    const { handleCalendar } = props;
    if (handleCalendar) {
      await handleCalendar(e);
    }
  };
  const handleChangeAttractive = async event => {
    setValue(event.target.value);
    const { handleAttractive } = props;
    if (handleAttractive) {
      await handleAttractive(event);
    }
    console.log(event.target.value);
  };

  const { isSubmitting } = form.formState;

  return (
    <div>
    
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<UpdateIcon />}
        onClick={handleClickOpen}
      >
        UPDATE
      </Button>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <div className={classes.root}>
            {isSubmitting && <LinearProgress className={classes.progress} />}

            <Typography className={classes.title} component="h3" variant="h5">
              Update Candidate
            </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <InputField name="name" label="Name" form={form} value={data.name} />
              <InputField name="positon" label="Position" form={form} value={data.positon}  />
              <input
                // style={{ display: "none" }}
                id="upload-photo"
                name="image"
                type="file"
                onChange={onFileChange}
              />
              <TextField
                id="datetime-local"
                name="time"
                label="Next appointment"
                type="datetime-local"
                // value={selectedDate}
                value={selectedDate}
                // placeholder={selectedDate}
                onChange={onChangeCalendar}
                // className={classes.textField}
                // InputLabelProps={{
                //   shrink: true
                // }}
              />

              <FormControl component="fieldset">
                <FormLabel component="legend">Select Status</FormLabel>
                <Controller
                  name="attractive"
                  control={form.control}
                  render={({ field }) =>
                    <RadioGroup
                    {...field}
                      aria-label="status"
                      // name="attractive"
                      value={value}
                      onChange={handleChangeAttractive}
                      

              
                      // form={form}
                    >
                       {/* {...field} */}
                      <FormControlLabel
                        value="attractive"
                        control={<Radio />}
                        label="Attrative"
                        // {...field}
                      />
                      <FormControlLabel
                        value="default"
                        control={<Radio />}
                        label="Default"
                        // {...field}
                      />
                    </RadioGroup>}
                />
              </FormControl>
              {/* <InputField name="attractive" label="Atractive" form={form} /> */}

              <Button
                disabled={isSubmitting}
                type="submit"
                className={classes.submit}
                variant="contained"
                color="primary"
                fullWidth
                size="large"
              >
                Update Candidate
              </Button>
            </form>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
