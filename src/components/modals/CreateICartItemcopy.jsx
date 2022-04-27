import React, { useContext, useState, useEffect, useRef } from 'react';

import { Context } from '../..';

import '../style/createcartitem.scss';

const CreateICartItemcopy = ({ active, setActive }) => {
  const { cartItem } = useContext(Context);
  const sortRef = useRef();
  let multiSelect = false;
  const [visiblePopupCategory, setVisiblePopupCategory] = useState(false);

  const [selection, setSelection] = useState([]);

  /*const toggleVisiblePopupCategory = () => {
    setOpen(!open);
  };*/
  const toggleVisiblePopupCategory = () => {
    setVisiblePopupCategory(!visiblePopupCategory);
  };
  function handleOnClick(item) {
    console.log(item.id);
    if (!selection.some((current) => current === item)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter((current) => current.id !== item.id);
      setSelection([...selectionAfterRemoval]);
    }
    setVisiblePopupCategory(false);
  }
  /*const sortType = cartItem.types.map((item) => {
    return <span onClick={toggleVisiblePopupCategory}> {item.name}</span>;
  });*/
  const isItemInSelection = (item) => {
    if (selection.some((current) => current.id === item.id)) {
      return true;
    }
    return false;
  };

  console.log(selection);
  return (
    <div
      ref={sortRef}
      className={active ? 'createItem _active' : 'createItem'}
      onClick={() => setActive(false)}>
      <div className="createItem__container _container">
        <div className="createItem__inner" onClick={(e) => e.stopPropagation()}>
          <p className="createItem__title">New cart</p>
          <div className="createItem__inputblock inputblock">
            <div className="inputblock__title" onClick={toggleVisiblePopupCategory}>
              Select Category {selection}
            </div>
            {visiblePopupCategory && (
              <div className="categorypopup">
                <ul className="categorypopup__list ">
                  {cartItem.types &&
                    cartItem.types.map((obj, index) => (
                      //console.log(index),
                      <li
                        className="categorypopup__item"
                        onClick={() => handleOnClick(obj.name)}
                        key={`${obj.type}_${index}`}>
                        <span>{obj.name}</span>
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>

          <div className="inputblock">
            <div className="inputblock__title">Name of Cart</div>
            <input type="text" className="inputblock__input" placeholder="name" />
          </div>
          <div className="inputblock">
            <div className="inputblock__title">Name of Cart</div>
            <input type="file" className="inputblock__input" />
          </div>
          <button className="createItem__button">Create</button>
        </div>
      </div>
    </div>
  );
};

export default CreateICartItemcopy;
