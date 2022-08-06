
export const PrevNextPost = (allSlugs: any, currentSlug: any) => {
  //投稿の全件数のindex
  const numberOfPosts = allSlugs.length;

  //cb関数の条件に合う最初の要素の位置[index]を返す
  const index = allSlugs.findIndex(
    (Slug: any) => Slug.slug === currentSlug,
  );
  const prevPost =
    //最後の投稿か？
    index + 1 === numberOfPosts ? { title: '', slug: '' } : allSlugs[index + 1];

  const nextPost =
    index === 0 ? { title: '', slug: '' } : allSlugs[index - 1];
  return (
    [prevPost, nextPost]
  )
}

