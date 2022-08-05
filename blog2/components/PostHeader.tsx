import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

import styles from '../styles/post-header.module.scss'
import ConvertDate from './ConvertDate';


type Props = {
  title: string;
  subtitle: string;
  publish: string;
}

const PostHeader = (props: Props) => {
  const { title, subtitle, publish = '' } = props;
  return (
    <div className={styles.stack}>
      <p className={styles.subtitle}>{subtitle}</p>
      <h1 className={styles.title}>{title}</h1>
      {publish && <div className={styles.publish}>
        <FontAwesomeIcon icon={faClock} size='lg' color='#aaa' />
        <ConvertDate dateISO={publish} />

      </div>}
    </div>
  )
}

export default PostHeader