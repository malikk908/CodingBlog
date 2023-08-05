import React from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'


const blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
          <h2>Popular Blogs</h2>
          <div className={styles.blogitems}>
            <Link href={'/blogpost/learn-javascript'}>
            <h3>How to learn JS in 2023</h3></Link>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className={styles.blogitems}>
            <h3>How to learn C++ in 2023</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className={styles.blogitems}>
            <h3>How to learn Python in 2023</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div></main>

        </div>
  )
}

export default blog
