const api = {
  item: {
    description: {
      fetch: async (id: string) => {
        const { plain_text } = await fetch(
          `https://api.mercadolibre.com/items/${id}/description`
        ).then(
          res =>
            res.json() as Promise<{
              plain_text: string
            }>
        )

        return plain_text
      },
    },
    fetch: async (id: string) => {
      const item = await fetch(`https://api.mercadolibre.com/items/${id}`).then(
        res =>
          res.json() as Promise<{
            id: string
            title: string
            thumbnail: string
            price: number
            currency_id: string
            condition: string
            permalink: string
            pictures: [
              {
                secure_url: string
              },
              {
                secure_url: string
              },
              {
                secure_url: string
              },
              {
                secure_url: string
              },
              {
                secure_url: string
              },
              {
                secure_url: string
              },
              {
                secure_url: string
              }
            ]
            seller_address: {
              city: {
                name: string
              }
              state: {
                name: string
              }
            }
            free_shipping: boolean
          }>
      )

      return {
        ...item,
      }
    },
    search: (query: string) =>
      fetch(
        `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=48`
      ).then(
        res =>
          res.json() as Promise<{
            results: {
              id: string
              title: string
              condition: string
              thumbnail: string
              price: number
              currency_id: string
              available_quantity: number
            }[]
            filters: {
              values: {
                path_from_root: {
                  name: string
                }[]
              }[]
            }[]
          }>
      ),
  },
}

export default api
