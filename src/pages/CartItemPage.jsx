import React from 'react';
import '../components/style/cartItemPage.scss';
const CartItemPage = () => {
  return (
    <div className="cartItem">
      <div className="cartItem__container _container">
        <div className="cartItem__inner">
          <div className="cartItem__image">
            <img
              src="https://lh3.googleusercontent.com/mtm9mtB4_dOJxjxohO8ArFCXxUepHGFdq4uNMeipt4rHFljjQ2MMeKKLLURjoLqMAc65b14YBVNEitesjAjAWEU8OPsqxtZFCvLP=w600"
              alt=""
            />
          </div>
          <div className="cartItem__generalinformation">
            <div className="cartItem__information-aboutcart information-aboutcart">
              <div className="information-aboutcart__namecollection">DonutShop</div>
              <div className="information-aboutcart__namecard">Donut 423</div>
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
                0,03
              </div>
              <a href="#" className="informationsale__button">
                Buy
              </a>
            </div>
            <div className="cartItem__category">sport</div>
            <div className ="cartItem__otherinformation">
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
