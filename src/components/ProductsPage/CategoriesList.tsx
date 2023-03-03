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
            <CategoryButton id={category.value}>
              <input
                type="radio"
                id={category.value}
                value={category.value}
                checked={selected === category.value}
                onChange={handleSelect}
                style={{display: "none"}} />
              {category.label}
            </CategoryButton>
          </CategoryWrapper>
        ))}
      </Form>
    </CategoriesContainer>
  )
};

const CategoriesContainer = styled.div`
  font-size: 1.5em;
  position: fixed;
  @media screen and (min-width: 870px) {
    top: 40%;
  }
`;

const CategoryButton = styled.label`
  display: flex;
  cursor: pointer;
  border: 1px solid black;
  padding: 8px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  background-color: white;
  color: black;
  user-select: none;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 870px) {
    flex-direction: row;
    gap: 40px;
  }
`

const CategoryWrapper = styled.div`
`;

export default CategoriesList;