import Hero from '../../components/Hero'
import React from 'react'
import Container from '../../components/Container'
import Meta from '../../components/Meta'

const Blog = () => {
  return (
    <Container>
      <Meta pageTitle='ブログ' pageDesc='ブログ記事一覧' pageImgH={null} pageImgW={null} />
      <Hero title='Blog' subtitle='Recent Posts' />
    </Container>
  )
}

export default Blog