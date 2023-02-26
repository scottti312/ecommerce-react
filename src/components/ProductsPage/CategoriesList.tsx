import styled from "styled-components/macro";

interface Category {
  value: string;
  label: string;
}

export const categories: Category[] = [
  { value: 'food', label: 'Food' },
  { value: 'other', label: 'Other' },
];

interface CategoriesListProps {
  selected: string;
  handleSelect: (event: any) => void;
}

const CategoriesList = ({selected, handleSelect}: CategoriesListProps) => {
  return (
    <CategoriesContainer>
      <Form>
        {categories.map((category) => (
          <CategoryWrapper className="radio" key={category.value}>
            <label id={category.value} style={{display: "flex"}}>
              <input
                type="radio"
                id={category.value}
                value={category.value}
                checked={selected === category.value}
                onChange={handleSelect} />
              {category.label}
            </label>
          </CategoryWrapper>
        ))}
      </Form>
    </CategoriesContainer>
  )
};

const CategoriesContainer = styled.div`
  font-size: 1.5em;
  position: fixed;
  top: 40%;

`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const CategoryWrapper = styled.div`
`;

export default CategoriesList;