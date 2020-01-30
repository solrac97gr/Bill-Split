import { css, keyframes } from 'styled-components'

const FadeInKeyFramse = keyframes`
  from{
    filter: blur(5px);
    opacity:0;
  }
  to {
    filter: blur(0px);
    opacity:1;
  }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => css`
  animation: ${time} ${FadeInKeyFramse} ${type};
`
const scaleDown = keyframes`
    from {
      transform:scale(1);
    }
    to {
      transform:scale(0.5);
    }
`

export const scale = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${scaleDown} ${type};
  `
const placeHolderShimmer = keyframes`
    0%{
        background-position: -490px 0
    }
    100%{
        background-position: 490px 0
    }
`


export const skeletonAnimation = ({
  time = '2s',
  fill = 'forwards',
  iteration = 'infinite',
  timingFunction = 'linear',
  colorBackground = '#edeef1',
  colorAnimation =  '#f6f7f8'
} = {}) =>
  css`
    animation-duration: ${time};
    animation-fill-mode: ${fill};
    animation-iteration-count: ${iteration};
    animation-name: ${placeHolderShimmer};
    animation-timing-function: ${timingFunction};
    background-image: -webkit-gradient(
      linear,
      left center,
      right center,
      from(${colorBackground}),
      color-stop(0.2, ${colorAnimation}),
      color-stop(0.4, ${colorAnimation}),
      to(${colorBackground})
    );
    background-image: -webkit-linear-gradient(
      left,
      ${colorBackground} 0%,
      ${colorAnimation} 20%,
      ${colorBackground} 40%,
      ${colorBackground} 100%
    );
    position: relative;
  `
