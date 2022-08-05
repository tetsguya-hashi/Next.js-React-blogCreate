import Image from 'next/image';
import React from 'react'
import Container from '../../components/Container'
import PostHeader from '../../components/PostHeader';
import { getPostBySlug } from '../../lib/api'

type Props = {
  title: string;
  publish: string;
  content: string;
  eyecatch: any;
  categories: string;
}

const Schedule = (props: Props) => {
  const { title, publish, content, eyecatch, categories } = props
  return (
    <Container>
      <article>
        <PostHeader title={title} subtitle='Blog Article' publish={publish} />
        <figure>
          <Image src={eyecatch.url} alt='' layout='responsive' width={eyecatch.width} height={eyecatch.height} sizes='(min-width:1152px) 1152px,100vw' priority />
        </figure>
      </article>
    </Container>
  )
}

export default Schedule

export async function getStaticProps() {
  const slug = 'schedule';

  const post = await getPostBySlug(slug);
  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories
    }
  }
}