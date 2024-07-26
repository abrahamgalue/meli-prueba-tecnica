import ShowMore from '../ShowMore'
import styles from './card-info.module.css'

interface Props {
  textInfo: string[]
}

export default function CardInfo({ textInfo }: Props) {
  return (
    <div className={styles.cardsInfo}>
      {textInfo.map((text, index) => (
        <span key={index} className={index === 0 ? styles.thin : styles.strong}>
          {text}
        </span>
      ))}
      <ShowMore />
    </div>
  )
}
