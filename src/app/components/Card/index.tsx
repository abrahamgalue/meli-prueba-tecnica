import Link from 'next/link'
import styles from './card.module.css'
import CardInfo from '../CardInfo'
import CardPicture from '../CardPicture'

interface Props {
  children: React.ReactNode
  url: string
  textInfo: string[]
}

export default function Card({ children, url, textInfo }: Props) {
  return (
    <article className={styles.cardsArticle}>
      <Link href={`/items?search=${url}`} className={styles.link}>
        <div className={styles.cardsInfoContainer}>
          <CardInfo textInfo={textInfo} />
        </div>
        <CardPicture>{children}</CardPicture>
      </Link>
    </article>
  )
}
