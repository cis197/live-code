import React from 'react'
import Link from 'next/link'

const Home = () => (
  <div>
    this is home page
    <br />
    <Link href="/about">
      <a style={{ textDecoration: 'none' }}>
        this is a link to the about page
      </a>
    </Link>
    <br />
    <Link href="/peterishandsome">
      this is a link to peter
    </Link>

  </div>
)

export default Home
