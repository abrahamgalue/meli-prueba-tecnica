import { cardItems } from './utils/cardsItems'
import Card from '../Card'
import styles from './cards-section.module.css'

export default function CardsSection() {
  return (
    <>
      {cardItems
        .reduce((sections: JSX.Element[][], cardItem, index) => {
          const sectionIndex = Math.floor(index / 2)

          if (!sections[sectionIndex]) {
            sections[sectionIndex] = []
          }

          sections[sectionIndex].push(<Card key={index} cardItem={cardItem} />)

          return sections
        }, [])
        .map((section, sectionIndex) => (
          <section key={sectionIndex} className={styles.cardsSection}>
            {section}
          </section>
        ))}
    </>
  )
}
