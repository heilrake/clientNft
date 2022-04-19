import { makeAutoObservable } from 'mobx';

export default class CartItemStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Art ' },
      { id: 2, name: 'Sport ' },
      { id: 3, name: 'Music ' },
      { id: 4, name: 'Music ' },
    ];
    this._brands = [
      // тут нужно понимать что автори нфт
      { id: 1, name: 'Bob ' },
      { id: 2, name: 'Anna ' },
      { id: 3, name: 'Tanya ' },
    ];
    this._cartItem = [
      {
        id: 1,
        name: 'first ',
        price: 24,
        rating: 5,
        img: 'https://images.prom.ua/1389777583_dozhdepriemnik-plastikovyj-300h300.jpg',
      },
      {
        id: 2,
        name: 'second ',
        price: 4,
        rating: 2,
        img: 'https://images.prom.ua/1389777583_dozhdepriemnik-plastikovyj-300h300.jpg',
      },
      {
        id: 3,
        name: 'third ',
        price: 2,
        rating: 4,
        img: 'https://images.prom.ua/1389777583_dozhdepriemnik-plastikovyj-300h300.jpg',
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this); // следит за измениними и компонента будет делать перерендер

    // actions (как-то изменяють состояние)
  }
  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setCartItem(item) {
    this._item = item;
  }
  setSelectType(type) {
    this._selectedType = type;
  }
  setSelectBrand(brand) {
    this._selectedBrand = brand;
  }
  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get item() {
    return this._item;
  }
  get selectType() {
    return this._selectedType;
  }
  get selectBrand() {
    return this._selectedBrand;
  }
}
