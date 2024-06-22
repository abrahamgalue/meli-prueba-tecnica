import styles from './styles.module.css'
import BackHistoryBtn from '@/app/components/BackHistoryBtn'
import api from '@/app/api'
import Description from '@/app/components/Description'
import ShowHeartIcon from '@/app/components/Icons/ShowHeartIcon'
import { HelpCircle } from '@/app/components/Icons'

export default async function ItemPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const item = await api.item.fetch(id)

  return (
    <section className={styles.container}>
      <div className={styles.headerContainer}>
        <BackHistoryBtn />
      </div>
      <div className={styles.productContainer}>
        <div className={styles.productContainerInfo}>
          <div className={styles.infoContainer}>
            <figure className={styles.infoContainerImages}>
              {item.pictures?.map((picture, index) => (
                <img
                  src={picture.secure_url}
                  alt={item.title}
                  width={700}
                  height={500}
                  key={index}
                />
              ))}
            </figure>
            <Description id={id} />
          </div>
          <div className={styles.productCardInfo}>
            <p className={styles.productCardInfoCondition}>
              <span>{item.condition}</span> | +{item.sold_quantity} sold
            </p>
            <div className={styles.productCardInfoTitle}>
              <h1 className={styles.productCardInfoTitleItem}>{item.title}</h1>
              <ShowHeartIcon />
            </div>
            <div className={styles.productCardPrice}>
              <p className={styles.productCardPriceItem}>
                {Number(item.price).toLocaleString('es-AR', {
                  style: 'currency',
                  currency: item.currency_id,
                })}
              </p>
              <HelpCircle />
            </div>
            <button className={styles.productCardInfoBuyBtn}>
              Comprar ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
