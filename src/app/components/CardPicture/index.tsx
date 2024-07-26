import styles from './card-picture.module.css'

interface Props {
  children: React.ReactNode
}

export default function CardPicture({ children }: Props) {
  return <div className={styles.cardsPicture}>{children}</div>
}
