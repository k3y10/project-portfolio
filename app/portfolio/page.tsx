import { BlogPosts } from 'app/components/posts';

export const metadata = {
  title: 'Portfolio',
  description: 'Projects',
};

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center p-4">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter text-center">Project Timelines</h1>
      <div className="w-full flex justify-center">
        <BlogPosts />
      </div>
    </section>
  );
}
