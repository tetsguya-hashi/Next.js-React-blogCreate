import React from 'react'
import styles from '../styles/container.module.scss'


type Props = {
  children: React.ReactNode;
  large?: boolean;
}

const Container = (props: Props) => {
  const { children, large = false } = props
  return (
    <div className={large ? styles.large : styles.default}>
      {children}
    </div>
  )
}

export default Container