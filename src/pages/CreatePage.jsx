import React, { useState } from 'react';
import CreateCollection from '../components/modals/CreateCollection';
import CreateICartItemcopy from '../components/modals/CreateICartItemcopy';
import CreateType from '../components/modals/CreateType';
import '../components/style/createPage.scss';

const CreatePage = () => {
  const [modalActiveСart, setModalActiveCart] = useState(false);
  const [modalActiveType, setModalActiveType] = useState(false);
  const [modalActiveCollection, setModalActiveCollection] = useState(false);
  return (
    <div className="create">
      <div className="create__container _container">
        <div className="create__type " onClick={() => setModalActiveType(true)}>
          new category
        </div>
        <div className="create__brand" onClick={() => setModalActiveCollection(true)}>
          new collection
        </div>
        <div className="create__cartitem" onClick={() => setModalActiveCart(true)}>
          new card
        </div>
      </div>
      <CreateCollection active={modalActiveCollection} setActive={setModalActiveCollection} />

      <CreateICartItemcopy active={modalActiveСart} setActive={setModalActiveCart} />
      <CreateType active={modalActiveType} setActive={setModalActiveType} />
    </div>
  );
};

export default CreatePage;
