import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/accordion.module.scss';


const Accordion = (props) => {
  const { heading, children } = props;
  const [textIsOpen, setTextIsOpen] = useState(false);
  const toggleText = () => {
    setTextIsOpen((textIsOpen) => !textIsOpen)
  }
  const refText = useRef(null)
  return (
    <div className={textIsOpen ? styles.open : styles.close}>
      <h3 className={styles.heading}>
        <button onClick={toggleText}>
          {heading}
          <FontAwesomeIcon icon={faCircleChevronDown} className={styles.icon} />
        </button>
      </h3>
      <div className={styles.text} ref={refText} style={{ '--text-height': refText.current ? `${refText.current.scrollHeight}px` : '0px' }}>
        <div className={styles.textInner}>{children}</div>
      </div>
    </div >
  )
}

export default Accordion