import React from 'react'
import Container from '../components/Container'
import Hero from '../components/Hero'
import Meta from '../components/Meta'

const Custom404 = () => {
  return (
    <Container>
      <Meta pageTitle='404 - Page not found' pageDesc='' pageImgH='' pageImgW='' />
      <Hero title='404' subtitle='ページが見つかりません' />
    </Container>
  )
}

export default Custom404