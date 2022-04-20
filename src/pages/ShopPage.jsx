import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import CartItem from '../components/CartItem';
import Header from '../components/Header';


const ShopPage = observer(() => {
  const { cartItem } = useContext(Context);

  return (
    <div className="carts">
      <div className="carts__container _container">
        {cartItem.brands.map((brand) => (
          <div
            className="carts__title"
            onClick={() => cartItem.setSelectBrand(brand)}
            key={brand.id}>
            {brand.name}
          </div>
        ))}

        {cartItem.item.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
    </div>
  );
});

export default ShopPage;
