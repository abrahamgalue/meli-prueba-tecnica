import styles from './slide.module.css'
import { SlidesItem } from '../SlidesContainer/utils/slidesItems'

interface Props {
  slideItem: SlidesItem
}

function Slide({ slideItem }: Props) {
  const { imageInfo, title, description, helpUrl } = slideItem

  return (
    <div className={styles.infoSlide}>
      <div className={styles.imgContainer}>
        <img decoding='async' src={imageInfo.src} alt={title} />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={helpUrl.href} target='_blank'>
        {helpUrl.info}
      </a>
    </div>
  )
}

export default Slide
