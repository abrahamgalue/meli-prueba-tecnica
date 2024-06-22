'use client'
import styles from './image-slider.module.css'

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

  const imageSliderDotBtnClassName = (index: number) =>
    [
      styles.carouselSectionDotBtn,
      `${index === imageIndex ? ' ' + styles.active : ''}`,
    ].join('')

  return (
    <section aria-label='Image Carousel' className={styles.carouselSection}>
      <div className={styles.carouselSectionImages}>
        {images.map(({ url, alt }, index) => (
          <img
            key={url}
            src={url}
            alt={alt}
            aria-hidden={imageIndex !== index}
            className={styles.carouselSectionImage}
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
        className={[styles.carouselSectionSliderBtn, styles.prev].join(' ')}
        aria-label='View Previous Image'
      >
        <ArrowIcon aria-hidden />
      </button>
      <button
        onClick={showNextImage}
        className={[styles.carouselSectionSliderBtn, styles.next].join(' ')}
        aria-label='View Next Image'
      >
        <ArrowIcon aria-hidden />
      </button>
      <div className={styles.carouselSectionDotBtnContainer}>
        {images.map((_, index) => (
          <button
            key={index}
            className={imageSliderDotBtnClassName(index)}
            onClick={() => setImageIndex(index)}
            aria-label={`View Image ${index + 1}`}
          >
            <span
              className={styles.carouselSectionDotBtnSpan}
              aria-hidden={true}
            >
              Página {index}
            </span>
          </button>
        ))}
      </div>
      <div className={styles.carouselSectionGradient}></div>
    </section>
  )
}
