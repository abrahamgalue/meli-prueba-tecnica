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
          <div className='containerInfo'>
            <figure className='containerImages'>
              {item.pictures?.map((picture, index) => (
                <img
                  src={picture.secure_url}
                  alt={item.title}
                  width={700}
                  height={500}
                  key={item.id}
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
              <svg
                width='26'
                height='20'
                viewBox='0 0 26 20'
                strokeWidth='2'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                <path d='M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572'></path>
              </svg>
            </div>
            <div className='containerProductPrice'>
              <p className='productPriceItem'>
                {Number(item.price).toLocaleString('es-AR', {
                  style: 'currency',
                  currency: item.currency_id,
                })}
              </p>
              <svg
                width='22'
                height='22'
                viewBox='0 0 22 22'
                strokeWidth='2'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                <path d='M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0'></path>
                <path d='M12 16v.01'></path>
                <path d='M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483'></path>
              </svg>
            </div>
            <button className='btnBuy'>Comprar ahora</button>
          </div>
        </div>
      </div>
    </section>
  )
}
