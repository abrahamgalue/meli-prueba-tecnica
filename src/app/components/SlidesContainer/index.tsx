import styles from './slides-container.module.css'
import { slidesItems } from './utils/slidesItems'
import Slide from '../Slide'

function SlidesContainer() {
  return (
    <div className={styles.container}>
      {slidesItems.map(slideItem => (
        <Slide key={slideItem.helpUrl.href} slideItem={slideItem} />
      ))}
    </div>
  )
}

export default SlidesContainer
