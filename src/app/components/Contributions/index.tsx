import styles from './contributions.module.css'

export default function Contributions() {
  return (
    <aside className={styles.authorInfo}>
      <section>
        <span>
          Hecho con ❤️ por{' '}
          <a href='https://github.com/abrahamgalue'>@abrahamgalue</a>
        </span>
      </section>
    </aside>
  )
}
