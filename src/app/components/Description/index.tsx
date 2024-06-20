import api from '@/app/api'

async function Description({ id }: { id: string }) {
  const description = await api.item.description.fetch(id)

  return (
    <>
      {description ? (
        <div className='productDescription'>
          <h2>Descripción</h2>
          <p>{description}</p>
        </div>
      ) : null}
    </>
  )
}

export default Description
