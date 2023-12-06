import React from 'react'

export const FilterIcon = () => {
  return (
    <svg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g filter='url(#filter0_d_184_406)'>
        <path d='M2.42709 2.84359C4.53125 5.5415 8.41667 10.5415 8.41667 10.5415V16.7915C8.41667
          17.3644 8.88542 17.8332 9.45834 17.8332H11.5417C12.1146 17.8332 12.5833 17.3644 12.5833
          16.7915V10.5415C12.5833 10.5415 16.4583 5.5415 18.5625 2.84359C19.0938 2.15609 18.6042
          1.1665 17.7396 1.1665H3.25C2.38542 1.1665 1.89584 2.15609 2.42709 2.84359Z'
        fill='white'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_184_406' 
          x='0.206665' 
          y='0.166504' 
          width='20.5763' 
          height='20.6665' 
          filterUnits='userSpaceOnUse' 
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix 
            in='SourceAlpha'
            type='matrix' 
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='1' />
          <feGaussianBlur stdDeviation='1' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0' />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_184_406' />
          <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_184_406' result='shape' />
        </filter>
      </defs>
    </svg>
  )
}
