import React, { useContext, useState, useRef, useEffect } from 'react';
import { Context } from '../..';

import '../style/createcartitem.scss';

const CreateICartItem = ({ active, setActive }) => {
  const { cartItem } = useContext(Context);
  const sortRef = useRef();
  console.log(cartItem.types);

  const [visiblePopupCategory, setVisiblePopupCategory] = useState(false);

  const [selectCategory, setSelectCategory] = useState(null);

  const toggleVisiblePopupCategory = () => {
    setVisiblePopupCategory(!visiblePopupCategory);
  };
  const sortType = cartItem.types.map((item) => {
    return <span onClick={toggleVisiblePopupCategory}> {item.name}</span>;
  });
  const handleOutsideClick = (event) => {
    // закриваем попап если кликнули не по нему
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortRef.current)) {
      setVisiblePopupCategory(false);
    }
  };
  
  const onSelectItem = (index) => {
    setVisiblePopupCategory(false);
  };
  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div
      ref={sortRef}
      className={active ? 'createItem _active' : 'createItem'}
      onClick={() => setActive(false)}>
      <div className="createItem__container _container">
        <div className="createItem__inner" onClick={(e) => e.stopPropagation()}>
          <p className="createItem__title">New cart</p>
          <div className="createItem__inputblock inputblock">
            <div className="inputblock__title">Select Category</div>
            <span>{sortType}</span>
            {visiblePopupCategory && (
              <div className="categorypopup">
                <ul className="categorypopup__list">
                  {cartItem.types &&
                    cartItem.types.map((obj, index) => (
                      <li
                        onClick={() => console.log(setSelectCategory(obj.name))}
                        key={`${obj.type}_${index}`}>
                        {obj.name}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>

          <div className="inputblock">
            <div className="inputblock__title">Name of Cart</div>
            <input type="text" className="inputblock__input" />
          </div>
          <div className="inputblock">
            <div className="inputblock__title">Name of Cart</div>
            <input type="text" className="inputblock__input" />
          </div>
          <button className="createItem__button">Create</button>
        </div>
      </div>
    </div>
  );
};

export default CreateICartItem;
