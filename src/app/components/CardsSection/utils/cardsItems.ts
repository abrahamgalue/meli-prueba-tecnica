export type CardItem = {
  url: string
  textInfo: [string, string, string]
  imageInfo: {
    src: string
    srcSet: string
  }
}

export const cardItems: CardItem[] = [
  {
    url: 'smartphones',
    textInfo: ['ÚLTIMA TECNOLOGÍA', 'Actualiza tu', 'Smartphone'],
    imageInfo: {
      src: 'https://http2.mlstatic.com/D_NQ_975365-MLA77245985885_062024-C.webp',
      srcSet:
        'https://http2.mlstatic.com/D_NQ_975365-MLA77245985885_062024-C.webp 1x, https://http2.mlstatic.com/D_NQ_975365-MLA77245985885_062024-C.webp 2x',
    },
  },
  {
    url: 'computacion+y+gaming',
    textInfo: ['Envío gratis en 48h', 'Lleva tu juego', 'Al siguiente nivel'],
    imageInfo: {
      src: 'https://http2.mlstatic.com/D_NQ_764509-MLA77061168378_062024-C.webp',
      srcSet:
        'https://http2.mlstatic.com/D_NQ_764509-MLA77061168378_062024-C.webp 1x, https://http2.mlstatic.com/D_NQ_764509-MLA77061168378_062024-C.webp 2x',
    },
  },
  {
    url: 'todo+en+construccion',
    textInfo: ['Envío gratis en 48h', 'Remodela y renueva', 'Tus espacios'],
    imageInfo: {
      src: 'https://http2.mlstatic.com/D_NQ_906631-MLA77061653022_062024-C.webp',
      srcSet:
        'https://http2.mlstatic.com/D_NQ_906631-MLA77061653022_062024-C.webp 1x, https://http2.mlstatic.com/D_NQ_906631-MLA77061653022_062024-C.webp 2x',
    },
  },
  {
    url: 'belleza+y+cuidado+personal',
    textInfo: ['Envío gratis en 48h', 'Consiéntete', 'Con lo mejor'],
    imageInfo: {
      src: 'https://http2.mlstatic.com/D_NQ_843441-MLA45981503126_052021-C.webp',
      srcSet:
        'https://http2.mlstatic.com/D_NQ_843441-MLA45981503126_052021-C.webp 1x, https://http2.mlstatic.com/D_NQ_843441-MLA45981503126_052021-C.webp 2x',
    },
  },
]
