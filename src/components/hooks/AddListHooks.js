import { useState, useRef, useEffect, useMemo } from "react";
import { useTrelloContext, Actions } from "../../context/TrelloContext";

export const ADD_TYPE = {
  LIST: "LIST",
  LIST_ITEM: "LIST_ITEM",
  EDIT_LIST: "EDIT_LIST"
};

export const LIST_ITEM_STATUS = {
  HAS_LIST_ITEM: "HAS_LIST_ITEM",
  HAS_NOT_LIST_ITEM: "HAS_NOT_LIST_ITEM"
};

export const LIST_STATUS = {
  HAS_LIST: "HAS_LIST",
  HAS_NOT_LIST: "HAS_NOT_LIST"
};

export const useAddDispatch = type => {
  const { trelloList, trelloListItem } = useTrelloContext();
  const { dispatch, dispatchType } = useMemo(() => {
    switch (type) {
      case ADD_TYPE.EDIT_LIST:
        return {
          dispatch: trelloList[1],
          dispatchType: Actions.UPDATE_LIST
        };
      case ADD_TYPE.LIST_ITEM:
        return {
          dispatch: trelloListItem[1],
          dispatchType: Actions.ADD_LIST_ITEM
        };
      default:
        return {
          dispatch: trelloList[1],
          dispatchType: Actions.ADD_LIST
        };
    }
  }, [type]);

  return {
    addDispatch: info =>
      dispatch({
        type: dispatchType,
        payload: {
          ...info
        }
      })
  };
};

export const useToggle = () => {
  const [isActive, setActive] = useState(false);

  return {
    isActive,
    active: () => {
      setActive(true);
    },
    inActive: () => setActive(false)
  };
};

export const useAddList = ({ type, id }) => {
  const { addDispatch } = useAddDispatch(type);
  const { isActive, active, inActive } = useToggle();
  const [value, setValue] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    if (isActive) {
      try {
        ref.current.focus();
      } catch (e) {
        console.error(e);
      }
    }
  }, [isActive]);

  return {
    ref,
    isActive,
    active,
    inActive,
    onChange: e => setValue(e.target.value),
    add: _ => {
      addDispatch({
        id,
        name: value
      });
      inActive();
    },
    onKeyUp: e => {
      if (e.keyCode === 13) {
        addDispatch({
          id,
          name: value
        });
        inActive();
      }
    }
  };
};
