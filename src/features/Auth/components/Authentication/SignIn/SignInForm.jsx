import { yupResolver } from "@hookform/resolvers/yup";
import {
  Avatar,
  Button,
  LinearProgress,
  makeStyles,
  Typography
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import './index.scss'
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { InputField } from "../../../../../components/InputField/InputField";
import PasswordField from "../../../../../components/PasswordField";

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

LoginForm.propTypes = {
  onSubmit: PropTypes.func
};

function LoginForm(props) {
  const classes = useStyles();

  const schema = yup.object().shape({
    // fullName: yup
    //   .string()
    //   .required("Please enter your full name.")
    //   .test(
    //     "should has at least two words",
    //     "Please enter at least two words.",
    //     value => {
    //       return value.split(" ").length >= 2;
    //     }
    //   ),

    identifier: yup
      .string()
      .required("Please enter your email.")
      .email("Please enter a valid email address."),
    password: yup.string().required("Please enter your password")
    //   .min(6, "Please enter at least 6 characters."),
    // retypePassword: yup
    //   .string()
    //   .required("Please retype your password.")
    //   .oneOf([yup.ref("password")], "Password does not match")
  });
  const form = useForm({
    defaultValues: {
      // fullName: "",
      identifier: "",
      password: ""
      // retypePassword: ""
    },
    resolver: yupResolver(schema)
  });

  const handleSubmit = async values => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }

    // form.reset();
  };

  const { isSubmitting } = form.formState;

  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}

      <Avatar className={classes.avatar}>
        <LockOutlined />
      </Avatar>

      <Typography className={classes.title} component="h3" variant="h5">
        Sign in
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        {/* <InputField name="fullName" label="Full Name" form={form} /> */}
        <div className="SignInform">
          <InputField name="identifier" label="Email" form={form} />

          <PasswordField name="password" label="Password" form={form} />
          {/* <PasswordField
          name="retypePassword"
          label="RetypePassword"
          form={form}
        /> */}

          <Button
            disabled={isSubmitting}
            type="submit"
            className={classes.submit}
            variant="contained"
            color="primary"
            fullWidth
            size="large"
          >
            Sign in
          </Button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
