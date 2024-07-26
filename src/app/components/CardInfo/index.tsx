import ShowMore from '../ShowMore'
import styles from './card-info.module.css'

interface Props {
  textInfo: string[]
}

export default function CardInfo({ textInfo }: Props) {
  return (
    <div className={styles.cardsInfo}>
      {textInfo.map((text, index) => {
        return index === 0 ? (
          <span className={styles.thin}>{text}</span>
        ) : (
          <span className={styles.strong}>{text}</span>
        )
      })}
      <ShowMore />
    </div>
  )
}
