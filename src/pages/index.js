import Link from "next/link"
import { Fragment } from "react"


export default function Home() {
  return (
    <Fragment>
      <h1>NextJS Test Blog</h1>
      <p><Link href="/posts">View Posts</Link></p>
      <p><Link href="/posts/new">New Post</Link></p>
    </Fragment>
  )
}
