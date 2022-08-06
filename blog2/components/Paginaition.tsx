import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

import styles from '../styles/pagination.module.scss'

type Props = {
  prevText: string;
  prevUrl: string;
  nextText: string;
  nextUrl: string;
}

const Paginaition = (props: Props) => {
  const { prevText = '', prevUrl = '', nextText = '', nextUrl = '' } = props;
  return (
    <ul className={styles.flexContainer}>
      {prevText && prevUrl && (
        <li className={styles.prev}>
          <Link href={prevUrl}>
            <a className={styles.iconText}>
              <FontAwesomeIcon icon={faChevronLeft} color='#aaa' />
              <span>{prevText}</span>
            </a>
          </Link>
        </li>
      )}
      {nextText && nextUrl && (
        <li className={styles.next}>
          <Link href={nextUrl}>
            <a className={styles.iconText}>
              <span>{nextText}</span>
              <FontAwesomeIcon icon={faChevronRight} color='#aaa' />
            </a>
          </Link>
        </li>
      )}
    </ul>
  )
}

export default Paginaition