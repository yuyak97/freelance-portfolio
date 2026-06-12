import { getCollection } from "astro:content";
import rss from "@astrojs/rss";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: "yuyak",
    description: "This is a portfolio site",
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.id}/`,
    })),
  });
}
