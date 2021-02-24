import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { useTextFieldStyles } from './newTaskFormStyles';

const TaskForm = (props) => {
  return (<>
    <form onSubmit={props.handleSubmit}>
      <Field
        placeholder="Text here"
        name="newTask"
        type="text"
        component={RenderField}
        validate={required}
      />
      <Button variant="contained" color="secondary" type='submit' size='large'>Add</Button>
    </form>
  </>);
};

const RenderField = ({
  input,
  placeholder,
  type,
  meta: { touched, error }
}) => {
  const classes = useTextFieldStyles();
  const hasError = touched && error;
  console.log(hasError);
  return (
    <>
      <TextField
        variant="outlined"
        className={classes.root}
        {...input}
        placeholder={placeholder}
        type={type}
        error={hasError}
        helperText={hasError && error}
        margin="none"
      />
    </>
  );
};

const required = (value) => {
  if (!value) {
    return 'Field is required';
  }
  return undefined;
};

const ReduxForm = reduxForm({
  form: 'newTaskform',
})(TaskForm);

export default ReduxForm;
