import React, { useState } from 'react';
import { createCollection } from '../../htpp/itemAPI';

const CreateCollection = ({ active, setActive }) => {
  const [valueName, setValueName] = useState('');
  const addBrand = () => {
    createCollection({ name: valueName }).then((data) => {
      setValueName('');

      setActive();
    });
  };
  return (
    <div className={active ? 'createItem _active' : 'createItem'} onClick={() => setActive(false)}>
      <div className="createItem__container _container">
        <div className="createItem__inner" onClick={(e) => e.stopPropagation()}>
          <p className="createItem__title">New Category</p>
          <div className="inputblock">
            <div className="inputblock__title">Name of new Brand</div>
            <input
              type="text"
              value={valueName}
              onChange={(e) => setValueName(e.target.value)}
              className="inputblock__input"
              placeholder="name"
            />

            <button className="createItem__button" onClick={addBrand}>
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCollection;
