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

export const getAllPosts = async (limit: number = 100) => {
  try {
    const posts = await client.get({
      endpoint: 'blogs',
      queries: { fields: 'title,slug,eyecatch', orders: '-publishDate', limit: limit },
    })
    return posts.contents;
  }
  catch (err) {
    console.log('-- getAllPosts --');
    console.log(err);
  }
}

export const getAllCategories = async (limit: number = 100) => {
  try {
    const categories = await client.get({
      endpoint: 'categories',
      queries: {
        fields: 'name,id,slug',
        limit: limit,
      },
    })
    return categories.contents;
  } catch (err) {
    console.log('--getAllCategories--');
    console.log(err);
  }
}
export const getAllPostsByCategory = async (catID: string, limit: number = 100) => {
  try {
    const posts = await client.get({
      endpoint: 'blogs',
      queries: {
        filters: `categories[contains]${catID}`,
        fields: 'title,slug,eyecatch',
        orders: '-publishDate',
        limit: limit
      },
    })
    return posts.contents;
  }
  catch (err) {
    console.log('-- getAllPostsByCategory --');
    console.log(err);
  }
}
