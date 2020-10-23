import React from 'react'
import styled from 'styled-components'
import darkImage from '../images/image-about-dark.jpg'
import lightImage from '../images/image-about-light.jpg'

const Container = styled.div`
  @media only screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 110vh;
    .dark-image {
      margin-top: 5%;
      height: 35vh;
      object-fit: cover;
    }
    .light-image {
      margin-top: 10%;
    }
  }
`
const TextSection = styled.div`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    .heading {
      margin-top: 15%;
      letter-spacing: 0.4em;
      margin-left: 3em;
      font-weight: 700;
      text-transform: uppercase;
    }
    .paragraph {
      margin-left: 3em;
      line-height: 1.6;
      width: 27em;
      color: hsl(0, 0%, 63%);
    }
  }
`

const FixedImageAndText = () => {
  return (
    <Container>
      <img src={darkImage} alt="furniture dark" className="dark-image" />
      <TextSection>
        <h4 className="heading">About our Furniture</h4>
        <p className="paragraph">
          Our multifunctional collection blends design and function to suit your individual taste.
          Make each room unique, or pick a cohesive theme that best express your interests and what
          inspires you. Find the furniture pieces you need, from traditional to contemporary styles
          or anything in between. Product specialists are available to help you create your dream
          space.
        </p>
      </TextSection>
      <img src={lightImage} alt="furniture-light" className="light-image" />
    </Container>
  )
}

export default FixedImageAndText
