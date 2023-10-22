import api from '@/app/api'
import Description from '@/app/components/Description'
import { ShowHeartIcon, HelpCircle } from '@/app/icons/Icons'

export default async function ItemPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const item = await api.item.fetch(id)

  return (
    <section className='container'>
      <div className='containerHeader'>
        <a href='/'>Volver al listado</a>
      </div>
      <div className='containerProduct'>
        <div className='containerProductInfo'>
          <div className='containerInfo'>
            <figure className='containerImages'>
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
          <div className='cardProductInfo'>
            <p className='productCondition'>
              <span>{item.condition}</span> | +{item.sold_quantity} sold
            </p>
            <div className='containerProductTitle'>
              <h1 className='productTitleItem'>{item.title}</h1>
              <ShowHeartIcon />
            </div>
            <div className='containerProductPrice'>
              <p className='productPriceItem'>
                {Number(item.price).toLocaleString('es-AR', {
                  style: 'currency',
                  currency: item.currency_id,
                })}
              </p>
              <HelpCircle />
            </div>
            <button className='btnBuy'>Comprar ahora</button>
          </div>
        </div>
      </div>
    </section>
  )
}
