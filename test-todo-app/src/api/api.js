import * as axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}` + '/tasks',
});

// eslint-disable-next-line
export const taskListAPI = {
  add(newTaskText, checked = false, contentEditable = false) {
    const data = { taskText: newTaskText, contentEditable, checked };
    return instance.post('', data)
      .then((response) => response.data);
  },
  delete(id) {
    return instance.delete(`${id}`)
      .then(() => taskListAPI.getTaskData());
  },
  edit(id, text) {
    const data = { taskText: text };
    return instance.patch(`${id}`, data).then((res) => res.data);
  },
  getTaskData() {
    return instance.get()
      .then((response) => {
        const payload = response.data;
        return payload;
      });
  },
  toggleChecked(id, checkedState) {
    debugger;
    let data;
    if (!checkedState) {
      data = { checked: true };
    } else {
      data = { checked: false };
    }
    return instance.patch(`${id}`, data).then((res) => {
      console.log(res);
      return res.data;
    });
  },
};
