import api from '@/app/api'

async function Description({ id }: { id: string }) {
  const description = await api.item.description.fetch(id)

  return <p className='productDescription'>{description}</p>
}

export default Description
