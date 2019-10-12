import React from "react";
import "./AddList.scss";

import { useAddList, ADD_TYPE, LIST_ITEM_STATUS } from "./hooks/AddListHooks";

/**
 * @name Add
 * @description add list or list irem
 *
 * 리스트 또는 리스트의 아이템을 추가하기 위한 UI 인터페이스
 *
 * TODO:
 * 1. 공용 UI 인터페이스이기 때문에 비지니스 로직과 UI가 분리되야 한다.
 *  1) hook을 type에 따라 import 를 통해 동적으로 불러올 수 있는지?
 *    - React.lazy를 이용하면 될 듯. => 응 타입 어떻게 확인하려고?
 */

const TEXT_TYPES = {
  [ADD_TYPE.LIST]: "Add a list",
  [ADD_TYPE.LIST_ITEM]: {
    [LIST_ITEM_STATUS.HAS_LIST]: "Add a Card",
    [LIST_ITEM_STATUS.HAS_NOT_LIST]: "Add a Another Card"
  }
};

const AddListButton = ({ active, children }) => {
  return (
    <button type="button" className="add-list__btn" onClick={active}>
      {children}
    </button>
  );
};

const AddListEditBox = React.forwardRef(
  ({ value, onChange, onKeyUp, addList, inActive }, ref) => {
    return (
      <div className="edit__box">
        <input
          type="text"
          ref={ref}
          placeholder="Enter list title..."
          name="list-title"
          value={value}
          onChange={onChange}
          onKeyUp={onKeyUp}
        />
        <div className="edit__btn-box">
          <button className="edit__success-btn" type="button" onClick={addList}>
            Add list
          </button>
          <button type="button" onClick={inActive}>
            {/* <FontAwesomeIcon icon="coffee" /> */}
            close
          </button>
        </div>
      </div>
    );
  }
);

function AddList({ type }) {
  const {
    isActive,
    active,
    inActive,
    inputEl,
    value,
    onChange,
    onKeyUp,
    addList
  } = useAddList(type);

  const getTextToType = () => {
    const result = TEXT_TYPES[type];

    if (typeof result === "object") {
      return result[LIST_ITEM_STATUS.HAS_NOT_LIST];
    }

    return result;
  };

  return (
    <>
      {!isActive ? (
        <AddListButton active={active}>{getTextToType()}</AddListButton>
      ) : (
        <AddListEditBox
          ref={inputEl}
          value={value}
          onChange={onChange}
          onKeyUp={onKeyUp}
          addList={addList}
          inActive={inActive}
        />
      )}
    </>
  );
}

AddList.defaultProps = {
  type: ADD_TYPE.LIST_ITEM
};

export default AddList;
