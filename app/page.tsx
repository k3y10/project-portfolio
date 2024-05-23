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
      <h1 className="text-2xl font-semibold tracking-tighter mb-4">About Me</h1>
        <p className="mb-4">
          {`I'm a dynamic technical leader with 8+ years of experience, previously at Tesla, transitioning from self-taught hacking and full-stack web development to spearheading innovations in cryptography, blockchain technology, quantum laser communication, and embedded AI software. My journey began in cybersecurity and software development, where I bootstrapped platforms and security teams for startups across various funding stages. With a keen eye for design and user experience, I have also honed my skills in UX/UI, ensuring that the products I develop are not only technically sound but also intuitive and user-friendly. My expertise spans creating seamless interfaces and engaging user experiences that enhance product adoption and satisfaction.`}
        </p>
        <p className="mb-4">
          {`Today, I lead groundbreaking efforts at the forefront of technology, developing new theoretical working models for quantum laser communication solutions and advancing embedded AI software-related products to redefine industry standards across various platforms.`}
        </p>
        <p className="mb-4">
          {`In addition to my technical prowess, I am a DeFi Philosopher, Darknet Investigator, Independent Quantum Theorist, and Ethical Hacker. I am passionate about freedom and entrepreneurship, and I actively engage in these areas to push the boundaries of what is possible. As a Type 1 Diabetic Athlete, I balance my demanding professional life with rigorous physical activity, demonstrating resilience and dedication in all aspects of my life. Born and raised in the SLC Underground, my unconventional background fuels my innovative approach to solving complex problems.`}
        </p>
      <div className="my-8">
      <h1 className="text-2xl font-semibold tracking-tighter mb-4">Portfolio</h1>
        <BlogPosts />
      </div>
    </section>
  );
}
