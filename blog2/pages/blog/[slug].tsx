import Image from 'next/image';
import React from 'react';
import parse from 'html-react-parser';
import { getPlaiceholder } from 'plaiceholder';

import Container from '../../components/Container';
import PostBody from '../../components/PostBody';
import PostHeader from '../../components/PostHeader';
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from '../../components/TwoColumn';
import { getPostBySlug } from '../../lib/api';
import ConvertBody from '../../components/ConvertBody';
import PostCategories from '../../components/PostCategories';
import ExtractText from '../../lib/ExtractText';
import Meta from '../../components/Meta';
import { eyecatchLocal } from '../../lib/constants';

type Props = {
  title: string;
  publish: string;
  content: string;
  eyecatch: any;
  categories: string;
  description: string;
}

const Post = (props: Props) => {
  const { title, publish, content, eyecatch, categories, description } = props
  return (
    <Container>
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <article>
        <PostHeader title={title} subtitle='Blog Article' publish={publish} />
        <figure>
          <Image src={eyecatch.url}
            alt='' layout='responsive'
            width={eyecatch.width}
            height={eyecatch.height}
            sizes='(min-width:1152px) 1152px,100vw'
            priority
            placeholder='blur'
            blurDataURL={eyecatch.blurDataURL}
          />
        </figure>
        <TwoColumn>
          <TwoColumnMain>
            <PostBody><ConvertBody contentHTML={content}></ConvertBody></PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar><PostCategories categories={categories} /></TwoColumnSidebar>
        </TwoColumn>
      </article>
    </Container>
  )
}

export default Post

export const getStaticPaths = async () => {
  return {
    paths: ['/blog/schedule', '/blog/music', '/blog/micro'],
    fallback: false,
  }
}

export async function getStaticProps(context: any) {
  const slug = context.params.slug;
  const post = await getPostBySlug(slug);
  const description = ExtractText(post.content);
  const eyecatch = post.eyecatch ?? eyecatchLocal;
  const { base64 } = await getPlaiceholder(eyecatch.url);
  eyecatch.blurDataURL = base64;
  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: eyecatch,
      categories: post.categories,
      description: description,
    }
  }
}