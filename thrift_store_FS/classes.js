class Item {
  #id;
  #name;
  #price;
  #image;

  constructor(obj) {
    this.#id = obj.id;
    this.#name = obj.name;
    this.#price = obj.price;
    this.#image = obj.image;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get price() {
    return this.#price;
  }

  get image() {
    return this.#image;
  }
}

class Category {
  #id;
  #label;
  #description;
  #slogan;
  #items;

  constructor(obj) {
    this.#id = obj.id;
    this.#label = obj.label;
    this.#description = obj.description;
    this.#slogan = obj.slogan;
    this.#items = {};
    Object.keys(obj.items).forEach((key) => {
      this.#items[key] = Item({ ...obj.items[key], id: key });
    });
  }

  get id() {
    return this.#id;
  }

  get label() {
    return this.#label;
  }

  get description() {
    return this.#description;
  }

  get slogan() {
    return this.#slogan;
  }

  get items() {
    return this.#items;
  }
}
