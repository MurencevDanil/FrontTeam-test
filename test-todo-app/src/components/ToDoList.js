import React from 'react';
import NewListItem from './newListItem/newListItem';
import { connect } from 'react-redux'
import { addNewTask, deleteTask, finishEditing, startEditing, getTaskData, toggleChecked } from '../store/reducers/listReducer'
import ListItem from './listItem/listItem';

class ToDoList extends React.Component {
    addTask = (text) => {
        this.props.addNewTask(text)
    }

    componentDidMount() {
        this.props.getTaskData()
    }

    render() {
        return <>
            <div>
                <NewListItem addTask={this.addTask} />
            </div>
            <div>
                {
                    this.props.taskList.map((el) => {
                        return <ListItem
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
                    })
                }
            </div>
        </>
    }
}

const mapStatetoProps = (state) => {
    return {
        taskList: state.list.tasks
    }
}

export default connect(mapStatetoProps, {
    addNewTask,
    deleteTask,
    finishEditing,
    getTaskData,
    toggleChecked,
    startEditing,
})(ToDoList);
