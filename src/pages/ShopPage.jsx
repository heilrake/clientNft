import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

const ShopPage = observer(({ category }) => {
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

        <ul className="carts__menu menu">
          <li className="menu__item">
            <img
              src="https://lh3.googleusercontent.com/oMOkOVkpeSKxRi8v6IejCzURIXgbNOzhD0yTs05sA6YwUH1uhCSvH5IEsNkYu6K2FFPC6UfYznRwGJk4wginVcIrHvKwTcWaMCrFIw=w286"
              alt="cart"
            />
            <div className="menu__information">
              <div className="menu__autor">David Art</div>
              <div className="menu__name">name</div>

              <div className="menu__price">1.25 ETH</div>
            </div>
          </li>
          <li className="menu__item">
            <img
              src="https://lh3.googleusercontent.com/lXflzt1WZdlv38lvknYMROHjbH4wL9Im1m6j8AAx2xBDkKuFNS_VA0u-dVjI8bBOh5xSe7rcopPfJ7VwzG7FhRKVb9xaYOhlVI5n0A=w286"
              alt="cart"
            />
            <div className="menu__information">
              <div className="menu__autor">David Art</div>
              <div className="menu__select">
                <div className="menu__price">1.25 ETH</div>
              </div>
            </div>
          </li>
          <li className="menu__item">
            <img
              src="https://lh3.googleusercontent.com/YDpjdxVqUA5YpDAGox3_ZKKvaKlG9N1EiAERHHmuQSF0e-3vmVtPKlx2LMMKmK5IWup7ML-baDQ_lltIi5W72ZKUBqUqnTGys3DWSQ=w286"
              alt="cart"
            />
            <div className="menu__information">
              <div className="menu__autor">David Art</div>
              <div className="menu__select">
                <div className="menu__price">1.25 ETH</div>
              </div>
            </div>
          </li>
          <li className="menu__item">
            <img
              src="https://lh3.googleusercontent.com/z14gfRmM-R3cI5_V-yXApEbNLYbyf-dsy-BO4Sumo3eoLSMKhmkdllyfqjw7rhAfIdgAz4nv9KMmJwycEhscxTZfxC_43WybPpAeJEk=w286"
              alt="cart"
            />
            <div className="menu__information">
              <div className="menu__autor">David Art</div>
              <div className="menu__select">
                <div className="menu__price">1.25 ETH</div>
              </div>
            </div>
          </li>
          <li className="menu__item">
            <img
              src="https://lh3.googleusercontent.com/oMOkOVkpeSKxRi8v6IejCzURIXgbNOzhD0yTs05sA6YwUH1uhCSvH5IEsNkYu6K2FFPC6UfYznRwGJk4wginVcIrHvKwTcWaMCrFIw=w286"
              alt="cart"
            />
            <div className="menu__information">
              <div className="menu__autor">David Art</div>
              <div className="menu__select">
                <div className="menu__price">1.25 ETH</div>
              </div>
            </div>
          </li>
          <li className="menu__item">
            <img src="./img/main/06.png" alt="cart" />
            <div className="menu__information">
              <div className="menu__autor">David Art</div>
              <div className="menu__select">
                <div className="menu__price">1.25 ETH</div>
              </div>
            </div>
          </li>
          <li className="menu__item">
            <img src="./img/main/07.png" alt="cart" />
            <div className="menu__information">
              <div className="menu__autor">David Art</div>
              <div className="menu__select">
                <div className="menu__price">1.25 ETH</div>
              </div>
            </div>
          </li>
          <li className="menu__item">
            <img src="./img/main/08.png" alt="cart" />
            <div className="menu__information">
              <div className="menu__autor">David Art</div>
              <div className="menu__select">
                <div className="menu__price">1.25 ETH</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
});

export default ShopPage;
