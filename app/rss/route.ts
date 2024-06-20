import { baseUrl } from 'app/sitemap';
import { getBlogPosts } from 'app/portfolio/utils';
import { getDesignPosts } from 'app/design/utils';

export async function GET() {
  let portfolioPosts = await getBlogPosts();
  let designPosts = await getDesignPosts();

  // Combine both portfolio and design posts with their respective types
  const allPosts = [
    ...portfolioPosts.map((post) => ({ ...post, type: 'portfolio', slug: post.slug })),
    ...designPosts.map((design) => ({ ...design, type: 'design', slug: design.slug }))
  ];

  // Generate XML for each post
  const itemsXml = allPosts
    .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
    .map(
      (post) =>
        `<item>
          <title>${post.metadata.title}</title>
          <link>${baseUrl}/${post.type}/${post.slug}</link>
          <description>${post.metadata.summary || ''}</description>
          <pubDate>${new Date(post.metadata.publishedAt).toUTCString()}</pubDate>
        </item>`
    )
    .join('\n');

  // Combine all items into an RSS feed
  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>My Portfolio</title>
        <link>${baseUrl}</link>
        <description>This is my portfolio RSS feed</description>
        ${itemsXml}
    </channel>
  </rss>`;

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}
