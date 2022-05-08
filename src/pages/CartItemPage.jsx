import React, { useContext, useEffect, useState } from 'react';
import '../components/style/cartItemPage.scss';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../htpp/itemAPI';

import { Context } from '..';
const CartItemPage = () => {
  const cartItem = useContext(Context);
  console.log(cartItem);
  const [item, setItem] = useState({ info: [] });
  const { id } = useParams();

  useEffect(() => {
    fetchOneDevice(id).then((data) => setItem(data));
  }, []);
  console.log(item);
  return (
    <div className="cartItem">
      <div className="cartItem__container _container">
        <div className="cartItem__inner">
          <div className="cartItem__image">
            <img src={item.img} alt="" />
          </div>
          <div className="cartItem__generalinformation">
            <div className="cartItem__information-aboutcart information-aboutcart">
              <div className="information-aboutcart__namecollection"></div>
              <div className="information-aboutcart__namecard">{item.name}</div>
              <div className="information-aboutcart__owner">
                Owned by
                <p>sithmood</p>
              </div>
            </div>
            <div className="cartItem__informationsale informationsale">
              <div className="informationsale__price">
                {' '}
                <img
                  src="https://openseauserdata.com/files/accae6b6fb3888cbff27a013729c22dc.svg"
                  alt=""
                />{' '}
                {item.price} Eth
              </div>
              <a href="#" className="informationsale__button">
                Buy
              </a>
            </div>
            <div className="cartItem__category">sport</div>
            <div className="cartItem__otherinformation">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci dolorum
              voluptatibus corrupti commodi harum?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemPage;
