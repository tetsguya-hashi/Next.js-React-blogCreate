import Link from 'next/link'
import React from 'react'
import styles from '../styles/Logo.module.scss'


type Props = {
  boxOn: boolean;
}

const Logo = ({ boxOn = false }: Props) => {
  return (
    <Link href='/'>
      <a className={boxOn ? styles.box : styles.basic}>
        CUBE
      </a>
    </Link>
  )
}

export default Logo