// https://api.mercadolibre.com/sites/MLA/search?q=iphone&limit=4
import styles from './styles.module.css'
import api from '@/app/api'
import Link from 'next/link'

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
    <section className={styles.resultsSection}>
      <span className={styles.resultsSectionBreadcrum}>
        {bread?.map((category, index) => (
          <span key={index}>
            <a href={`/items?search=${category.name}`}>{category.name}</a>
            {formatBread(index, bread.length)}
          </span>
        ))}
      </span>
      <article className={styles.resultsSectionArticle}>
        {results.map(item => (
          <div key={item.id}>
            <Link
              href={`/items/${item.id}`}
              key={item.id}
              className={styles.resultsSectionArticleProduct}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                width={160}
                height={160}
              />
              <div className={styles.resultsSectionArticleProductContainer}>
                <p className={styles.resultsSectionArticleProductTitle}>
                  {item.title}
                </p>
                <p className={styles.resultsSectionArticleProductPrice}>
                  US{' '}
                  {Number(item.price * 0.0011).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </p>
                <p className={styles.resultsSectionArticleProductCondition}>
                  {item.condition}
                </p>
                <p className={styles.resultsSectionArticleProductQuantity}>
                  (+{item.available_quantity} available)
                </p>
              </div>
            </Link>
          </div>
        ))}
      </article>
    </section>
  )
}
