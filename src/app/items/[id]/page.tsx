import api from '@/app/api'
import Description from '@/app/components/Description'

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
          <figure className='containerImages'>
            {item.pictures?.map((picture, index) => (
              <img
                src={picture.secure_url}
                alt={item.title}
                key={index}
                width={700}
                height={500}
              />
            ))}
          </figure>
          <div>
            <p className='productCondition'>
              <span>{item.condition}</span> | +{item.sold_quantity} sold
            </p>
            <p className='productTitleItem'>{item.title}</p>
            <p className='productPriceItem'>
              {Number(item.price).toLocaleString('es-AR', {
                style: 'currency',
                currency: item.currency_id,
              })}
            </p>
          </div>
        </div>
        <Description id={id} />
      </div>
    </section>
  )
}
