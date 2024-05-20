import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Portofilio',
  description: 'dia-dmv-ais Projects',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Tech Portfolio</h1>
      <BlogPosts />
    </section>
  )
}
