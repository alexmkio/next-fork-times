import Link from 'next/link'
import { useRouter } from "next/router"
// import { ExternalLink } from 'react-external-link';
import styles from '../../styles/Details.module.css'
import { getData } from '../../utils/apiCalls'

// export const getStaticPaths = async () => {
//   let section = 'home'
//   let fetchedData = await getData(section)
//   let paths = fetchedData.results.map(currentArticle => {
//     return {
//       params: {
//         id: currentArticle.short_url.split("/")[3].toString()
//       }
//     }
//   })

//   return {
//     paths,
//     fallback: false
//   }
// }

// export const getStaticProps = async (context) => {
//   let section = 'home'
//   let fetchedData = await getData(section)
//   let matchingArticle = fetchedData.results.find(currentArticle => currentArticle.short_url.split("/")[3] === context.params.id)

//   return {
//     props: {
//       article: matchingArticle
//     }    
//   }
// }

export const Details = () => {
  const router = useRouter()

  return (
    <section className={styles.container}>
      <dl>
        <dt>Title:</dt>
        <dd>{router.query.title}</dd>

        <dt>By:</dt>
        <dd>{router.query.byline}</dd>

        <dt>Published Date:</dt>
        <dd>{(new Date(router.query.published_date)).toLocaleString().split(",").join(" ---")}</dd>

        <dt>Last Updated:</dt>
        <dd>{(new Date(router.query.updated_date)).toLocaleString().split(",").join(" ---")}</dd>

        <dt>Section:</dt>
        <dd>{router.query.section}</dd>

        {/* <dt>URL:</dt>
        <dd><ExternalLink href={router.query.short_url} /></dd>

        <dt>Picture:</dt>
        <dd><ExternalLink href={router.query.multimedia[0].url} /></dd> */}

        <dt>Abstract:</dt>
        <dd>{router.query.abstract}</dd>
      </dl>
      <Link href='/'>
        <a>
          <button>Back</button>
        </a>
      </Link>
    </section>
  )
}

export default Details;