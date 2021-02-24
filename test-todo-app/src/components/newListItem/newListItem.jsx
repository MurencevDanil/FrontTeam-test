import PropTypes from 'prop-types';
import React from 'react';
import ReduxForm from './forms/newTaskForm';

const NewListItem = (props) => {
  const onSubmit = (formData) => {
    props.addTask(formData);
  };

  return (
    <div>
      <ReduxForm onSubmit={onSubmit} />
    </div>
  );
};

NewListItem.propTypes = {
  addTask: PropTypes.func,
};

NewListItem.defaultProps = {
  addTask: undefined,
};

export default NewListItem;
