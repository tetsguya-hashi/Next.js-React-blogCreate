import Image from 'next/image';
import React from 'react'

// import cube from '../images/cube.jpg'
import styles from '../styles/Hero.module.scss'

type Props = {
  title: string;
  subtitle: string;
  imageOn?: boolean;
}
const cube = {
  src: 'https://images.microcms-assets.io/assets/8cd12e63f6e84e21acc39b8960ef27f6/9065b1f020d8414c8766797e3c155981/cube.jpg',
  height: 1300,
  width: 1500,
  blurDataURL: 'data:image/jpeg;base64,',
}

const Hero = ({ title, subtitle, imageOn = false }: Props) => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && (<figure className={styles.image}>
        <Image
          src={cube} alt="" layout='responsive'
          sizes='(min-width:1152px) 576px,(min-width:768px) 50vw,100vw'
          priority placeholder='blur'
        />
      </figure>)}
    </div>
  )
}

export default Hero