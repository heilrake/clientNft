import React, { useState } from 'react';
import CreateICartItemcopy from '../components/modals/CreateICartItemcopy';
import '../components/style/createPage.scss';

const CreatePage = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="create">
      <div className="create__container _container">
        <div className="create__type">new type</div>
        <div className="create__brand">new brand</div>
        <div className="create__cartitem" onClick={() => setModalActive(true)}>
          new card
        </div>
      </div>
      <CreateICartItemcopy active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export default CreatePage;
