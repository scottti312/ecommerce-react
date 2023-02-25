import hashCode from "./hashCode";

export interface Product {
  id: number;
  title: string;
  price: string;
  src: string;
  alt: string;
}

function createProduct(id: number, title: string, price: number, src: string, alt: string) {
  return {
    id,
    title,
    price: price.toFixed(2),
    src,
    alt
  };
}

const apple = createProduct(hashCode('apple'), 'apple', 1.25, require("../resources/stickers/food/apple.png"), 'apple');
const bread = createProduct(hashCode('bread'), 'bread', 1.25, require("../resources/stickers/food/bread.png"), 'bread');
const burger = createProduct(hashCode('burger'), 'burger', 1.25, require("../resources/stickers/food/burger.png"), 'burger');
const chicken = createProduct(hashCode('chicken'), 'chicken', 1.25, require("../resources/stickers/food/chicken.png"), 'chicken');
const cupcake = createProduct(hashCode('cupcake'), 'cupcake', 1.25, require("../resources/stickers/food/cupcake.png"), 'cupcake');
const egg = createProduct(hashCode('egg'), 'egg', 1.25, require("../resources/stickers/food/egg.png"), 'egg');
const food = createProduct(hashCode('food'), 'food', 1.25, require("../resources/stickers/food/food.png"), 'food');
const frappe = createProduct(hashCode('frappe'), 'frappe', 1.25, require("../resources/stickers/food/frappe.png"), 'frappe');
const grain = createProduct(hashCode('grain'), 'grain', 1, require("../resources/stickers/food/grain.png"), 'grain');
const icecream = createProduct(hashCode('sss'), 'sss', 1.25, require("../resources/stickers/food/sss.png"), 'sss');
const nigiri = createProduct(hashCode('nigiri'), 'nigiri', 1.25, require("../resources/stickers/food/nigiri.png"), 'nigiri');
const pizza = createProduct(hashCode('pizza'), 'pizza', 1.25, require("../resources/stickers/food/pizza.png"), 'pizza');
const taco = createProduct(hashCode('taco'), 'taco', 1.25, require("../resources/stickers/food/taco.png"), 'taco');

const bedding = createProduct(hashCode('bedding'), 'bedding', 1, require("../resources/stickers/bedding.png"), 'bedding');
const clothes = createProduct(hashCode('clothes'), 'clothes', 1, require("../resources/stickers/clothes.png"), 'clothes');
const couple = createProduct(hashCode('couple'), 'couple', 1, require("../resources/stickers/couple.png"), 'couple');
const love = createProduct(hashCode('love'), 'love', 1.50, require("../resources/stickers/love.png"), 'love');
const shampoo = createProduct(hashCode('shampoo'), 'shampoo', 1, require("../resources/stickers/shampoo.png"), 'shampoo');
const shoe = createProduct(hashCode('shoe'), 'shoe', 1, require("../resources/stickers/shoe.png"), 'shoe');
const surprised = createProduct(hashCode('surprised'), 'surprised', 2, require("../resources/stickers/surprised.png"), 'surprised');
const world = createProduct(hashCode('world'), 'world', 1.25, require("../resources/stickers/world.png"), 'world');

const Products: Record<string, Product> = {
  apple,
  bread,
  burger,
  chicken,
  cupcake,
  egg,
  food,
  frappe,
  grain,
  icecream,
  nigiri,
  pizza,
  taco,

  bedding,
  clothes,
  couple,
  love,
  shampoo,
  shoe,
  surprised,
  world,
};


export default Products;