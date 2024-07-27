export type SlidesItem = {
  imageInfo: {
    src: string
  }
  title: string
  description: string
  helpUrl: {
    href: string
    info: string
  }
}

export const slidesItems: SlidesItem[] = [
  {
    imageInfo: {
      src: 'https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/buy-heart.svg',
    },
    title: 'Compra sin moverte',
    description:
      'Encuentra lo que necesitas, y coordina el pago y la entrega con el vendedor. Es fácil y rápido. ¡Todos podemos hacerlo!',
    helpUrl: {
      href: 'https://ayuda.mercadolibre.com.ve/ayuda/Compras_638',
      info: 'Cómo comprar en Mercado Libre',
    },
  },
  {
    imageInfo: {
      src: 'https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/shipping.svg',
    },
    title: 'Recibe tu producto',
    description:
      'Acuerda la entrega de tu compra con el vendedor. Puedes recibirlo en tu casa, en la oficina o retirarlo. ¡Tú decides qué prefieres!',
    helpUrl: {
      href: 'https://ayuda.mercadolibre.com.ve/ayuda/Como-recibir-el-producto_924',
      info: 'Cómo coordino la entrega',
    },
  },
  {
    imageInfo: {
      src: 'https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/free-sell.svg',
    },
    title: 'Vende gratis',
    description:
      'Miles de personas quieren lo que ofreces. Publica y verás qué pronto llegan las compras. ¡Tú no pagas nada!',
    helpUrl: {
      href: 'https://ayuda.mercadolibre.com.ve/ayuda/Vender-un-producto_988',
      info: 'Cómo vender en Mercado Libre',
    },
  },
]
