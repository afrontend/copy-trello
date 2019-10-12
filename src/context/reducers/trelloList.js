import uuidv4 from "uuid/v4";

const actions = {
  ADD_LIST: "ADD_LIST",
  REMOVE_LIST: "REMOVE_LIST",
  UPDATE_LIST: "UPDATE_LIST"
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case actions.ADD_LIST:
      const id = uuidv4();

      return {
        ...state,
        lists: {
          ...state.lists,
          [id]: {
            id,
            items: [],
            ...payload.listInfo
          }
        }
      };
    case actions.REMOVE_LIST:
      return {
        ...state
      };
    case actions.UPDATE_LIST:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default {
  actions,
  reducer
};
