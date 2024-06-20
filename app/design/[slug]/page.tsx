import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getDesignPosts } from 'app/design/utils'
import { baseUrl } from 'app/sitemap'

export async function generateStaticParams() {
  let design = getDesignPosts()

  return design.map((design) => ({
    slug: design.slug,
  }))
}

export function generateMetadata({ params }) {
  let design = getDesignPosts().find((design) => design.slug === params.slug)
  if (!design) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = design.metadata
  let ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/design/${design.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Blog({ params }) {
  let design = getDesignPosts().find((design) => design.slug === params.slug)

  if (!design) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'DesignPosting',
            headline: design.metadata.title,
            datePublished: design.metadata.publishedAt,
            dateModified: design.metadata.publishedAt,
            description: design.metadata.summary,
            image: design.metadata.image
              ? `${baseUrl}${design.metadata.image}`
              : `/og?title=${encodeURIComponent(design.metadata.title)}`,
            url: `${baseUrl}/design/${design.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {design.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(design.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose">
        <CustomMDX source={design.content} />
      </article>
    </section>
  )
}
