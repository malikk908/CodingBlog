import React, { useEffect, useState } from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'


const blog = (props) => {
  console.log(props)

  const [blogs, setBlogs] = useState(props.allBlogs)

  // useEffect(() => {
    
  // }, [])
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Popular Blogs</h2>
        {blogs.map((blogitem)=>{
          return <div key={blogitem.slug} className={styles.blogitems}>
          <Link href={`/blogpost/${blogitem.slug}`}>
            <h3>{blogitem.title}</h3></Link>
          <p>{blogitem.content.substr(0, 100)}</p>
        </div>
        })}
        
      </main>

    </div>
  )
}

export const getServerSideProps = async () => {
    let data = await fetch('http://localhost:3000/api/blogs')
    let allBlogs =  await data.json()
    
    
    
  
  return { 
    props: { allBlogs }
   }
}

export default blog
