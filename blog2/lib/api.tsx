import { createClient } from 'microcms-js-sdk'


export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN as string,
  apiKey: process.env.API_KEY as string,
})

export async function getPostBySlug(slug: string) {
  try {
    const post = await client.get({
      endpoint: 'blogs',
      queries: { filters: `slug[equals]${slug}` }
    })
    return post.contents[0];
  } catch (err) {
    console.log('---getPostBySlug---');
    console.log('err')
  }
}

export const getAllSlug = async (limit: number = 100) => {
  try {
    const slugs = await client.get({
      //blogsから取得する
      endpoint: 'blogs',
      //取得するフィールドはtitle,slugで、日付順に取得、limitで件数上限を指定
      queries: { fields: 'title,slug', orders: '-publishDate', limit: limit },
    })
    return slugs.contents;
  }
  catch (err) {
    console.log('-- getAllSlug --');
    console.log(err);
  }
}