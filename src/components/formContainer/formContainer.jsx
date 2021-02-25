import PropTypes from 'prop-types';
import React from 'react';
import ReduxForm from './forms/newTaskForm';

const FormContainer = (props) => {
  const onSubmit = (formData) => {
    props.addTask(formData);
  };

  return (
    <div>
      <ReduxForm onSubmit={onSubmit} />
    </div>
  );
};

FormContainer.propTypes = {
  addTask: PropTypes.func,
};

FormContainer.defaultProps = {
  addTask: undefined,
};

export default FormContainer;
