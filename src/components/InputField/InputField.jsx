 
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';


// InputField.propTypes = {
//   form: PropTypes.object.isRequired,
//   name: PropTypes.string.isRequired,

//   label: PropTypes.string,
//   disabled: PropTypes.bool
// };

export const InputField = (props) => {
  const { form, name, label, disabled } = props;

  // console.log(form)

  const { errors, formState } = form;
  // console.log(typeof errors)
  // const hasError = formState.touched[name] && errors[name];

  return (<div>
    <Controller
      name={name}
      control={form.control}
      
      render={({ field }) =>
        <TextField
          {...field}
          // error={!!hasError}
          // helperText ={errors[name]?.messsage}

          fullWidth
          margin="normal"
          variant="outlined"
          label={label}
          disabled={disabled}
        />}
    />
    </div>
  );
};
