import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { COLORS } from '../colors';
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from 'firebase/auth';

import {
  getFirestore,
  collection,
  setDoc,
  doc,
  getDoc,
  DocumentReference,
} from 'firebase/firestore';

import { useDispatch } from 'react-redux';

import { loadCart } from '../cartSlice';
import { useSelector } from "react-redux";
import { RootState } from '../store';

interface NavbarProps {
  itemAmount: number;
  handleCartClick: () => void;
}

const Navbar = ({ itemAmount, handleCartClick }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [hasItems, setHasItems] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  const dispatch = useDispatch();
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
    const auth = getAuth();
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
    await signInWithPopup(getAuth(), provider);
    // if (cartExists) {
    //   loadCart
    // } else {
    const docRef = doc(getFirestore(), "users", "Scott Ti");
    const docSnap = await getDoc(docRef);
    setSignedIn(true);
  };

  async function getCart() {
    const userName = getAuth().currentUser?.displayName;
    let docRef: DocumentReference | undefined;
    if (userName)
      docRef = doc(getFirestore(), 'users', userName);
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
    const usersRef = collection(getFirestore(), 'users');
    const userName = getAuth().currentUser?.displayName;
    if (userName) {
      await setDoc(doc(usersRef, userName), {
        name: userName,
        cart: cart,
      });
    }
  };

  async function handleSignOut() {
    await signOut(getAuth());
    setSignedIn(false);
  };

  function isUserSignedIn() {
    return !!getAuth().currentUser;
  }

  const navbarClass = scrolled ? 'scrolled' : '';

  return (
    <NavWrapper className={navbarClass}>
      <Nav>
        <Link to="/" style={{ ...LinkStyle, ...Title }}>Sticker Avenue</Link>
        <RightNav>
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
              <GreetUser>Hi, {getAuth().currentUser?.displayName?.split(' ')[0]}!</GreetUser>
              <SignOutButton onClick={handleSignOut}>Sign out</SignOutButton>
            </UserSection>
          }
          {!isUserSignedIn() &&
            <SignInButton onClick={handleSignIn}>Sign In</SignInButton>
          }
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

  &.scrolled {
    background-color: ${COLORS.secondary_bg};
    border-bottom: 1px solid black;
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.25);
  }
`;

const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  text-decoration: none,
`;

const Title = {
  fontSize: '3em',
};

const RightNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5vw;
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
  gap: 10px;
  cursor: pointer;
`;

const ItemsIndicatorWrapper = styled.div`
  transition: all 0.1s ease;
  transform: scale(0);
  transform-origin: center center;
/* 
  &.inactive {
    display: none;
  } */
  &.active {
    transform: scale(1);
  }
`;

const ItemsIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  color: white;
  width: 25px;
  height: 25px;
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

const SignOutButton = styled.div`
  font-size: 1em;
  cursor: pointer;
`;

export default Navbar;