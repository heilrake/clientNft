import React, { useState } from 'react';
import { createCategory } from '../../htpp/itemAPI';

const CreateType = ({ active, setActive }) => {
  const [valueName, setValueName] = useState('');
  const [valueImage, setValueImage] = useState('');

  const addType = () => {
    createCategory({ name: valueName, image: valueImage }).then((data) => {
      console.log(data);
      setValueName('');
      setValueImage('');
      setActive();
    });
  };
  return (
    <div className={active ? 'createItem _active' : 'createItem'} onClick={() => setActive(false)}>
      <div className="createItem__container _container">
        <div className="createItem__inner" onClick={(e) => e.stopPropagation()}>
          <p className="createItem__title">New Category</p>
          <div className="inputblock">
            <div className="inputblock__title">Name of new Category</div>
            <input
              type="text"
              value={valueName}
              onChange={(e) => setValueName(e.target.value)}
              className="inputblock__input"
              placeholder="name"
            />
            <div className="inputblock">
              <div className="inputblock__title">Input image for category</div>
              <input
                type="text"
                value={valueImage}
                onChange={(e) => setValueImage(e.target.value)}
                className="inputblock__input"
              />
            </div>
            <button className="createItem__button" onClick={addType}>
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateType;
