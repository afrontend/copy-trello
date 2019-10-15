import uuidv4 from "uuid/v4";

const actions = {
  ADD_LIST: "ADD_LIST",
  REMOVE_LIST: "REMOVE_LIST",
  UPDATE_LIST: "UPDATE_LIST"
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case actions.ADD_LIST: {
      const id = uuidv4();

      return {
        ...state,
        lists: {
          ...state.lists,
          [id]: {
            ...payload,
            id,
            items: []
          }
        }
      };
    }
    case actions.REMOVE_LIST:
      return {
        ...state
      };
    case actions.UPDATE_LIST: {
      const { id, name } = payload;
      const originalListItem = state.lists[id] || {};
      const updateList = {
        ...originalListItem,
        name
      };
      return {
        ...state,
        lists: {
          ...state.lists,
          [id]: {
            ...updateList
          }
        }
      };
    }
    default:
      return state;
  }
};

export default {
  actions,
  reducer
};
