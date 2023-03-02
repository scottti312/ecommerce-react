import styled from "styled-components/macro";

const Footer = () => {
  return (
    <FooterContainer className='hidden'>
      Created by Scott Ti
      <i className="fa-brands fa-github fa-xl" style={{ paddingLeft: "15px" }}>
      </i>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Footer;