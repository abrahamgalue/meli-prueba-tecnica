import { ImagesSlider } from './components/ImagesSlider'
import { IMAGES } from '@/app/images'

export default function Home() {
  return (
    <div
      style={{
        width: '100%',
        height: '400px',
        margin: '0 auto',
        aspectRatio: '16/9',
      }}
    >
      <ImagesSlider imgUrls={IMAGES} />
    </div>
  )
}
