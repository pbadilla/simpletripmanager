import React from 'react'
import { Loading, LoaderDots } from './styles';

const LoadingComponent = () => {
  return (
    <Loading>
      <LoaderDots>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </LoaderDots>
    </Loading>
  )
}

export default LoadingComponent;