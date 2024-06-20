import React from 'react';
import { DesignPosts } from 'app/components/posts';

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center p-4">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter text-center">Figma Prototypes</h1>
      <div className="w-full flex justify-center">
        <DesignPosts />
      </div>
    </section>
  );
}

