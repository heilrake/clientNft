import { makeAutoObservable } from 'mobx';

export default class CartItemStore {
  constructor() {
    this._categories = [
      /* { id: 1, name: 'Art ' },
      { id: 2, name: 'Sport ' },
      { id: 3, name: 'Music ' },
      { id: 4, name: 'Music ' },*/
    ];
    this._collections = [];

    this._cartItem = [];
    this._selectedCategory = {};
    this._selectedCollection = {};
    makeAutoObservable(this); // следит за измениними и компонента будет делать перерендер

    // actions (как-то изменяють состояние)
  }
  setCategories(categories) {
    this._categories = categories;
  }

  setCollections(collections) {
    this._collections = collections;
  }
  setCartItem(items) {
    this._cartItem = items;
  }
  setSelectCategory(category) {
    this._selectedCategory = category;
  }
  setSelectCollection(collections) {
    this._selectedCollection = collections;
  }

  get categories() {
    return this._categories;
  }
  get collections() {
    return this._collections;
  }
  get items() {
    return this._cartItem;
  }
  get selectCategory() {
    return this._selectedCategory;
  }
  get selectCollection() {
    return this._selectedCollection;
  }
}
