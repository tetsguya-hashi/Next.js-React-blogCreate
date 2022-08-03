import React from 'react'
import styles from '../styles/postBody.module.scss'


type Props = {
  children: React.ReactNode;
}

const PostBody = (props: Props) => {
  const { children } = props;
  return (
    <div className={styles.stack}>
      {children}
    </div>
  )
}

export default PostBody