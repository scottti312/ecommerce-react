import hashCode from "./hashCode";

function Product(id, title, price, src, alt) {
  this.id = id;
  this.title = title;
  this.price = price;
  this.src = src;
  this.alt = alt;
}

const bread = new Product(hashCode('bread'), 'bread', 1, require("./resources/stickers/bread.png"), 'bread');
const love = new Product(hashCode('love'), 'love', 1, require("./resources/stickers/love.png"), 'love');
const bedding = new Product(hashCode('bedding'), 'bedding', 1, require("./resources/stickers/bedding.png"), 'bedding');
const grain = new Product(hashCode('grain'), 'grain', 1, require("./resources/stickers/grain.png"), 'grain');
const shampoo = new Product(hashCode('shampoo'), 'shampoo', 1, require("./resources/stickers/shampoo.png"), 'shampoo');

const Products = {
  bread,
  love,
  bedding,
  grain,
  shampoo
};

export default Products;