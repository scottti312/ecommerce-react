import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components/macro";
import { addToCart } from "../cartSlice";
import { COLORS } from "../colors";

import { Product } from "../util/Products";

interface ProductDisplayProps {
  product: Product;
  page: string;
}

const ProductDisplay = ({ product, page }: ProductDisplayProps) => {
  // const itemAmount = useSelector((state: RootState) => state.cart.itemAmount);
  // const cart = useSelector((state: RootState) => state.cart.cart);

  const { title, price, src, alt } = product;
  const dispatch = useDispatch();

  const handleCartClick = (event: any) => {
    event.preventDefault();
    dispatch(addToCart(product));
  };

  return (
    <Link to={`/products/${title}`} style={LinkStyle} state={{ product: product }}>
      <ProductContainer product={product} page={page}>
        <ProductWrapper product={product} page={page}>
          <ProductImage src={src} alt={alt} />
        </ProductWrapper>
        <ProductBottom product={product} page={page}>
          <ProductInfo product={product} page={page}>
            <ProductTitle>{title}</ProductTitle>
            <ProductPrice>${price}</ProductPrice>
          </ProductInfo>
          <CartContainer onClick={handleCartClick}>
            <CartWrapper product={product} page={page}>
              <AddToCart>
                <i className="fa-solid fa-cart-shopping fa-lg"></i>
              </AddToCart>
            </CartWrapper>
          </CartContainer>
        </ProductBottom>
      </ProductContainer>
    </Link>
  );
};


const LinkStyle = {
  textDecoration: "none",
  color: "inherit",
  width: "100%",
};

const ProductContainer = styled.div<ProductDisplayProps>`
  width: 220px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 505px) {
    width: ${props => props.page === "products" ? "100%" : "220px"};
    flex-direction: ${props => props.page === "products" ? "row" : "column"};
  }
`;

const rotateOnY = keyframes`
  to {
    transform: rotateY(360deg);
  }
`;

const ProductImage = styled.img`
  height: 100%;
  width: 100%;
  min-width: 100px;
  min-height: 100px;
`;

const ProductWrapper = styled.div<ProductDisplayProps>`
  display: flex;
  height: 120px;
  width: 120px;
  background-color: ${COLORS.product_bg};
  padding: 50px;
  border-radius: 20px;
  transition: all 0.3s ease;
  perspective: 240px;
  &:hover {
    background-color: ${COLORS.hover_bg};
    transform: scale(1.1);
  }
  &:hover ${ProductImage} {

    animation: ${rotateOnY} 4s infinite linear;
  }
  @media screen and (max-width: 505px) {
    width: ${props => props.page === "products" ? "100px": "120px"};
    height: ${props => props.page === "products" ? "100px": "120px"};
  }
`;

const ProductBottom = styled.div<ProductDisplayProps>`
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 20px;
  align-items: center;
  width: 180px;
  @media screen and (max-width: 505px) {
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    width: ${props => props.page === "products" ? "150px": "180px"};
  }
`;

const ProductInfo = styled.div<ProductDisplayProps>`
    text-align: ${props => props.page === "products" ? "center": "start"};
`;

const CartContainer = styled.div`
  display: flex;
  z-index: 3;
`;

const CartWrapper = styled.div<ProductDisplayProps>`
  padding: 10px;
  border-radius: 12px;
  background-color: ${COLORS.addcart_bg};
  display: flex;
  transition: all 0.2s ease;
  z-index: 4;
  &:hover {
    background-color: ${COLORS.hover_bg};
    transform: scale(1.2);
  }

  &:hover:active {
    transform: scale(0.8);
  }
  @media screen and (max-width: 505px) {
    padding: ${props => props.page === "products" ? "13px": "10px"};
  }
`;

const AddToCart = styled.div`
`;
const ProductTitle = styled.div`
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 1.5em;
`;

const ProductPrice = styled.div`
  font-size: 1em;
`;

export default ProductDisplay;