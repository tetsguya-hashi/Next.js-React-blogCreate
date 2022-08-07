import Link from 'next/link'

import React, { useState } from 'react'
import styles from '../styles/Nav.module.scss'


const Nav = () => {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);
  const toggleNav = () => setNavIsOpen(!navIsOpen);
  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {navIsOpen && (
        <style jsx global>{`
        @media screen and (max-width: 768px) {
        body {
          overflow: hidden;
          position: fixed;
          width: 100%;
        }
        }
        `}</style>
      )}
      <button className={styles.btn} onClick={toggleNav}>
        <span className={styles.bar}></span>
        <span className='sr-only'>MENU</span>
      </button>
      <ul className={styles.list}>
        <li>
          <Link href='/'>
            <a onClick={toggleNav}>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a onClick={toggleNav}>About</a>
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            <a onClick={toggleNav}>Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav