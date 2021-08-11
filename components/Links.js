import styles from './Links.module.css'

export function Links() {
  const ITEMS = [
    {
      href:"https://nextjs.org/docs",
      title:"Documentation →",
      description:"Find in-depth information about Next.js features and API."
    },
    {
      href:"https://nextjs.org/learn",
      title:"Learn →",
      description:"Learn about Next.js in an interactive course with quizzes!"
    },
    {
      href:"https://github.com/vercel/next.js/tree/master/examples",
      title:"Examples →",
      description:"Discover and deploy boilerplate example Next.js projects."
    },
    {
      href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
      title:"Deploy →",
      description:"Instantly deploy your Next.js site to a public URL with Vercel."
    },
  ];

  return (
        <div className={styles.grid}>
          {ITEMS.map(item => {
            return (
              <a key={item.href} href={item.href} className={styles.card}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </a>
            )
          })}
          {/* <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
  )
}
