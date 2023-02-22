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

const bread = createProduct(hashCode('bread'), 'bread', 1.25, require("../resources/stickers/bread.png"), 'bread');
const love = createProduct(hashCode('love'), 'love', 1.50, require("../resources/stickers/love.png"), 'love');
const bedding = createProduct(hashCode('bedding'), 'bedding', 1, require("../resources/stickers/bedding.png"), 'bedding');
const grain = createProduct(hashCode('grain'), 'grain', 1, require("../resources/stickers/grain.png"), 'grain');
const shampoo = createProduct(hashCode('shampoo'), 'shampoo', 1, require("../resources/stickers/shampoo.png"), 'shampoo');
const surprised = createProduct(hashCode('surprised'), 'surprised', 2, require("../resources/stickers/surprised.png"), 'surprised');

const Products: Record<string, Product> = {
  bread,
  love,
  bedding,
  grain,
  shampoo,
  surprised
};

export default Products;