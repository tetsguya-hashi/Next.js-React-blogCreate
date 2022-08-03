import React from 'react'
import styles from '../styles/contact.module.scss'
import Social from './Social'

const Contac = () => {
  return (
    <div className={styles.stack}>
      <h3 className={styles.heading}>Contact</h3>
      <Social iconSize='30px' />
      <address>cube@exmaple.com</address>
    </div>

  )
}

export default Contac