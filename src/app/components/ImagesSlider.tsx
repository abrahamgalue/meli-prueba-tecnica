'use client'
import './ImagesSlider.css'

import { useState } from 'react'
import { ArrowIcon } from '../icons/Icons'

interface Props {
  imgUrls: {
    url: string
  }[]
}

export function ImagesSlider({ imgUrls }: Props) {
  const [imageIndex, setImageIndex] = useState(0)

  const showNextImage = () => {
    setImageIndex(index => {
      if (index === imgUrls.length - 1) return 0
      return index + 1
    })
  }

  const showPrevImage = () => {
    setImageIndex(index => {
      if (index === 0) return imgUrls.length - 1
      return index - 1
    })
  }

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          overflow: 'hidden',
        }}
      >
        {imgUrls.map((img, index) => (
          <img
            key={img.url}
            src={img.url}
            className='slider-img'
            width={1920}
            height={505}
            style={{
              translate: `${-100 * imageIndex}%`,
            }}
            alt={`Photo ${index + 1}`}
          />
        ))}
      </div>
      <button onClick={showPrevImage} className='img-slider-btn previous'>
        <ArrowIcon />
      </button>
      <button onClick={showNextImage} className='img-slider-btn next'>
        <ArrowIcon />
      </button>
      <div
        style={{
          position: 'absolute',
          bottom: '1.25rem',
          left: '50%',
          translate: '-50%',
          display: 'flex',
          gap: '.25rem',
        }}
      >
        {imgUrls.map((_, index) => (
          <button
            key={index}
            className={`img-slider-dot-btn ${
              index === imageIndex ? 'active' : null
            }`}
            onClick={() => setImageIndex(index)}
          >
            <span className='img-slider-dot-btn-span'>Página {index}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
