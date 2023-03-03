import hashCode from "./hashCode";

export interface Product {
  id: number;
  title: string;
  price: string;
  src: string;
  alt: string;
  category: string;
}

function createProduct(id: number, title: string, price: number, src: string, alt: string, category: string) {
  return {
    id,
    title,
    price: price.toFixed(2),
    src,
    alt,
    category,
  };
}

const apple = createProduct(hashCode('apple'), 'apple', 1.25, require("../resources/stickers/food/apple.png"), 'apple', 'food');
const babyfood = createProduct(hashCode('babyfood'), 'babyfood', 1.25, require("../resources/stickers/food/babyfood.png"), 'babyfood', 'food');
const cheese = createProduct(hashCode('cheese'), 'cheese', 1.25, require("../resources/stickers/food/cheese.png"), 'cheese', 'food');
const cherry = createProduct(hashCode('cherry'), 'cherry', 1.25, require("../resources/stickers/food/cherry.png"), 'cherry', 'food');
const croissant = createProduct(hashCode('croissant'), 'croissant', 1.25, require("../resources/stickers/food/croissant.png"), 'croissant', 'food');
const hotdog = createProduct(hashCode('hotdog'), 'hotdog', 1.25, require("../resources/stickers/food/hotdog.png"), 'hotdog', 'food');
const nachos = createProduct(hashCode('nachos'), 'nachos', 1.25, require("../resources/stickers/food/nachos.png"), 'nachos', 'food');
const noodles = createProduct(hashCode('noodles'), 'noodles', 1.25, require("../resources/stickers/food/noodles.png"), 'noodles', 'food');
const onigiri = createProduct(hashCode('onigiri'), 'onigiri', 1.25, require("../resources/stickers/food/onigiri.png"), 'onigiri', 'food');
const rice = createProduct(hashCode('rice'), 'rice', 1.25, require("../resources/stickers/food/rice.png"), 'rice', 'food');
const shrimp = createProduct(hashCode('shrimp'), 'shrimp', 1.25, require("../resources/stickers/food/shrimp.png"), 'shrimp', 'food');
const watermelon = createProduct(hashCode('watermelon'), 'watermelon', 1.25, require("../resources/stickers/food/watermelon.png"), 'watermelon', 'food');
const bread = createProduct(hashCode('bread'), 'bread', 1.25, require("../resources/stickers/food/bread.png"), 'bread', 'food');
const burger = createProduct(hashCode('burger'), 'burger', 1.25, require("../resources/stickers/food/burger.png"), 'burger', 'food');
const chicken = createProduct(hashCode('chicken'), 'chicken', 1.25, require("../resources/stickers/food/chicken.png"), 'chicken', 'food');
const cupcake = createProduct(hashCode('cupcake'), 'cupcake', 1.25, require("../resources/stickers/food/cupcake.png"), 'cupcake', 'food');
const egg = createProduct(hashCode('egg'), 'egg', 1.25, require("../resources/stickers/food/egg.png"), 'egg', 'food');
const food = createProduct(hashCode('food'), 'food', 1.25, require("../resources/stickers/food/food.png"), 'food', 'food');
const frappe = createProduct(hashCode('frappe'), 'frappe', 1.25, require("../resources/stickers/food/frappe.png"), 'frappe', 'food');
const grain = createProduct(hashCode('grain'), 'grain', 1, require("../resources/stickers/food/grain.png"), 'grain', 'food');
const icecream = createProduct(hashCode('icecream'), 'ice cream', 1.25, require("../resources/stickers/food/icecream.png"), 'ice cream', 'food');
const nigiri = createProduct(hashCode('nigiri'), 'nigiri', 1.25, require("../resources/stickers/food/nigiri.png"), 'nigiri', 'food');
const pineapple = createProduct(hashCode('pineapple'), 'pineapple', 2, require("../resources/stickers/food/pineapple.png"), 'pineapple', 'other');
const pizza = createProduct(hashCode('pizza'), 'pizza', 1.25, require("../resources/stickers/food/pizza.png"), 'pizza', 'food');
const taco = createProduct(hashCode('taco'), 'taco', 1.25, require("../resources/stickers/food/taco.png"), 'taco', 'food');

const bedding = createProduct(hashCode('bedding'), 'bedding', 1, require("../resources/stickers/bedding.png"), 'bedding', 'other');
const clothes = createProduct(hashCode('clothes'), 'clothes', 1, require("../resources/stickers/clothes.png"), 'clothes', 'other');
const couple = createProduct(hashCode('couple'), 'couple', 2, require("../resources/stickers/couple.png"), 'couple', 'other');
const love = createProduct(hashCode('love'), 'love', 1.50, require("../resources/stickers/love.png"), 'love', 'other');
const shampoo = createProduct(hashCode('shampoo'), 'shampoo', 1.25, require("../resources/stickers/shampoo.png"), 'shampoo', 'other');
const shoe = createProduct(hashCode('shoe'), 'shoe', 1, require("../resources/stickers/shoe.png"), 'shoe', 'other');
const world = createProduct(hashCode('world'), 'world', 1.25, require("../resources/stickers/world.png"), 'world', 'other');

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
  babyfood,
  cheese,
  cherry,
  croissant,
  hotdog,
  nachos,
  noodles,
  onigiri,
  rice,
  shrimp,
  watermelon,

  bedding,
  clothes,
  couple,
  love,
  shampoo,
  shoe,
  pineapple,
  world,
};


export default Products;