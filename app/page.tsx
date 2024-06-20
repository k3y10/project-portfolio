import { BlogPosts } from 'app/components/posts';
import Image from 'next/image'; // If using Next.js's Image component
import profilePic from 'public/profile.jpg';

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center p-4">
      <div className="flex items-center mb-8">
        <div className="w-16 h-16">
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
      <div className="text-center">
        <h1 className="text-2xl font-semibold tracking-tighter mb-4">About Me</h1>
        <p className="mb-4">
          {`I'm a dynamic technical leader with 8+ years of experience, previously at Tesla, transitioning from self-taught hacking and full-stack web development to innovations in cryptography, blockchain technology, quantum laser communication, and embedded AI software. My journey began in cybersecurity and software development, bootstrapping platforms and security teams for startups. I have a keen eye for design and user experience, ensuring that products are both technically sound and user-friendly.`}
        </p>
        <p className="mb-4">
          {`Currently, I lead groundbreaking efforts in developing theoretical models for quantum laser communication and advancing embedded AI software to redefine industry standards. As a DeFi Philosopher, Darknet Investigator, Independent Quantum Theorist, and Ethical Hacker, I push the boundaries of technology while balancing my professional life with rigorous physical activity as a Type 1 Diabetic Athlete.`}
        </p>
        <p className="mb-4">
          {`Born and raised in the SLC Underground, my unconventional background fuels my innovative approach to solving complex problems. I rejected traditional education early, teaching myself programming and cybersecurity, which led to a role at Tesla. After leaving Tesla, I co-founded iDeFi.AI, pioneering blockchain and Web3 tech with AI-driven security solutions.`}
        </p>
        <p className="mb-4">
          {`I have developed AI-driven security solutions, advanced quantum laser communication, and built blockchains from scratch. Despite the complexities of the digital realm, my passion for the outdoors remains. Whether scaling mountain peaks or exploring wilderness, nature and technology inspire me.`}
        </p>
        <p className="mb-4">
          {`Standing on the edge of tomorrow, I embrace the limitless potential of technology. Let’s disrupt the norm and innovate together, where the synergy of nature and tech defines true progress.`}
        </p>
        <p className="mb-4">
          {`My goal is to make Utah a better place for current and future generations.`}
        </p>
      </div>
      <div className="my-8 w-full flex flex-col items-center">
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter text-center">Tech Portfolio</h1>
        <div className="w-full flex justify-center">
          <BlogPosts />
        </div>
      </div>
    </section>
  );
}
