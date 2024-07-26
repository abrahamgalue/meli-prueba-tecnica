import Card from '../Card'
import styles from './cards-section.module.css'

export default function CardsSection() {
  return (
    <>
      <section className={styles.cardsSection}>
        <Card
          url='smartphones'
          textInfo={['ÚLTIMA TECNOLOGÍA', 'Actualiza tu', 'Smartphone']}
        >
          <img
            decoding='async'
            src='https://http2.mlstatic.com/D_NQ_975365-MLA77245985885_062024-C.webp'
            alt='ÚLTIMA TECNOLOGÍA'
            srcSet='https://http2.mlstatic.com/D_NQ_975365-MLA77245985885_062024-C.webp 1x, https://http2.mlstatic.com/D_NQ_975365-MLA77245985885_062024-C.webp 2x'
          />
        </Card>
        <Card
          url='computacion+y+gaming'
          textInfo={[
            'Envío gratis en 48h',
            'Lleva tu juego',
            'Al siguiente nivel',
          ]}
        >
          <img
            decoding='async'
            src='https://http2.mlstatic.com/D_NQ_764509-MLA77061168378_062024-C.webp'
            alt='Envío Gratis en 48h'
            srcSet='https://http2.mlstatic.com/D_NQ_764509-MLA77061168378_062024-C.webp 1x, https://http2.mlstatic.com/D_NQ_764509-MLA77061168378_062024-C.webp 2x'
          />
        </Card>
      </section>

      <section className={styles.cardsSection}>
        <Card
          url='todo+en+construccion'
          textInfo={[
            'Envío gratis en 48h',
            'Remodela y renueva',
            'Tus espacios',
          ]}
        >
          <img
            decoding='async'
            src='https://http2.mlstatic.com/D_NQ_906631-MLA77061653022_062024-C.webp'
            alt='Envío Gratis en 48h'
            srcSet='https://http2.mlstatic.com/D_NQ_906631-MLA77061653022_062024-C.webp 1x, https://http2.mlstatic.com/D_NQ_906631-MLA77061653022_062024-C.webp 2x'
          />
        </Card>
        <Card
          url='belleza+y+cuidado+personal'
          textInfo={['Envío gratis en 48h', 'Consiéntete', 'Con lo mejor']}
        >
          <img
            decoding='async'
            src='https://http2.mlstatic.com/D_NQ_843441-MLA45981503126_052021-C.webp'
            alt='Envío Gratis en 48h'
            srcSet='https://http2.mlstatic.com/D_NQ_843441-MLA45981503126_052021-C.webp 1x, https://http2.mlstatic.com/D_NQ_843441-MLA45981503126_052021-C.webp 2x'
          />
        </Card>
      </section>
    </>
  )
}
