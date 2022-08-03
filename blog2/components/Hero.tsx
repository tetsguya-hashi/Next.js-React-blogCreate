import React from 'react'
import styles from '../styles/Hero.module.scss'

type Props = {
  title: string;
  subtitle: string;
  imageOn?: boolean;
}

const Hero = ({ title, subtitle, imageOn = false }: Props) => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        {imageOn && <figure>[画像]</figure>}
      </div>
    </div>
  )
}

export default Hero