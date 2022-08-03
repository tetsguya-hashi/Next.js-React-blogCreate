import React from 'react'

import Logo from './Logo'
import styles from '../styles/Footer.module.scss'
import Container from './Container'
import Social from './Social'

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo boxOn={false} />
          <Social />
        </div>
      </Container>
    </footer>
  )
}

export default Footer