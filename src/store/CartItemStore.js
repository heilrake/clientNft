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
        nameAuthor: 'DonutShop',
        price: 24,
        rating: 5,
        img: 'https://lh3.googleusercontent.com/mtm9mtB4_dOJxjxohO8ArFCXxUepHGFdq4uNMeipt4rHFljjQ2MMeKKLLURjoLqMAc65b14YBVNEitesjAjAWEU8OPsqxtZFCvLP=w286',
      },
      {
        id: 2,
        name: 'second ',
        nameAuthor: 'kok',
        price: 4,
        rating: 2,
        img: 'https://lh3.googleusercontent.com/qjn3wG6aq1Bu0OVkK4fumytCimJtC9G5d9YPksvET-P5UrEs6jxJk3sAndP4dkHpiNz_lrnRofoQyO1kPYkHOn-L83P1BkteVF7j=w286',
      },
      {
        id: 3,
        name: 'third ',
        nameAuthor: 'DonutShop',
        price: 2,
        rating: 4,
        img: 'https://lh3.googleusercontent.com/6bhe5vemA9wqEOPHASzE0srk2GI7HxfLDGLguFeYDLOfZB280-yNvAa0nTRFB9WnCowyqPC9cgL8asLXW9sgDM47foEYGdRdTzPj=w286',
      },
      {
        id: 4,
        name: 'third ',
        nameAuthor: 'DonutShop',
        price: 2,
        rating: 4,
        img: 'https://lh3.googleusercontent.com/EdwKgBnf2G19nKHOTsNK-0L6crA7d65o6D2gUK7WeEovtCTqZz0Hi3ye94Q4AdN52vYT8jRvMpGiN1sGEUbbhhlU6vYuBW-OQ7yauw=w286',
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
    this._cartItem = item;
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
    return this._cartItem; 
  }
  get selectType() {
    return this._selectedType;
  }
  get selectBrand() {
    return this._selectedBrand;
  }
}
