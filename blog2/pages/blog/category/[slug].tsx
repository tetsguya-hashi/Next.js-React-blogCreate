import { getPlaiceholder } from 'plaiceholder';
import React from 'react'
import Container from '../../../components/Container'
import Meta from '../../../components/Meta';
import PostHeader from '../../../components/PostHeader'
import Posts from '../../../components/Posts';
import { getAllCategories, getAllPostsByCategory } from '../../../lib/api';
import { eyecatchLocal } from '../../../lib/constants';

type Props = {
  names: string;
  posts: any;
}

const Category = (props: Props) => {
  const { names, posts } = props;
  return (
    <Container>
      <Meta pageTitle={names} pageDesc={`${names}に関する記事`} pageImgH='' pageImgW='' />
      <PostHeader title={names} subtitle='Blog Category' />
      <Posts posts={posts} />
    </Container>
  )
}
export default Category

export const getStaticPaths = async () => {
  const allCats = await getAllCategories();
  return {
    paths: allCats.map((cat: any) => `/blog/category/${cat.slug}`),
    fallback: false,
  }
}

export const getStaticProps = async (context: any) => {
  const catSlug = context.params.slug;

  const allCats = await getAllCategories();
  const cat = allCats.find((cat: any) => cat.slug === catSlug);
  const posts = await getAllPostsByCategory(cat.id)

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal;
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url);
    post.eyecatch.blurDataURL = base64;
  }


  return {
    props: {
      names: cat.name,
      posts: posts
    },
  }
}