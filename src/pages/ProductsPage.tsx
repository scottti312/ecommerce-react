import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { COLORS } from '../colors';

interface Category {
  value: string;
  label: string;
}

const categories: Category[] = [
  { value: 'food', label: 'Food' },
  { value: 'others', label: 'Others' },
];


const ProductsPage = () => {
  const [selected, setSelected] = useState('food');

  const handleSelect = (event: any) => {
    setSelected(event.target.value);
  }

  return (
    <ProductsWrapper>
      <CategoriesContainer>
        <CategoriesList>
          <form>
            {categories.map((category) => (
              <div className="radio" key={category.value}>
                <label>
                  <input
                    type="radio"
                    value={category.value}
                    checked={selected === category.value}
                    onChange={handleSelect} />
                    {category.label}
                </label>
              </div>
            ))}
          </form>
        </CategoriesList>
      </CategoriesContainer>
      <ProductsView>

      </ProductsView>
    </ProductsWrapper>
  )
}

const ProductsWrapper = styled.div`
              display: grid;
              grid-template-columns: 20% 80%;
              height: 100vh;
              width: 100vw;
              `;

const CategoriesContainer = styled.div`
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              background-color: ${COLORS.hover_bg};
              height: 100vh;
              `;

const CategoriesList = styled.div`

              `;

const ProductsView = styled.div`
              display: grid;

              `;

const Radios = styled.div`
  & .radio {
    color: red;
    font-size: 30px;
  }
`

export default ProductsPage;