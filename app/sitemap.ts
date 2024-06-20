import { getBlogPosts } from 'app/portfolio/utils';
import { getDesignPosts } from 'app/design/utils';

export const baseUrl = 'https://portfolio-blog-starter.vercel.app';

export default async function sitemap() {
  let posts = getBlogPosts().map((post) => ({
    url: `${baseUrl}/portfolio/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let design = getDesignPosts().map((design) => ({
    url: `${baseUrl}/design/${design.slug}`,
    lastModified: design.metadata.publishedAt,
  }));

  let routes = ['', '/portfolio', '/design'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...posts, ...design];
}
