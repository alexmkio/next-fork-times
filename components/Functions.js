import styles from '../styles/Functions.module.css'

export const Functions = ({ sorted, sortArticles }) => {

  return (
    <section className={styles.container}>
      <section>
        <label>
            Sort By
          <select onChange={event => sortArticles(event.target.value)} defaultValue={{sorted}} >
            <option value={'pubDesc'}>Published - descending</option>
            <option value={'pubAsc'}>Published - ascending</option>
            <option value={'upDesc'}>Updated - descending</option>
            <option value={'upAsc'}>Updated - ascending</option>
          </select>
        </label>
      </section>
    </section>
  )
}