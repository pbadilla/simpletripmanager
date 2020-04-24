import styled from 'styled-components';

export const Loading = styled.div`
  background-color: white;
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 100;
`;

export const BannerLoading = styled.div`
  background-color: #049;
  color: white;
  display: flex;
  align-self: center;
  justify-self: center;
  font-size: 1.9rem;
  margin: 35vh 0 0;
  padding: 1.5em 0 1em;
  div {
    margin: 0 auto;
    text-align: center;
  }
  
`;

export const LoaderDots = styled.div`
  display: flex;
  position: relative;
  width: 64px;
  align-items: center;
  text-align: center;
  margin: 0 auto;

  div {
    position: absolute;
    top: 27px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #049;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);

    &:nth-child(1) {
      left: 6px;
      animation: loaderDots1 0.6s infinite;
    }

    &:nth-child(2) {
      left: 6px;
      animation: loaderDots2 0.6s infinite;
    }

    &:nth-child(3) {
      left: 26px;
      animation: loaderDots2 0.6s infinite;
    }

    &:nth-child(4) {
      left: 45px;
      animation: loaderDots3 0.6s infinite;
    }
  }
`;

