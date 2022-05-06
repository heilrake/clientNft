import React, { useContext, useState, useEffect, useRef } from 'react';

import { Context } from '../..';

import '../style/createcartitem.scss';

const CreateICartItemcopy = ({ active, setActive }) => {
  const { cartItem } = useContext(Context);

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);
  const [collection, setCollection] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(null);

  console.log(cartItem);

  const sortRef = useRef();
  let multiSelect = false;

  const [visiblePopupCategory, setVisiblePopupCategory] = useState(false);
  const [visiblePopupCollection, setVisiblePopupCollection] = useState(false);

  const toggleVisiblePopupCategory = () => {
    setVisiblePopupCategory(!visiblePopupCategory);
  };
  const toggleVisiblePopupCollection = () => {
    setVisiblePopupCollection(!visiblePopupCollection);
  };

  const [info, setInfo] = useState([]);
  /*const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };*/

  const [selectionCategory, setSelectionCategory] = useState([]);
  const [selectionCollection, setSelectionCollection] = useState([]);
  /*const toggleVisiblePopupCategory = () => {
    setOpen(!open);
  };*/

  function handleOnClickCategory(item) {
    console.log(item.id);
    if (!selectionCategory.some((current) => current === item)) {
      if (!multiSelect) {
        setSelectionCategory([item]);
      } else if (multiSelect) {
        setSelectionCategory([...selectionCategory, item]);
      }
    } else {
      let selectionAfterRemoval = selectionCategory;
      selectionAfterRemoval = selectionAfterRemoval.filter((current) => current.id !== item.id);
      setSelectionCategory([...selectionAfterRemoval]);
    }
    setVisiblePopupCategory(false);
    // setVisiblePopupCollection(false);
  }
  function handleOnClickCollection(item) {
    console.log(item.id);
    if (!selectionCategory.some((current) => current === item)) {
      if (!multiSelect) {
        setSelectionCollection([item]);
      } else if (multiSelect) {
        setSelectionCollection([...selectionCategory, item]);
      }
    } else {
      let selectionAfterRemoval = selectionCategory;
      selectionAfterRemoval = selectionAfterRemoval.filter((current) => current.id !== item.id);
      setSelectionCollection([...selectionAfterRemoval]);
    }
    // setVisiblePopupCategory(false);
    setVisiblePopupCollection(false);
  }
  /*const sortType = cartItem.types.map((item) => {
    return <span onClick={toggleVisiblePopupCategory}> {item.name}</span>;
  });*/
  const isItemInSelection = (item) => {
    if (selectionCategory.some((current) => current.id === item.id)) {
      return true;
    }
    return false;
  };

  console.log(selectionCategory);
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
              Select Category {selectionCategory}
            </div>
            {visiblePopupCategory && (
              <div className="categorypopup">
                <ul className="categorypopup__list ">
                  {cartItem.categories &&
                    cartItem.categories.map((obj, index) => (
                      //console.log(index),
                      <li
                        className="categorypopup__item"
                        onClick={() => handleOnClickCategory(obj.name)}
                        key={`${obj.type}_${index}`}>
                        <span>{obj.name}</span>
                      </li>
                    ))}
                </ul>
              </div>
            )}
            <div className="inputblock__title" onClick={toggleVisiblePopupCollection}>
              Select Collection {selectionCollection}
            </div>
            {visiblePopupCollection && (
              <div className="categorypopup">
                <ul className="categorypopup__list ">
                  {cartItem.collections &&
                    cartItem.collections.map((obj, index) => (
                      //console.log(index),
                      <li
                        className="categorypopup__item"
                        onClick={() => handleOnClickCollection(obj.name)}
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
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="inputblock__input"
              placeholder="name"
            />
          </div>
          <div className="inputblock">
            <div className="inputblock__title">Input image cart</div>
            <input
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="inputblock__input"
              placeholder="url image"
            />
          </div>
          <div className="inputblock">
            <div className="inputblock__title">Price of the cart</div>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="inputblock__input"
              placeholder="price"
            />
          </div>
          <div className="inputblock">
            <div className="inputblock__title">Description on cart</div>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="inputblock__input"
              placeholder="description"
            />
          </div>
          <button className="createItem__button">Create</button>
        </div>
      </div>
    </div>
  );
};

export default CreateICartItemcopy;
