import Link from 'next/link'
import React from 'react'
import styles from '../styles/Nav.module.scss'


const Nav = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            <a>Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav