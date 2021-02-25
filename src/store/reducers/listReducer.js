import { taskListAPI } from '../../api/api';

const initialState = {
  tasks: [],
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TASK_DATA': {
      return {
        ...state,
        tasks: [...state.tasks, ...action.payload],
      };
    }
    case 'ADD_NEW_TASK': {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    }
    case 'FINISH_EDITING': {
      const task = [...state.tasks];
      const editableTask = task.filter((item) => item.id === action.payload.id);
      editableTask[0].taskText = action.payload.taskText;
      return {
        ...state,
        tasks: task,

      };
    }
    case 'TOGGLE_CHECKED': {
      const copyTasks = [...state.tasks];
      const checkedTask = copyTasks.filter((item) => item.id === action.payload.id);
      checkedTask[0].checked = action.payload.checked;
      return {
        ...state,
        tasks: copyTasks,
      };
    }
    case 'DELETE_TASK': {
      return {
        ...state,
        tasks: [...action.payload],
      };
    }
    default:
      return state;
  }
};

export default listReducer;

export const getTaskData = () => (dispatch) => {
  taskListAPI.getTaskData().then((payload) => {
    dispatch({ type: 'GET_TASK_DATA', payload });
  });
};
export const addNewTask = (formData) => (dispatch) => {
  taskListAPI.add(formData.newTask).then((payload) => {
    dispatch({ type: 'ADD_NEW_TASK', payload });
  });
};

export const deleteTask = (id) => (dispatch) => {
  taskListAPI.delete(id).then((payload) => {
    dispatch({ type: 'DELETE_TASK', payload });
  });
};
export const toggleChecked = (id, checkedState) => (dispatch) => {
  taskListAPI.toggleChecked(id, checkedState).then((payload) => {
    dispatch({ type: 'TOGGLE_CHECKED', payload });
  });
};
export const finishEditing = (id, text) => (dispatch) => {
  taskListAPI.edit(id, text).then((payload) => {
    dispatch({ type: 'FINISH_EDITING', payload });
  });
};
