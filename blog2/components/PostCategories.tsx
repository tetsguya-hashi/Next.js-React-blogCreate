import Link from 'next/link';
import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';

import styles from '../styles/post-categories.module.scss'

type Props = {
  categories: any;
}
type String = {
  name: string;
  slug: string;
}
const PostCategories = (props: Props) => {
  const { categories } = props;
  return (
    <div className={styles.flexContainer}>
      <h3 className={styles.heading}>
        <FontAwesomeIcon icon={faFolderOpen} />
        <span className="sr-only">Categories</span>
      </h3>
      <ul className={styles.list}>
        {categories.map(({ name, slug }: String) => (
          <li key={slug}>
            <Link href={`/blog/category/${slug}`}>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostCategories