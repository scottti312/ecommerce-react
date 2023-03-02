import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components/macro';
import { COLORS } from '../colors';
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from 'firebase/auth';

import {
  collection,
  setDoc,
  doc,
  getDoc,
  DocumentReference,
} from 'firebase/firestore';

import { auth, firestore } from '../firebase/firebase-config';

import { useDispatch } from 'react-redux';

import { loadCart } from '../cartSlice';
import { useSelector } from "react-redux";
import { RootState } from '../store';

import useWindowSize from './useWindowSize';

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

  console.log(mobileMenuOpen);

  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);
  const size = useWindowSize();

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


  async function handleSignIn() {
    var provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    // if (cartExists) {
    //   loadCart
    // } else {
    const docRef = doc(firestore, "users", "Scott Ti");
    const docSnap = await getDoc(docRef);
    setSignedIn(true);
  };

  async function getCart() {
    const userName = auth.currentUser?.displayName;
    let docRef: DocumentReference | undefined;
    if (userName)
      docRef = doc(firestore, 'users', userName);
    if (docRef) {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log(docSnap.data().cart);
        const loadedCart = docSnap.data().cart;
        dispatch(loadCart(loadedCart))
        console.log(cart);

      } else {
        console.log('No such document');
      }
    }

  };

  async function sendCart() {
    const usersRef = collection(firestore, 'users');
    const userName = auth.currentUser?.displayName;
    if (userName) {
      await setDoc(doc(usersRef, userName), {
        name: userName,
        cart: cart,
      });
    }
  };

  async function handleSignOut() {
    await signOut(auth);
    setSignedIn(false);
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
        <Link to="/" style={{ ...LinkStyle, ...Title }}>Sticker Avenue</Link>
        <RightNav>
          {size.width > 990 &&
            <>
              <button onClick={sendCart}>Save Cart</button>
              <button onClick={getCart}>Load Cart</button>
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
          {/* hamburger menu icon */}
          <MobileMenuIconWrapper onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <i className="fa-solid fa-bars"></i>
            <MobileMenuIcon />
          </MobileMenuIconWrapper>
          {/* mobile menu */}
          {mobileMenuOpen && (
            <>
              <MobileMenu isOpen={mobileMenuOpen}>
                <TopBar>
                  <CloseButton onClick={handleMenuClose}>
                    <i className="fa-solid fa-xmark fa-2xl"></i>
                  </CloseButton>
                  <button onClick={sendCart}>Save Cart</button>
                </TopBar>
                <button onClick={getCart}>Load Cart</button>
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
  width: 1500px;
  max-height: 65px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  text-decoration: none;
  padding: 0 30px 0 30px;
`;

const Title = {
  fontSize: '3em',
};

const RightNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const LinkStyle = {
  color: "black",
  textDecoration: "none",
  fontSize: '1.4em',
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
  width: 22px;
  height: 22px;
  border-radius: 20px;
`;

const CartButton = styled.div`
  font-size: 1.4em;
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
  font-size: 1.4em;
  cursor: pointer;
`;

const MobileMenuIconWrapper = styled.div`
    display: none;
  @media screen and (max-width: 990px) {
    display: block;
    cursor: pointer;
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
  font-size: 1em;
  cursor: pointer;
`;

export default Navbar;