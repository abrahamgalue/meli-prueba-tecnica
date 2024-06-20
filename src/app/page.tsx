import { ImagesSlider } from './components/ImageSlider'
import { IMAGES } from '@/app/components/ImageSlider/utils/images'

export default function Home() {
  return (
    <>
      <div
        style={{
          width: '100%',
          height: '400px',
          margin: '0 auto',
          aspectRatio: '16/9',
        }}
      >
        <ImagesSlider images={IMAGES} />
      </div>
    </>
  )
}
