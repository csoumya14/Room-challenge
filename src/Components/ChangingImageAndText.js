import React, { useState } from 'react'
import styled from 'styled-components'
import leftArrow from '../images/icon-angle-left.svg'
import rightArrow from '../images/icon-angle-right.svg'
import arrow from '../images/icon-arrow.svg'
import SideBar from './SideNavigationBar'

const Container = styled.div`
  @media only screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 110vh;
  }
`

const ImageSection = styled.div`
  @media only screen and (max-width: 420px) {
    height: 55vh;
    position: relative;
    .arrows {
      position: absolute;
      width: 30%;
      height: 14.5%;
      left: 70vw;
      top: 47vh;
    }
    .arrows .left-button {
      width: 50%;
      height: 100%;
      outline: none;
      border: none;
      background-color: black;
    }
    .arrows .right-button {
      width: 50%;
      height: 100%;
      outline: none;
      border: none;
      background-color: black;
    }
    .arrow-left {
    }
    .images {
      max-width: 100%;
      max-height: 100%;
      height: 55vh;
      right: 0;
      object-fit: cover;
    }
  }
`
const TextSection = styled.div`
  @media only screen and (max-width: 420px) {
    width: 100vw;
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
  margin-top: 10%;
  margin-left: 3em;
  .spanText {
    letter-spacing: 1em;
    padding-right: 3em;
  }
`

const ImageAndText = () => {
  const [slides] = useState([
    {
      id: '1',
      title: 'first',
      source: require('../images/mobile-image-hero-1.jpg'),
      heading: 'Discover innovative ways to decorate',
      paragraph:
        'We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    },
    {
      id: '2',
      title: 'second',
      source: require('../images/mobile-image-hero-2.jpg'),
      heading: 'We are available all across the globe',
      paragraph:
        "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
      id: '3',
      title: 'third',
      source: require('../images/mobile-image-hero-3.jpg'),
      heading: 'Manufactured with the best materials',
      paragraph:
        'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
    },
  ])
  let [currentPosition, setCurrentPosition] = useState(0)
  let currentSlide = slides[currentPosition]

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
      <ImageSection>
        <SideBar />
        <img
          src={currentSlide.source}
          alt={currentSlide.title}
          title={currentSlide.title}
          className="images"
        />
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
      </TextSection>
      <ArrowSection>
        <span className="spanText">SHOP NOW</span>
        <img src={arrow} alt="next-arrow" className="next-arrow" />
      </ArrowSection>
    </Container>
  )
}

export default ImageAndText
