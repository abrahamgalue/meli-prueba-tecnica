import { ImagesSlider } from './components/ImageSlider'
import { IMAGES } from '@/app/components/ImageSlider/utils/images'

export default function Home() {
  return (
    <>
      <div className='imagesSliderContainer'>
        <ImagesSlider images={IMAGES} />
      </div>
    </>
  )
}
