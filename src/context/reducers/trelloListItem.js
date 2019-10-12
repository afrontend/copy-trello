const actions = {
  ADD_LIST_ITEM: "ADD_LIST_ITEM",
  REMOVE_LIST_ITEM: "REMOVE_LIST_ITEM",
  UPDATE_LIST_ITEM: "UPDATE_LIST_ITEM"
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case actions.ADD_LIST_ITEM:
      console.log("add list item");
      return {
        ...state
      };
    case actions.REMOVE_LIST_ITEM:
      return {
        ...state
      };
    case actions.UPDATE_LIST_ITEM:
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
