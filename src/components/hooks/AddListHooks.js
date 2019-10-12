import { useState, useRef, useEffect, useCallback } from "react";
import { useTrelloContext, Actions } from "../../context/TrelloContext";

export const ADD_TYPE = {
  LIST: "LIST",
  LIST_ITEM: "LIST_ITEM"
};

export const LIST_ITEM_STATUS = {
  HAS_LIST: "HAS_LIST",
  HAS_NOT_LIST: "HAS_NOT_LIST"
};

export const useAddListDispatch = type => {
  const { trelloList, trelloListItem } = useTrelloContext();
  const { dispatch, dispatchType } = (() => {
    switch (type) {
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
  })();

  return {
    addListDispatch: value =>
      dispatch({
        type: dispatchType,
        payload: {
          listInfo: {
            name: value
          }
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

export const useAddList = type => {
  const { addListDispatch } = useAddListDispatch(type);
  const { isActive, active, inActive } = useToggle();
  const [value, setValue] = useState("");
  const inputEl = useRef(null);

  useEffect(() => {
    if (isActive) {
      try {
        inputEl.current.focus();
      } catch (e) {
        console.error(e);
      }
    }
  }, [isActive]);

  return {
    inputEl,
    isActive,
    active,
    inActive,
    onChange: e => setValue(e.target.value),
    addList: _ => {
      addListDispatch(value);
      inActive();
    },
    onKeyUp: e => {
      if (e.keyCode === 13) {
        addListDispatch(value);
        inActive();
      }
    }
  };
};
