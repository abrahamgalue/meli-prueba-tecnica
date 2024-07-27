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
              <span>{item.condition}</span>
            </p>
            <div className={styles.productCardInfoTitle}>
              <h1 className={styles.productCardInfoTitleItem}>{item.title}</h1>
              <ShowHeartIcon />
            </div>
            <div className={styles.productCardPrice}>
              <p className={styles.productCardPriceItem}>
                {Number(item.price * 0.0011).toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </p>
              <div title='This price is in Argentine pesos'>
                <HelpCircle />
              </div>
            </div>
            <a
              href={item.permalink}
              target='_blank'
              className={styles.productCardInfoBuyBtn}
            >
              Comprar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
