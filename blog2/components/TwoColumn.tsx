import styles from '../styles/twoColumn.module.scss'

import React from 'react'

type Props = {
  children: React.ReactNode;
}
export const TwoColumn = (props: Props) => {
  const { children } = props;
  return (
    <div className={styles.flexContainer}>
      {children}
    </div>
  )
}
export const TwoColumnMain = (props: Props) => {
  const { children } = props;
  return (
    <div className={styles.main}>
      {children}
    </div>
  )
}
export const TwoColumnSidebar = (props: Props) => {
  const { children } = props;
  return (
    <div className={styles.sidebar}>
      {children}
    </div>
  )
}

