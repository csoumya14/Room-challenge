import React from 'react'
import styled from 'styled-components'
import hamburgerIcon from '../images/icon-hamburger.svg'
import closeIcon from '../images/icon-close.svg'
import { useViewPort } from './customViewPort'

const Container = styled.div`
  width: 100%;
  position: absolute;
  background-color: transparent;
  .hambIcon {
    margin-top: 4em;
    margin-left: 2em;
    display: none;
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    .hambIcon {
      display: block;
    }
  }
  @media only screen and (max-width: 420px) {
    .hambIcon {
      display: block;
    }
  }
`

const Header = styled.div`
  width: 100%;
  background-color: transparent;
  position: absolute;
`

const StyledLink = styled.a`
  display: inline-block;
  position: relative;
  padding: 1px;
  text-decoration: none;
  color: hsl(0, 0%, 0%);
  font-weight: 600;
  margin-top: 1em;
  padding-right: 2.5em;
  text-transform: lowercase;
  cursor: pointer;
  @media only screen and (min-width: 768px) and (max-width: 1440px) {
    color: hsl(0, 0%, 100%);
    margin-top: 0em;
  }
`

const Nav = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  padding: 4em;
  .crossIcon {
    margin-top: 1em;
    margin-left: -2em;
    padding-right:4em;
  }
  .headingNav{
    display:none
  }
  ${StyledLink}  {
     text-decoration: none;
     &:after {
       content: '';
       height: 3px;
       position: absolute;
       bottom: 0;
       top:2em;
       left: 1em;
       width: 0%;
       background: hsl(0, 0%, 100%);
       transition: 0.2s;
     }
     &:hover:after {
       width: 1.5em;
     }
   }
  @media only screen and (min-width: 768px) and (max-width: 1440px) {
    color: hsl(0, 0%, 100%);
    .crossIcon{
      display: none;
    }
    .headingNav{
      display:block;
      color:hsl(0, 0%, 100%);
      padding-right:3em;
    }  
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    margin-top: -5rem;
    background-color: hsl(0, 0%, 100%);
    .headingNav{
      display:none
    }
    ${StyledLink}  { 
      &:after { 
        background:hsl(0, 0%, 27%); 
      } 
    }
  }
  @media only screen and (max-width: 420px) {
    margin-top: -5rem;
    background-color: hsl(0, 0%, 100%);
    .headingNav{
      display:none
    }
    ${StyledLink}  {
      &:after { 
        background:hsl(0, 0%, 27%)  ; 
      } 
    }
`

const SideBar = ({ toggleNav, isNavVisible }) => {
  const [isSmallScreen] = useViewPort()

  return (
    <Container>
      <img className="hambIcon" src={hamburgerIcon} onClick={toggleNav} alt="hamburger-menu" />
      {(!isSmallScreen || isNavVisible) && (
        <Header>
          <Nav>
            <img className="crossIcon" src={closeIcon} onClick={toggleNav} alt="hamburger-menu" />
            <h2 className="headingNav">room</h2>
            <StyledLink href="#">Home</StyledLink>
            <StyledLink href="#">shop</StyledLink>
            <StyledLink href="#">about</StyledLink>
            <StyledLink href="#">Contact</StyledLink>
          </Nav>
        </Header>
      )}
    </Container>
  )
}

export default SideBar
