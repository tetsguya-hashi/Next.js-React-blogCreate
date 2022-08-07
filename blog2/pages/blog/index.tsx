import Hero from '../../components/Hero'
import Container from '../../components/Container'
import Meta from '../../components/Meta'
import { getAllPosts } from '../../lib/api'
import Posts from '../../components/Posts'
import { eyecatchLocal } from '../../lib/constants'
import { getPlaiceholder } from 'plaiceholder'


type Props = {
  posts: any;
}

const Blog = (props: Props) => {
  const { posts } = props;
  return (
    <Container>
      <Meta pageTitle='ブログ' pageDesc='ブログ記事一覧' pageImgH={null} pageImgW={null} />
      <Hero title='Blog' subtitle='Recent Posts' />
      <Posts posts={posts} />
    </Container>
  )
}
export default Blog

export const getStaticProps = async () => {
  const posts = await getAllPosts();
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