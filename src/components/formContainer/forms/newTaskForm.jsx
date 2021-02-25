import { Button, TextField } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { useTextFieldStyles } from './newTaskFormStyles';

const RenderField = ({
  // eslint-disable-next-line
  input,
  placeholder,
  type,
  // eslint-disable-next-line
  meta: { touched, error },
}) => {
  const classes = useTextFieldStyles();
  const hasError = touched && error;

  return (
    <>
      <TextField
        variant="outlined"
        className={classes.root}
        // eslint-disable-next-line
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

RenderField.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
};
RenderField.defaultProps = {
  placeholder: undefined,
  type: undefined,
};

const required = (value) => {
  if (!value) {
    return 'Field is required';
  }
  return undefined;
};

const TaskForm = (props) => (
  <>
    <form onSubmit={props.handleSubmit}>
      <Field
        placeholder="Text here"
        name="newTask"
        type="text"
        component={RenderField}
        validate={required}
      />
      <Button variant="contained" color="secondary" type="submit" size="large">Add</Button>
    </form>
  </>
);

TaskForm.propTypes = {
  handleSubmit: PropTypes.func,
};
TaskForm.defaultProps = {
  handleSubmit: undefined,
};

const ReduxForm = reduxForm({
  form: 'newTaskform',
})(TaskForm);

export default ReduxForm;
