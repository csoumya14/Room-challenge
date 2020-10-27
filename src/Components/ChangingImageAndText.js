import React, { useState } from 'react'
import styled from 'styled-components'
import leftArrow from '../images/icon-angle-left.svg'
import rightArrow from '../images/icon-angle-right.svg'
import arrow from '../images/icon-arrow.svg'
import SideBar from './SideNavigationBar'
import { useViewPort } from './customViewPort'

const Container = styled.div`
  display: flex;
  width: 100vw;

  @media only screen and (min-width: 768px) and (max-width: 1440px) {
    flex-direction: row;
    height: 59vh;
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    flex-direction: column;
    height: 100vh;
    .overlay {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: red;
      z-index: 2;
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 420px) {
    flex-direction: column;
    height: 110vh;
    .overlay {
      position: fixed;
      color: red;
      width: 100%;
      height: 100%;
      top: 16%;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 2;
      cursor: pointer;
    }
  }
`

const ImageSection = styled.div`
position: relative;
.arrows{
  position:absolute;
  
}
.arrows .left-button {
  width: 50%;
  height: 100%;
  outline: none;
  border: none;
  background-color: black;
  cursor:pointer;
  &:hover {
    background-color: hsl(0, 0%, 63%);
    transition: all 0.5s;   
  }
}
.arrows .right-button {
  width: 50%;
  height: 100%;
  outline: none;
  border: none;
  background-color: black;
  cursor:pointer;
  &:hover {
    background-color: hsl(0, 0%, 63%);
    transition: all 0.5s;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1440px) {
  height: 45vh;
  .arrows { 
      width: 18%;
      height: 20%;
      left: 60vw;
      top: 50vh;
      
    } 
    .images { 
      width:60vw;
      height: 59vh;
      object-fit:cover;  
    }  
}
@media only screen and (min-width: 421px) and (max-width: 767px) {
  height: 55vh;
    .arrows {
      width: 24%;
      height: 14.5%;
      left: 52.5vw;
      top: 47vh;
      
    }
    .images {
      height: 55vh;
      max-width: 100%;
      max-height: 100%;
      object-fit:cover;   
    }
  }
}

  @media only screen and (max-width: 420px) {
    height: 55vh; 
    .arrows {
      width: 30%;
      height: 14.5%;
      left: 70vw;
      top: 47vh;
      
    }
    .images {
      height: 55vh;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }
`
const TextSection = styled.div`
  width: 100vw;
  @media only screen and (min-width: 768px) and (max-width: 1440px) {
    .heading {
      font-size: 36px;
      margin-top: 20%;
      width: 12em;
      margin-left: 2.2em;
      font-weight: 600;
    }
    .paragraph {
      margin-left: 7em;
      line-height: 1.6;
      width: 35em;
      color: hsl(0, 0%, 63%);
    }
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    .heading {
      margin-top: 15%;
      width: 12em;
      margin-left: 1.5em;
      font-weight: 600;
    }
    .paragraph {
      margin-left: 3em;
      line-height: 1.6;
      width: 27em;
      color: hsl(0, 0%, 63%);
    }
  }
  @media only screen and (max-width: 420px) {
    .heading {
      margin-top: 20%;
      width: 12em;
      margin-left: 1.5em;
      font-weight: 600;
    }
    .paragraph {
      margin-left: 3em;
      line-height: 1.6;
      width: 27em;
      color: hsl(0, 0%, 63%);
    }
  }
`
const ArrowSection = styled.div`
  cursor: pointer;
  .spanText {
    letter-spacing: 1em;
    padding-right: 3em;
  }
  @media only screen and (min-width: 768px) and (max-width: 1440px) {
    color: hsl(0, 0%, 63%);
    margin-top: 5%;
    margin-left: 7em;
    .spanText {
      letter-spacing: 0.9em;
    }
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    margin-top: 10%;
    margin-left: 3em;
  }
  @media only screen and (max-width: 420px) {
    margin-top: 10%;
    margin-left: 3em;
  }
`

const ImageAndText = () => {
  const [slides] = useState([
    {
      id: '1',
      title: 'first',
      source1: require('../images/mobile-image-hero-1.jpg'),
      source2: require('../images/desktop-image-hero-1.jpg'),
      heading: 'Discover innovative ways to decorate',
      paragraph:
        'We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    },
    {
      id: '2',
      title: 'second',
      source1: require('../images/mobile-image-hero-2.jpg'),
      source2: require('../images/desktop-image-hero-2.jpg'),
      heading: 'We are available all across the globe',
      paragraph:
        "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
      id: '3',
      title: 'third',
      source1: require('../images/mobile-image-hero-3.jpg'),
      source2: require('../images/desktop-image-hero-3.jpg'),
      heading: 'Manufactured with the best materials',
      paragraph:
        'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
    },
  ])
  let [currentPosition, setCurrentPosition] = useState(0)
  let currentSlide = slides[currentPosition]
  const [isNavVisible, setIsNavVisible] = useState(false)

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible)
  }
  const [isSmallScreen] = useViewPort()

  const arrowRightClick = () => {
    currentPosition !== slides.length - 1
      ? setCurrentPosition(currentPosition + 1)
      : setCurrentPosition((currentPosition = 0))
    currentSlide = slides[currentPosition]
  }

  const arrowLeftClick = () => {
    currentPosition !== 0
      ? setCurrentPosition(currentPosition - 1)
      : setCurrentPosition((currentPosition = slides.length - 1))
    currentSlide = slides[currentPosition]
  }
  return (
    <Container>
      {isNavVisible && <div className="overlay"></div>}
      <ImageSection>
        <SideBar toggleNav={toggleNav} isNavVisible={isNavVisible} />
        {isSmallScreen ? (
          <img
            src={currentSlide.source1}
            alt={currentSlide.title}
            title={currentSlide.title}
            className="images"
          />
        ) : (
          <img
            src={currentSlide.source2}
            alt={currentSlide.title}
            title={currentSlide.title}
            className="images"
          />
        )}

        <div className="arrows">
          <button className="left-button">
            <img src={leftArrow} alt="left-arrow" onClick={arrowLeftClick} className="arrow-left" />
          </button>
          <button className="right-button">
            <img
              src={rightArrow}
              alt="right-arrow"
              onClick={arrowRightClick}
              className="arrow-right"
            />
          </button>
        </div>
      </ImageSection>
      <TextSection>
        <h1 className="heading">{currentSlide.heading}</h1>
        <p className="paragraph">{currentSlide.paragraph}</p>
        <ArrowSection>
          <span className="spanText">SHOP NOW</span>
          <img src={arrow} alt="next-arrow" className="next-arrow" />
        </ArrowSection>
      </TextSection>
    </Container>
  )
}

export default ImageAndText
