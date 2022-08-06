import Image from 'next/image';
import React from 'react';
import parse from 'html-react-parser';
import { getPlaiceholder } from 'plaiceholder';

import Container from '../../components/Container';
import PostBody from '../../components/PostBody';
import PostHeader from '../../components/PostHeader';
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from '../../components/TwoColumn';
import { getAllSlug, getPostBySlug } from '../../lib/api';
import ConvertBody from '../../components/ConvertBody';
import PostCategories from '../../components/PostCategories';
import ExtractText from '../../lib/ExtractText';
import Meta from '../../components/Meta';
import { eyecatchLocal } from '../../lib/constants';
import { PrevNextPost } from '../../lib/PrevNextPost';
import Paginaition from '../../components/Paginaition';

type Props = {
  title: string;
  publish: string;
  content: string;
  eyecatch: any;
  categories: string;
  description: string;
  prevPost: any;
  nextPost: any;
}

const Post = (props: Props) => {
  const { title, publish, content, eyecatch, categories, description, prevPost, nextPost } = props
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
        <Paginaition
          prevText={prevPost.title}
          prevUrl={`/blog/${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`/blog/${nextPost.slug}`}
        />
      </article>
    </Container>
  )
}

export default Post

export const getStaticPaths = async () => {
  const allSlugs = await getAllSlug();
  return {
    paths: allSlugs.map((path: any) => `/blog/${path.slug}`),
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

  //ページネーション
  const allSlugs = await getAllSlug();
  const [prevPost, nextPost] = PrevNextPost(allSlugs, slug)
  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: eyecatch,
      categories: post.categories,
      description: description,
      prevPost: prevPost,
      nextPost: nextPost,
    }
  }
}