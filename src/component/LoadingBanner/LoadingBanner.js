import React, { Fragment } from 'react'
import { GreatThings, BeautifulQuestions, SignalNoise, Thursday, ReadySetGo, SunnyMorning } from 'moving-letters'

const LoadingBanner = () => {
  return (
    <Fragment>
      <SunnyMorning text='Sunny Morning' />
      <GreatThings text='Great Things' />
      <BeautifulQuestions text="Beautiful Questions" />
      <SignalNoise text='Signal Noise'/>
      <Thursday text='Thursday'/>
      <ReadySetGo text='Ready Set Go'/>
    </Fragment>
  )
}

export default LoadingBanner;