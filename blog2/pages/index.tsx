import { getPlaiceholder } from 'plaiceholder'
import Container from '../components/Container'
import Hero from '../components/Hero'
import Meta from '../components/Meta'
import Paginaition from '../components/Paginaition'
import Posts from '../components/Posts'
import { getAllPosts } from '../lib/api'
import { eyecatchLocal } from '../lib/constants'

type Props = {
  posts: any;
}

export default function Home(props: Props) {
  const { posts } = props;
  return (
    <Container>
      <Meta pageTitle='' pageDesc='' pageImgH={null} pageImgW={null} />
      <Hero title='CUBE' subtitle='アウトプットしていくサイト' imageOn />
      <Posts posts={posts} />
      <Paginaition nextUrl='/blog' nextText='More Posts' />

    </Container>
  )
}

export const getStaticProps = async () => {
  const posts = await getAllPosts(4);
  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal;
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64;
  }
  return {
    props: {
      posts: posts,
    }
  }
}