'use client'
import './ImageSlider.css'

import { useState, useEffect } from 'react'
import { ArrowIcon } from '../Icons'

interface Props {
  images: {
    url: string
    alt: string
  }[]
}

export function ImagesSlider({ images }: Props) {
  const [imageIndex, setImageIndex] = useState(0)

  const showNextImage = () => {
    setImageIndex(index => {
      if (index === images.length - 1) return 0
      return index + 1
    })
  }

  const showPrevImage = () => {
    setImageIndex(index => {
      if (index === 0) return images.length - 1
      return index - 1
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex(index => {
        return index === images.length - 1 ? 0 : index + 1
      })
    }, 6000)

    return () => clearInterval(interval)
  }, [images, imageIndex])

  return (
    <section
      aria-label='Image Carousel'
      style={{ width: '100%', height: '100%', position: 'relative' }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          overflow: 'hidden',
        }}
      >
        {images.map(({ url, alt }, index) => (
          <img
            key={url}
            src={url}
            alt={alt}
            aria-hidden={imageIndex !== index}
            className='slider-img'
            width={1920}
            height={505}
            style={{
              translate: `${-100 * imageIndex}%`,
            }}
          />
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className='img-slider-btn previous'
        aria-label='View Previous Image'
      >
        <ArrowIcon aria-hidden />
      </button>
      <button
        onClick={showNextImage}
        className='img-slider-btn next'
        aria-label='View Next Image'
      >
        <ArrowIcon aria-hidden />
      </button>
      <div
        style={{
          position: 'absolute',
          bottom: '1.25rem',
          left: '50%',
          translate: '-50%',
          display: 'flex',
          gap: '.1rem',
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className={`img-slider-dot-btn ${
              index === imageIndex ? 'active' : null
            }`}
            onClick={() => setImageIndex(index)}
            aria-label={`View Image ${index + 1}`}
          >
            <span className='img-slider-dot-btn-span' aria-hidden={true}>
              Página {index}
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}
