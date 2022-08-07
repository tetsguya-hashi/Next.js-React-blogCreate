import React from 'react'
import Container from '../../../components/Container'
import PostHeader from '../../../components/PostHeader'
import { getAllCategories } from '../../../lib/api';

type Props = {
  names: string;
}

const Category = (props: Props) => {
  const { names } = props;
  return (
    <Container>
      <PostHeader title={names} subtitle='Blog Category' />
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

  return {
    props: {
      names: cat.name,
    },
  }
}