// https://api.mercadolibre.com/sites/MLA/search?q=iphone&limit=4
import Link from 'next/link'
import Image from 'next/image'
import api from '@/app/api'

export default async function ItemsPage({
  searchParams,
}: {
  searchParams: { search: string }
}) {
  const { results, filters } = await api.item.search(searchParams.search)
  const bread = filters[0]?.values[0].path_from_root

  function formatBread(index: number, length: number) {
    return index < length - 1 ? ' > ' : null
  }

  return (
    <section>
      <span className='breadcrum'>
        {bread?.map((category, index) => (
          <span key={index}>
            <a href={`/items?search=${category.name}`}>{category.name}</a>
            {formatBread(index, bread.length)}
          </span>
        ))}
      </span>
      <article>
        {results.map(item => (
          <div key={item.id}>
            <Link href={`/items/${item.id}`} key={item.id} className='product'>
              <Image
                src={item.thumbnail}
                alt={item.title}
                width={160}
                height={160}
                key={item.id}
                quality={100}
                priority
              />
              <div>
                <p className='productTitle'>{item.title}</p>
                <p className='productPrice'>
                  {Number(item.price).toLocaleString('es-AR', {
                    style: 'currency',
                    currency: item.currency_id,
                  })}
                </p>
              </div>
              <span className='productLocation'>
                {item.seller_address.city.name.toLocaleLowerCase()}
              </span>
            </Link>
          </div>
        ))}
      </article>
    </section>
  )
}
