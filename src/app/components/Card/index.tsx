import Link from 'next/link'
import styles from './card.module.css'
import CardInfo from '../CardInfo'
import CardPicture from '../CardPicture'
import { CardItem } from '../CardsSection/utils/cardsItems'

interface Props {
  cardItem: CardItem
}

export default function Card({ cardItem }: Props) {
  const { url, textInfo, imageInfo } = cardItem

  return (
    <article className={styles.cardsArticle}>
      <Link href={`/items?search=${url}`} className={styles.link}>
        <div className={styles.cardsInfoContainer}>
          <CardInfo textInfo={textInfo} />
        </div>
        <CardPicture imageInfo={imageInfo} alt={textInfo[0]} />
      </Link>
    </article>
  )
}
