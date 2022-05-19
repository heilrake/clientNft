import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { Context } from '..';
import CartItem from '../components/CartItem';

import { fetchDevices } from '../htpp/itemAPI';

const ShopPage = observer(() => {
  const { cartItem } = useContext(Context);

  useEffect(() => {
    fetchDevices().then((data) => cartItem.setCartItem(data));
  }, []);

  return (
    <div className="carts">
      <div className="carts__container _container">
        <div className="aboutit__title">
          {cartItem.selectCategory &&
            cartItem.categories.map((item, key) =>
              cartItem.selectCategory === item.id ? (
                <p className="aboutit__subtitle">Select category {item.name}</p>
              ) : (
                ''
              ),
            )}
        </div>

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
