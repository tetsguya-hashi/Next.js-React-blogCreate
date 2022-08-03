import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/social.module.scss'

type Props = {
  iconSize: string;
}

const Social = (props: Props) => {
  const { iconSize = '24px' } = props;
  return (
    <ul className={styles.list} style={{ fontSize: iconSize }}>
      <li>
        <a href="https://twitter.com/">
          <FontAwesomeIcon icon={faTwitter} />
          <span className='sr-only'>Twitter</span>
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/">
          <FontAwesomeIcon icon={faFacebook} />
          <span className='sr-only'>Facebook</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/">
          <FontAwesomeIcon icon={faGithub} />
          <span className='sr-only'>Github</span>
        </a>
      </li>
    </ul>
  )
}

export default Social