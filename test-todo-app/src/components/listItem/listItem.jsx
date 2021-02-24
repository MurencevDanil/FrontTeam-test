import { Checkbox, TextField, Button } from '@material-ui/core';
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { listItemStyles } from './listItemStyles';

const ListItem = (props) => {
  const inputEl = useRef(null);
  const deleteTask = () => {
    props.deleteTask(props.id);
  };
  const toggleChecked = (ev) => {
    ev.preventDefault();
    props.toggleChecked(props.id, props.checked);
  };
  const finishEditing = () => {
    props.finishEditing(props.id, inputEl.current.value);
  };

  return (
    <div>
      <Checkbox
        inputProps={{ 'aria-label': 'primary checkbox' }}
        // eslint-disable-next-line react/destructuring-assignment
        checked={props.checked}
        onChange={toggleChecked}
      />
      <RenderField
        id="standard-basic"
        label="Your task"
        type="text"
        // eslint-disable-next-line react/destructuring-assignment
        value={props.taskText}
        inputRef={inputEl}
        onChange={finishEditing}
      />
      <Button
        onClick={deleteTask}
        color="secondary"
        variant="outlined"
      >
        Delete
      </Button>
    </div>
  );
};

const RenderField = ({
  label,
  value,
  type,
  onChange,
  inputRef,
}) => {
  const classes = listItemStyles();
  return (
    <>
      <TextField
        id="standard-basic"
        label={label}
        type={type}
        value={value}
        inputRef={inputRef}
        onChange={onChange}
        className={classes.root}
      />
    </>
  );
};

RenderField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  inputRef: PropTypes.func,
};

RenderField.defaultProps = {
  label: undefined,
  value: undefined,
  type: undefined,
  onChange: undefined,
  inputRef: undefined,
};

ListItem.propTypes = {
  id: PropTypes.number,
  checked: PropTypes.bool,
  deleteTask: PropTypes.func,
  toggleChecked: PropTypes.func,
  finishEditing: PropTypes.func,
  taskText: PropTypes.string,
};
ListItem.defaultProps = {
  id: undefined,
  checked: undefined,
  deleteTask: undefined,
  toggleChecked: undefined,
  finishEditing: undefined,
  taskText: undefined,
};

export default ListItem;
