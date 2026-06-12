import { getCollection, type CollectionEntry } from "astro:content";

export const blogLocales = ["ja", "en"] as const;

export type BlogLocale = (typeof blogLocales)[number];
export type BlogPost = CollectionEntry<"blog">;

export const isBlogLocale = (value: string | undefined): value is BlogLocale =>
  blogLocales.some((locale) => locale === value);

const isPublished = (post: BlogPost) => import.meta.env.DEV || !post.data.draft;

export const getBlogPosts = async (lang: BlogLocale): Promise<BlogPost[]> => {
  const posts = await getCollection(
    "blog",
    (post) => post.data.lang === lang && isPublished(post),
  );

  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
};

export const getAllBlogPosts = async (): Promise<BlogPost[]> => {
  const posts = await getCollection("blog", isPublished);

  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
};

export const getBlogPost = async (
  lang: BlogLocale,
  slug: string,
): Promise<BlogPost | undefined> => {
  const posts = await getBlogPosts(lang);
  return posts.find((post) => post.data.slug === slug);
};

export const formatBlogDate = (date: Date, lang: BlogLocale): string =>
  new Intl.DateTimeFormat(lang === "ja" ? "ja-JP" : "en-US", {
    dateStyle: "long",
  }).format(date);
