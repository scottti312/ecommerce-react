import { useEffect } from "react";
import styled from "styled-components/macro";
import "./footerstyle.css";

const Footer = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    })
  });

  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  });

  return (
    <FooterContainer>
      <Me className='hidden' href="https://github.com/scottti312/sticker-avenue">
        Created by Scott Ti
        <Github className="fa-brands fa-github fa-xl" style={{ paddingLeft: "15px" }}></Github>
      </Me>
      <CreditContainer>
        <Credit href="https://www.flaticon.com/free-icons/volunteering" title="Icons Credit - THANK YOU!!">
          Sticker icons created by Freepik - Flaticon
        </Credit>
      </CreditContainer>
    </FooterContainer>
  );
}
const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: black;
  text-align: center;
  height: 100px;
  padding-top: 10px;
  gap: 10px;
`;

const Me = styled.a`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;



const Github = styled.a`
  text-decoration: none;
  margin-bottom: 5px;
`;



const CreditContainer = styled.div`
  text-align: center;
`;


const Credit = styled.a`
  margin: 0;
  color: inherit;
  font-size: 0.8em;
  color: white;
  &:link {
    text-decoration: none;
  }
`;

export default Footer;