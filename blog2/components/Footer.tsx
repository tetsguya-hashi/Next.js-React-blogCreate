import React from 'react'

import Logo from './Logo'
import styles from '../styles/Footer.module.scss'
import Container from './Container'

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo boxOn={false} />
          [ソーシャル]
        </div>
      </Container>
    </footer>
  )
}

export default Footer