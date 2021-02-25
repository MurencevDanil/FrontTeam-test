import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormContainer from './formContainer/formContainer';
import {
  addNewTask,
  deleteTask,
  finishEditing,
  startEditing,
  getTaskData,
  toggleChecked,
} from '../store/reducers/listReducer';
import ListItem from './listItem/listItem';

class ToDoList extends React.Component {
  componentDidMount() {
    this.props.getTaskData();
  }

  addTask(text) {
    this.props.addNewTask(text);
  }

  render() {
    return (
      <>
        <div>
          <FormContainer addTask={this.addTask} />
        </div>
        <div>
          {
            this.props.taskList.map((el) => (
              <ListItem
                key={el.id}
                startEditing={this.props.startEditing}
                finishEditing={this.props.finishEditing}
                toggleChecked={this.props.toggleChecked}
                deleteTask={this.props.deleteTask}
                taskText={el.taskText}
                id={el.id}
                contentEditable={el.contentEditable}
                checked={el.checked}
              />
            ))
          }
        </div>
      </>
    );
  }
}

ToDoList.propTypes = {
  getTaskData: PropTypes.func,
  startEditing: PropTypes.func,
  finishEditing: PropTypes.func,
  toggleChecked: PropTypes.func,
  deleteTask: PropTypes.func,
  addNewTask: PropTypes.func,
  taskList: PropTypes.arrayOf(PropTypes.array()),
};
ToDoList.defaultProps = {
  getTaskData: undefined,
  startEditing: undefined,
  finishEditing: undefined,
  toggleChecked: undefined,
  deleteTask: undefined,
  addNewTask: undefined,
  taskList: undefined,
};

const mapStatetoProps = (state) => ({
  taskList: state.list.tasks,
});

export default connect(mapStatetoProps, {
  addNewTask,
  deleteTask,
  finishEditing,
  getTaskData,
  toggleChecked,
  startEditing,
})(ToDoList);
