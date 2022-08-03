import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

import { siteMeta } from '../lib/constants'
import siteImg from '../images/ogp.jpg'


const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = siteMeta;
type Props = {
  pageTitle: string;
  pageDesc: string;
  pageImg?: string;
  pageImgW: string | null;
  pageImgH: string | null;
}

const Meta = (props: Props) => {
  const { pageTitle, pageDesc, pageImg, pageImgW, pageImgH } = props;
  const title: string = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
  const desc: string = pageDesc ?? siteDesc;

  //useRouterでページのパスを取得
  const router = useRouter();
  const url = `${siteUrl}${router.asPath}`;
  //OGP画像
  const img = pageImg || siteImg.src;
  const imgW = pageImgW || siteImg.width.toString();
  const imgH = pageImgH || siteImg.height.toString();
  const imgUrl = img.startsWith('https') ? img : `${siteUrl}${img}`;

  return (
    <Head>
      <title>{title}</title>
      <meta property='og:title' content={title} />

      <meta name='description' content={desc} />
      <meta property='og:description' content={desc} />

      <link rel='canonical' href={url} />
      <meta property='og:url' content={url} />

      <meta property='og:site_name' content={siteTitle} />
      <meta property='og:type' content={siteType} />
      <meta property='og:locale' content={siteLocale} />

      <link rel='icon' href={siteIcon} />
      <link rel='apple-touch-icon' href={siteIcon} />

      <meta property='og:image' content={imgUrl} />
      <meta property='og:image:width' content={imgW} />
      <meta property='og:image:height' content={imgH} />
      <meta name='twitter:card' content='summary_large_imgage' />
    </Head>
  )
}

export default Meta