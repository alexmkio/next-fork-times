import styles from '../styles/List.module.css'
import { Card } from "./Card"
import Link from 'next/link'

export const List = ({ articles }) => {
  let articleCards = articles.map(currentArticle => {
    let unique = currentArticle.short_url.split("/")[3]
    return (
      <Link href={`/article/${unique}`} key={`${unique}`} >
        <Card key={`${unique}`} article={currentArticle} />
      </Link>
    )
  })

  return (
    <section className={styles.container}>
      <h2>Articles</h2>
      <section className={styles.cards}>
        {articleCards}
      </section>
    </section>
  )
}