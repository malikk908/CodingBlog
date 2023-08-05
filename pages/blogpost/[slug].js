import React from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/BlogPost.module.css'

const slug = () => {
    const router = useRouter();
    // console.log(router.query)

    const {slug} = router.query

  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <h1 >Title of the page {slug}</h1>
      <hr />
      <div>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, quia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis facere sequi nemo accusantium voluptatem enim architecto autem incidunt officiis modi distinctio, fuga tempore adipisci laborum assumenda temporibus reprehenderit quia maxime doloremque aperiam? In, velit eligendi minus placeat cupiditate cum veritatis corporis nemo labore, magni dignissimos?W</div>
      </main>
    </div>
  )
}

export default slug
