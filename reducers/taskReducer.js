import {
  OPEN_COLLECTION,
  DELETE_COLLECTION,
  EDIT_COLLECTION,
  CREATE_COLLECTION,
  CREATE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  TOGGLE_THEME,
  SETUP_PROGRESS,
} from '../constants/types';

const initialState = {
  isLoading: true,
  theme: 'dark',
  colorSet: {
    primary: '#000',
    secondary: '#222',
    tertiary: '#f3f3f3',
    placeholder: '#999',
    alternative: '#111',
  },
  activeScreen: 'Tasks',
  activeCollection: 0,
  progressData: [],
  tasks: [
    {
      name: 'Groceries',
      data: [{ title: 'Get some fish' }, { title: 'Salmon' }, { title: 'Brocoli' }, { title: 'Black pepper' }],
    },
    {
      name: 'Code Stuff',
      data: [
        { title: 'Revision on java' },
        { title: 'Finish portfolio website' },
        { title: 'Push app to the app store' },
        { title: 'Submit poly assignment' },
      ],
    },
  ],
};

const taskReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const { activeCollection, tasks, theme, progressData } = state;

  switch (type) {
    case SETUP_PROGRESS: {
      const data = [];
      tasks.forEach((collection) => {
        data.push({ length: collection.data.length, done: 0 });
      });
      return {
        ...state,
        progressData: data,
        isLoading: false,
      };
    }
    case OPEN_COLLECTION: {
      return {
        ...state,
        activeCollection: payload,
      };
    }
    case CREATE_COLLECTION: {
      return {
        ...state,
        tasks: [...tasks, { name: payload, data: [] }],
        progressData: [...progressData, { length: 0, done: 0 }],
      };
    }
    case DELETE_COLLECTION: {
      return {
        ...state,
        tasks: [
          ...tasks.filter((item, index) => {
            return index !== payload;
          }),
        ],
        progressData: [
          ...progressData.filter((item, index) => {
            return index !== payload;
          }),
        ],
      };
    }
    case EDIT_COLLECTION: {
      let taskList = [...tasks];
      taskList[payload.index].name = payload.details;
      return {
        ...state,
        tasks: taskList,
      };
    }
    case CREATE_TASK: {
      const { collectionId } = payload;
      let newTaskList = [...tasks];
      newTaskList[collectionId].data.push(payload.data);

      let prog = [...progressData];
      prog[collectionId].length += 1;

      return {
        ...state,
        tasks: newTaskList,
        progressData: prog,
        activeCollection: collectionId,
      };
    }
    case DELETE_TASK: {
      const data = [
        ...tasks[activeCollection].data.filter((item) => {
          return item.title !== payload;
        }),
      ];

      let newTaskList = [...tasks];
      newTaskList[activeCollection].data = data;

      let prog = [...progressData];
      prog[activeCollection].done += 1;

      return {
        ...state,
        tasks: newTaskList,
        progressData: prog,
      };
    }
    case EDIT_TASK: {
      let taskList = [...tasks];
      taskList[activeCollection].data[payload.index].title = payload.task;
      return {
        ...state,
        tasks: taskList,
      };
    }
    case TOGGLE_THEME: {
      const { name, list } = payload;
      return {
        ...state,
        theme: name,
        colorSet: list,
      };
    }
    default: {
      return state;
    }
  }
};

export default taskReducer;
