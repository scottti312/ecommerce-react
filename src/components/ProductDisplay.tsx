import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { addToCart } from "../cartSlice";
import { COLORS } from "../colors";
import { Product } from "../util/Products";

interface FeaturedProductProps {
  product: Product;
}

const ProductDisplay = ({ product }: FeaturedProductProps) => {
  const { id, title, price, src, alt } = product;
  const dispatch = useDispatch();
  const handleCartClick = (event: any) => {
    event.preventDefault();
    dispatch(addToCart(product));
  };

  return (
    <Link to={`/products/${title}`} style={LinkStyle} state={{ product: product }}>
      <ProductContainer>
        <ProductWrapper>
          <ProductImage src={src} alt={alt} />
        </ProductWrapper>
        <ProductBottom>
          <ProductInfo>
            <ProductTitle>{title}</ProductTitle>
            <ProductPrice>${price}</ProductPrice>
          </ProductInfo>
          <CartContainer onClick={handleCartClick}>
            <CartWrapper>
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
};

const ProductContainer = styled.div`
  width: 220px;
  display: flex;
  flex-direction: column;
`;

const ProductWrapper = styled.div`
  display: flex;
  height: 120px;
  width: 120px;
  background-color: ${COLORS.product_bg};
  padding: 50px;
  border-radius: 20px;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${COLORS.hover_bg};
    transform: scale(1.1);
  }
`;

const ProductBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 20px;
  align-items: center;
`;

const ProductInfo = styled.div`
`;

const CartContainer = styled.div`
  display: flex;
  z-index: 3;
`;

const CartWrapper = styled.div`
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

`;

const AddToCart = styled.div`
`;

const ProductImage = styled.img`
  /* height: 120px;
  width: 120px; */
  height: 100%;
  width: 100%;
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