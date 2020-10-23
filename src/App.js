import React from 'react'
import ImageAndText from './Components/ChangingImageAndText'
import GlobalStyle from './Themes/globalStyles'
import FixedImageAndText from './Components/FixedImageAndText'

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ImageAndText />
      <FixedImageAndText />
    </div>
  )
}

export default App
