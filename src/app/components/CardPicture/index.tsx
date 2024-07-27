import styles from './card-picture.module.css'

interface Props {
  imageInfo: {
    src: string
    srcSet: string
  }
  alt: string
}

export default function CardPicture({ imageInfo, alt }: Props) {
  const { src, srcSet } = imageInfo

  return (
    <div className={styles.cardsPicture}>
      <img decoding='async' src={src} srcSet={srcSet} alt={alt} />
    </div>
  )
}
