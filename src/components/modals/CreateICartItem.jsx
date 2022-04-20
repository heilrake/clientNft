import React from 'react';
import './createcartitem.scss';
const CreateICartItem = ({ active, setActive }) => {
  return (
    <div class={active ? 'createItem _active' : 'createItem'} onClick={() => setActive(false)}>
      <div class="createItem__container _container">
        <div class="createItem__inner" onClick={(e) => e.stopPropagation()}>
          dffd
        </div>
      </div>
    </div>
  );
};

export default CreateICartItem;
