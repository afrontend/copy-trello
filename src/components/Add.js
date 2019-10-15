import React from "react";
import "./Add.scss";

import {
  useAddList,
  ADD_TYPE,
  LIST_ITEM_STATUS,
  LIST_STATUS
} from "./hooks/AddListHooks";

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

const TEXT = {
  [ADD_TYPE.LIST]: {
    [LIST_STATUS.HAS_LIST]: "Add a Another List",
    [LIST_STATUS.HAS_NOT_LIST]: "Add a List"
  },
  [ADD_TYPE.LIST_ITEM]: {
    [LIST_ITEM_STATUS.HAS_LIST_ITEM]: "Add a Another Card",
    [LIST_ITEM_STATUS.HAS_NOT_LIST_ITEM]: "Add a Card"
  }
};

const EditButton = ({ active, type, children }) => {
  const PREFIX = {
    [ADD_TYPE.LIST]: "add-list",
    [ADD_TYPE.LIST_ITEM]: "add-list-item",
    [ADD_TYPE.EDIT_LIST]: "edit-list"
  };
  return (
    <button type="button" className={`${PREFIX[type]}__btn`} onClick={active}>
      {children}
    </button>
  );
};

const AddList = React.forwardRef(
  ({ value, onChange, onKeyUp, add, inActive }, ref) => {
    return (
      <div className="add__list">
        <input
          type="text"
          ref={ref}
          placeholder="Enter list title..."
          name="list-title"
          value={value}
          onChange={onChange}
          onKeyUp={onKeyUp}
        />
        <div className="add__btn-box">
          <button
            className="add__btn-box__success-btn"
            type="button"
            onClick={add}
          >
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

const EditList = React.forwardRef(
  ({ value, onChange, onKeyUp, inActive }, ref) => {
    return (
      <div className="edit__list-title">
        <input
          type="text"
          ref={ref}
          placeholder=""
          name="edit-list-title"
          value={value}
          onChange={onChange}
          onKeyUp={onKeyUp}
          onBlur={inActive}
        />
      </div>
    );
  }
);

const getEditor = (type, props) => {
  switch (type) {
    case ADD_TYPE.LIST:
    case ADD_TYPE.LIST_ITEM:
      return <AddList {...props} />;
    case ADD_TYPE.EDIT_LIST:
      return <EditList {...props} />;
    default:
      return "";
  }
};

function Add({ type, status, buttonText, id }) {
  const { active, ...props } = useAddList({ type, id });

  return (
    <>
      {!props.isActive ? (
        <EditButton active={active} type={type}>
          {buttonText || TEXT[type][status]}
        </EditButton>
      ) : (
        getEditor(type, props)
      )}
    </>
  );
}

Add.defaultProps = {
  type: ADD_TYPE.LIST
};

export default Add;
