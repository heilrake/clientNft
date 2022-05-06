import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { Context } from '..';
import CartItem from '../components/CartItem';
import Header from '../components/Header';
import { fetchDevices, fetchOneDevice, fetchItems, fetchTypes } from '../htpp/itemAPI';
import { CARTITEM_ROUTE } from '../untils/consts';
const ShopPage = observer(() => {
  const { cartItem } = useContext(Context);

  const navigate = useNavigate();

  useEffect(() => {
    fetchDevices().then((data) => cartItem.setCartItem(data));
  }, []);

  return (
    <div className="carts">
      <div className="carts__container _container">
        {cartItem.items.map(
          (cartItem) => (
            console.log(cartItem), (<CartItem key={cartItem.id} cartItem={cartItem} />)
          ),
        )}
      </div>
    </div>
  );
});

export default ShopPage;
