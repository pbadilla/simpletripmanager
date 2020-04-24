import React, { Fragment } from 'react'
import { Loading, BannerLoading, LoaderDots } from './styles';

const LoadingBanner = () => {
  return (
    <Fragment>
      <Loading>
        <BannerLoading>
          <div>Sometimes you have to wait ... to enjoy great things</div>
        </BannerLoading>
        <LoaderDots>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </LoaderDots>
      </Loading>
    </Fragment>
  )
}

export default LoadingBanner;