import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components/macro';
import { COLORS } from '../../colors';
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from 'firebase/auth';

import {
  doc,
  getDoc,
  DocumentReference,
} from 'firebase/firestore';

import { auth, firestore } from '../../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../cartSlice';
import { useSelector } from 'react-redux';
import { loadCart, ProductInCart } from '../../cartSlice';
import useWindowSize from '../useWindowSize';
import "./navstyles.css";
import { RootState } from '../../store';

const mobileWidth = 760;

interface NavbarProps {
  itemAmount: number;
  handleCartClick: () => void;
}

interface MenuProps {
  isOpen: boolean;
}

const Navbar = ({ itemAmount, handleCartClick }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [hasItems, setHasItems] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const size = useWindowSize();
  const cart = useSelector((state: RootState) => state.cart.cart);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 || document.body.scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (itemAmount > 0) {
      setHasItems(true);
    } else if (itemAmount === 0) {
      setHasItems(false);
    }
  }, [itemAmount]);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setSignedIn(true);
      } else {
        setSignedIn(false);
      }
    });
  }, []);

  useEffect(() => {
  });

  async function handleSignIn() {
    var provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);

    // getAndLoadCart();
    getLoadCombineCarts();
    setSignedIn(true);
  };

  async function getLoadCombineCarts() {
    const userName = auth.currentUser?.displayName;
    let docRef: DocumentReference | undefined;
    // get
    if (userName)
      docRef = doc(firestore, 'users', userName);
    if (docRef) {
      // load
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // combine
        const loadedCart: ProductInCart[] = docSnap.data().cart;
        for (let j = 0; j < cart.length; j++) {
          for (let i = 0; i < loadedCart.length; i++) {
            if (cart[j].product.title === loadedCart[i].product.title) {
              for (let k = 0; k < loadedCart[i].quantity; k++) {
                dispatch(addToCart(loadedCart[i].product));
              }
              loadedCart.splice(i, 1);
            }
          }
        }
        const newCart = (cart.concat(loadedCart));
        dispatch(loadCart(newCart));
      } else {
        console.log('No such document');
      }
    }
  }

  async function handleSignOut() {
    await signOut(auth);
    setSignedIn(false);
    dispatch(loadCart([]))
  };

  function isUserSignedIn() {
    return auth.currentUser;
  }

  function handleMenuClose() {
    setMobileMenuOpen(false);
  }

  const navbarClass = scrolled ? 'scrolled' : '';

  return (
    <NavWrapper className={navbarClass}>
      <Nav>
        <Link to="/" className="title" style={{ ...LinkStyle }}>Sticker Avenue</Link>
        <RightNav>
          {size.width > mobileWidth &&
            <>
              <Link to="/about" style={LinkStyle}>About</Link>
              <Link to="/products" style={LinkStyle}>Products</Link>
              <CartButtonWrapper onClick={handleCartClick}>
                <CartButton>Cart</CartButton>
                <ItemsIndicatorWrapper className={hasItems ? 'active' : 'inactive'}>
                  <ItemsIndicator>{itemAmount}</ItemsIndicator>
                </ItemsIndicatorWrapper>
              </CartButtonWrapper>
              {isUserSignedIn() &&
                <UserSection>
                  <GreetUser>Hi, {auth.currentUser?.displayName?.split(' ')[0]}!</GreetUser>
                  <SignOutButton onClick={handleSignOut}>Sign out</SignOutButton>
                </UserSection>
              }
              {!isUserSignedIn() &&
                <SignInButton onClick={handleSignIn}>Sign In</SignInButton>
              }
            </>
          }
          <MobileCartButtonWrapper onClick={handleCartClick}>
            <ItemsIndicatorWrapper className={hasItems ? 'active' : 'inactive'}>
              <ItemsIndicator>{itemAmount}</ItemsIndicator>
            </ItemsIndicatorWrapper>
          </MobileCartButtonWrapper>
          <MobileMenuIconWrapper onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <i className="fa-solid fa-bars"></i>
            <MobileMenuIcon />
          </MobileMenuIconWrapper>
          {mobileMenuOpen && (
            <>
              <MobileMenu isOpen={mobileMenuOpen}>
                <TopBar>
                  <CloseButton onClick={handleMenuClose}>
                    <i className="fa-solid fa-xmark fa-2xl"></i>
                  </CloseButton>
                </TopBar>
                <Link to="/about" style={LinkStyle} onClick={handleMenuClose}>About</Link>
                <Link to="/products" style={LinkStyle} onClick={handleMenuClose}>Products</Link>
                <CartButtonWrapper onClick={handleCartClick}>
                  <CartButton>Cart</CartButton>
                  <ItemsIndicatorWrapper className={hasItems ? 'active' : 'inactive'}>
                    <ItemsIndicator>{itemAmount}</ItemsIndicator>
                  </ItemsIndicatorWrapper>
                </CartButtonWrapper>
                {isUserSignedIn() &&
                  <UserSection>
                    <GreetUser>Hi, {auth.currentUser?.displayName?.split(' ')[0]}!</GreetUser>
                    <SignOutButton onClick={handleSignOut}>Sign out</SignOutButton>
                  </UserSection>
                }
                {!isUserSignedIn() &&
                  <SignInButton onClick={handleSignIn}>Sign In</SignInButton>
                }
              </MobileMenu>
              <MenuBackground isOpen={mobileMenuOpen} onClick={handleMenuClose}></MenuBackground>
            </>
          )}
        </RightNav>


      </Nav>

    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  width: 100%;
  background-color: ${COLORS.welcome_bg};
  position: fixed;
  top: 0;
  z-index: 7;
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: center;

  &.scrolled {
    background-color: ${COLORS.secondary_bg};
    border-bottom: 1px solid black;
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.25);
  }
`;

const Nav = styled.div`
  width: 100%;
  max-width: 1500px;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  text-decoration: none;
  padding: 0 30px 0 30px;
`;

const RightNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4em;
  gap: 20px;
`;

const LinkStyle = {
  color: "black",
  textDecoration: "none",
}

const CartButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
`;

const ItemsIndicatorWrapper = styled.div`
  transition: all 0.1s ease;
  transform: scale(0);
  transform-origin: center center;
  &.active {
    transform: scale(1);
  }
`;

const ItemsIndicator = styled.div`
  background-color: red;
  color: white;
  width: 25px;
  height: 25px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  @media screen and (max-width: ${mobileWidth}px) {
    width: 35px;
    height: 35px;
  }
`;

const CartButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const UserSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const GreetUser = styled.div`
  font-size: 1em;
`;

const SignInButton = styled.div`
  cursor: pointer;
`;

const MobileCartButtonWrapper = styled.div`
  display: none;
  @media screen and (max-width: ${mobileWidth}px) {
    display: block;
    cursor: pointer;
  }
`;

const MobileMenuIconWrapper = styled.div`
    display: none;
  @media screen and (max-width: ${mobileWidth}px) {
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
  }
`;

const MobileMenuIcon = styled.div`
  
`;

const slideIn = keyframes`
  from {
    transform: translateY(-140%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

const MobileMenu = styled.div<MenuProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  position: absolute;
  width: 100%;
  top: 65px;
  left: 0;
  padding: 20px 0 20px 0;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  background-color: ${COLORS.hover_bg};
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.25);
  animation: ${({ isOpen }) => isOpen ? slideIn : slideOut} 0.3s ease-out;
  z-index: 7;

  ${CartButtonWrapper} {
    transform: translateX(11px);
    width: 500px;
  }

  ${ItemsIndicator} {
    width: 35px;
    height: 35px;
    font-size: 0.8em;
  }

`;

const TopBar = styled.div`
  
`;

const CloseButton = styled.div`
  position: absolute;
  left: 30px;
  z-index: 5;
  cursor: pointer;
`;

const opacityFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const opacityFadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
const MenuBackground = styled.div<MenuProps>`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  background-color: rgba(0,0,0,0.3);
  z-index: 5;
  animation: ${({ isOpen }) => isOpen ? opacityFadeIn : opacityFadeOut} 0.5s ease;
`;

const SignOutButton = styled.div`
  font-size: 0.8em;
  cursor: pointer;
`;

export default Navbar;