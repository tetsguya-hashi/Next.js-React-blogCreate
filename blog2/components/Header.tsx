import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import styles from '../styles/Header.module.scss'
import Container from './Container'

const header = () => {
  return (
    <header>
      <Container large={true}>
        <div className={styles.flexContainer}>
          <Logo boxOn={true} />
          <Nav />
        </div>
      </Container>
    </header>
  )
}

export default header