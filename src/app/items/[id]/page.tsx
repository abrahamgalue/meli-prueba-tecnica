import api from '@/app/api'
import Description from '@/app/components/Description'

export default async function ItemPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const item = await api.item.fetch(id)

  return (
    <section>
      <div className='containerHeader'>
        <a href='/'>Volver al listado</a>
      </div>
      <div className='container'>
        <figure>
          <img src={item.pictures[0].secure_url} alt={item.title} width={350} />
        </figure>
        <div>
          <p className='productCondition'>
            <span>{item.condition}</span> | +{item.sold_quantity} sold
          </p>
          <p className='productTitle'>{item.title}</p>
          <p className='productPrice'>
            {Number(item.price).toLocaleString('es-AR', {
              style: 'currency',
              currency: item.currency_id,
            })}
          </p>
          <hr />
          <Description id={id} />
        </div>
      </div>
    </section>
  )
}
