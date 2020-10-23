import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import hamburgerIcon from '../images/icon-hamburger.svg'
import closeIcon from '../images/icon-close.svg'

const Container = styled.div`
  width: 100%;
  position: absolute;
  background-color: transparent;
  .hambIcon {
    margin-top: 4em;
    margin-left: 2em;
    display: none;
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
  @media only screen and (min-width: 1024px) and (max-width: 1365px) {
    border-bottom: 1px solid #1a1a1d;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    border-bottom: 1px solid #1a1a1d;
  }
`

const StyledLink = styled.a`
  display: inline-block;
  padding: 1px;
  text-decoration: none;
  color: hsl(0, 0%, 0%);
  font-weight: 600;
  margin-top: 1em;
  padding-right: 2.5em;
  text-transform: lowercase;

  cursor: pointer;
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 420px) {
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
  @media only screen and (min-width: 1024px) and (max-width: 1365px) {
    margin-left: 76px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    margin-left: 26px;
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    margin-left: 6px;
  }
  @media only screen and (max-width: 420px) {
    margin-top: -5rem;

    background-color: hsl(0, 0%, 100%);
    

  ${StyledLink} {
    position: relative;
    
    z-index: 1;
    &:hover {
      color: #fff;
      transition: all 0.5s;
    }
    &:after {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;

      height: 1px;
      content: '.';
      color: transparent;
      background: #e3afbc;
      visibility: none;
      opacity: 0;
      z-index: -1;
      transition: all 0.5s;
    }
    &:before {
      transition: all 0.5s;
    }
    &:hover::after {
      opacity: 1;
      visibility: visible;
      height: 100%;
    }
  }
`

const SideBar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [isNavVisible, setIsNavVisible] = useState(false)

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible)
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:420px)')
    mediaQuery.addListener(handleMediaQueryChange)
    handleMediaQueryChange(mediaQuery)

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange)
    }
  }, [])

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true)
    } else {
      setIsSmallScreen(false)
    }
  }
  return (
    <Container>
      <img className="hambIcon" src={hamburgerIcon} onClick={toggleNav} alt="hamburger-menu" />

      {(!isSmallScreen || isNavVisible) && (
        <Header>
          <Nav>
            <img className="crossIcon" src={closeIcon} onClick={toggleNav} alt="hamburger-menu" />
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
