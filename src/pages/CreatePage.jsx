import React, { useState } from 'react';
import CreateICartItem from '../components/modals/CreateICartItem';
import '../components/style/createPage.scss';

const CreatePage = () => {
  const [modalActive, setModalActive] = useState(true);
  return (
    <div class="create">
      <div class="create__container _container">
        <div class="create__type">new type</div>
        <div class="create__brand">new brand</div>
        <div class="create__cartitem" onClick={() => setModalActive(true)}>
          new card
        </div>
      </div>
      <CreateICartItem active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export default CreatePage;
