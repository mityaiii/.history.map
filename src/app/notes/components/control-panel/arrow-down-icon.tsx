import React from 'react'

export const ArrowDownIcon = () => {
  return (
    <svg width='22' height='15' viewBox='0 0 22 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g filter='url(#filter0_d_184_502)'>
        <path d='M20 3L18 1L11 8.31153L4 1L2 3L9.16327 10.1558L11 12L12.8129 10.1558L20 3Z' fill='white'/>
      </g>
      <defs>
        <filter
          id='filter0_d_184_502'
          x='0'
          y='0'
          width='22'
          height='15'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix'/>
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'/>
          <feOffset dy='1'/>
          <feGaussianBlur stdDeviation='1'/>
          <feComposite in2='hardAlpha' operator='out'/>
          <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0'/>
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_184_502'/>
          <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_184_502' result='shape'/>
        </filter>
      </defs>
    </svg>
  )
}