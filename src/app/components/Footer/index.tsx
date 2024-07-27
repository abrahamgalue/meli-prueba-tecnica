import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.infoSlide}>
          <div className={styles.imgContainer}>
            <img
              decoding='async'
              src='https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/buy-heart.svg'
              alt='Compra sin moverte'
            />
          </div>
          <h2>Compra sin moverte</h2>
          <p>
            Encuentra lo que necesitas, y coordina el pago y la entrega con el
            vendedor. Es fácil y rápido. ¡Todos podemos hacerlo!
          </p>
          <a
            href='https://ayuda.mercadolibre.com.ve/ayuda/Compras_638'
            target='_blank'
          >
            Cómo comprar en Mercado Libre
          </a>
        </div>
        <div className={styles.infoSlide}>
          <div className={styles.imgContainer}>
            <img
              decoding='async'
              src='https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/shipping.svg'
              alt='Recibe tu producto'
            />
          </div>
          <h2>Recibe tu producto</h2>
          <p>
            Acuerda la entrega de tu compra con el vendedor. Puedes recibirlo en
            tu casa, en la oficina o retirarlo. ¡Tú decides qué prefieres!
          </p>
          <a
            href='https://ayuda.mercadolibre.com.ve/ayuda/Como-recibir-el-producto_924'
            target='_blank'
          >
            Cómo coordino la entrega
          </a>
        </div>
        <div className={styles.infoSlide}>
          <div className={styles.imgContainer}>
            <img
              decoding='async'
              src='https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/free-sell.svg'
              alt='Vende gratis'
            />
          </div>
          <h2>Vende gratis</h2>
          <p>
            Miles de personas quieren lo que ofreces. Publica y verás qué pronto
            llegan las compras. ¡Tú no pagas nada!
          </p>
          <a
            href='https://ayuda.mercadolibre.com.ve/ayuda/Vender-un-producto_988'
            target='_blank'
          >
            Cómo vender en Mercado Libre
          </a>
        </div>
      </div>
      <aside className={styles.authorInfo}>
        <section>
          <span>
            Hecho con ❤️ por{' '}
            <a href='https://github.com/abrahamgalue'>@abrahamgalue</a>
          </span>
        </section>
      </aside>
    </footer>
  )
}
