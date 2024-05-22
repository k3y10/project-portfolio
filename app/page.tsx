import { BlogPosts } from 'app/components/posts';
import Image from 'next/image'; // If using Next.js's Image component
import profilePic from 'public/profile.jpg'

export default function Page() {
  return (
    <section>
      <div className="flex items-center mb-8">
        <div className="w-16 h-16 mr-4">
          <Image
            src={profilePic}
            alt="Profile Picture"
            className="rounded"
            width={64}
            height={64}
            layout="fixed"
          />
        </div>
      </div>
      <p className="mb-4">
      <h1 className="text-2xl font-semibold tracking-tighter mb-4">About me</h1>

        {`I'm a dynamic technical leader with 8+ years of experience, previously at Tesla, transitioning from self-taught hacking and full-stack web development to spearheading innovations in cryptography, blockchain technology, quantum laser communication, and embedded AI software. My journey began in cybersecurity and software development, where I bootstrapped platforms and security teams for startups across various funding stages. Today, I lead groundbreaking efforts at the forefront of technology, developing new theoretical working models for quantum laser communication solutions and advancing embedded AI software-related products to redefine industry standards across various platforms.`}
      </p>

      
      <div className="my-8">
      <h1 className="text-2xl font-semibold tracking-tighter mb-4">Portfolio</h1>
        <BlogPosts />
      </div>
    </section>
  );
}
