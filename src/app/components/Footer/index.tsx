import Contributions from '../Contributions'
import SlidesContainer from '../SlidesContainer'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <SlidesContainer />
      <Contributions />
    </footer>
  )
}
