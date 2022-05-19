import { observer } from 'mobx-react-lite';
import React, { useState, useEffect, useContext } from 'react';
import { Context } from '..';
import CreateCollection from '../components/modals/CreateCollection';
import CreateICartItemcopy from '../components/modals/CreateICartItemcopy';
import CreateType from '../components/modals/CreateType';
import '../components/style/createPage.scss';
import { fetchCategory, fetchItems, fetchDevices, fetchCollection } from '../htpp/itemAPI';

const CreatePage = observer(() => {
  const { cartItem } = useContext(Context);

  const [modalActiveСart, setModalActiveCart] = useState(false);
  const [modalActiveType, setModalActiveType] = useState(false);
  const [modalActiveCollection, setModalActiveCollection] = useState(false);

  useEffect(() => {
    fetchCategory().then((data) => cartItem.setCategories(data));
    fetchCollection().then((data) => cartItem.setCollections(data));
    fetchDevices().then((data) => cartItem.setCartItem(data));
  }, []);
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
});

export default CreatePage;
