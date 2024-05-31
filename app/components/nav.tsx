import Link from 'next/link';

const navItems = {
  '/': {
    name: 'about',
  },
  '/portfolio': {
    name: 'portfolio',
  },
  '/design': {
    name: 'design',
  },
  'https://calendly.com/k3yt3n/interviews': {
    name: 'schedule',
  },
};

export function Navbar() {
  return (
    <aside className="mb-16 tracking-tight text-center">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex justify-center items-center relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-4">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-1 px-2"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
