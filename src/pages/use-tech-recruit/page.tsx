import ChevronDown from '~/assets/chevron-down.svg?react';
import SonyLogo from '~/assets/sony.svg?react';
import PlusIcon from '~/assets/plus.svg?react';
import SamsungLogo from '~/assets/samsung.svg?react';
import NvidiaLogo from '~/assets/nvidia.svg?react';
import JJLogo from '~/assets/jj.svg?react';

export const UsaTechRecruitPage = () => {
  return (
    <div className="grid min-h-screen grid-cols-[1fr_minmax(auto,1200px)_1fr] grid-rows-[auto_1fr] gap-x-4 bg-linear-to-br from-blue-700 to-blue-400">
      <header className="col-2 flex items-center gap-4 py-4 text-white">
        <a
          href="#"
          className="inline-grid text-xl text-inherit uppercase no-underline"
        >
          <span className="font-bold">Tech</span>
          <span>Recruit</span>
        </a>

        <nav className="mx-auto max-w-3xl flex-1">
          <ul className="flex gap-4">
            <li className="ml-auto flex items-center gap-2">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-inherit no-underline"
              >
                <span>Job Search</span>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-inherit no-underline"
              >
                <span>Our Sectors</span>
                <ChevronDown />
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-inherit no-underline"
              >
                <span>Client Services</span>
                <ChevronDown />
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-inherit no-underline"
              >
                <span>About Us</span>
                <ChevronDown />
              </a>
            </li>
            <li className="ml-auto flex items-center gap-2">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-inherit no-underline"
              >
                <span>Testimonials</span>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-inherit no-underline"
              >
                <span>Blog</span>
              </a>
            </li>
          </ul>
        </nav>

        <a
          href="#"
          className="inline-block rounded-full bg-white p-4 text-center leading-none text-black no-underline"
        >
          <span>Contact Us</span>
        </a>
      </header>

      <main className="relative col-2 grid grid-cols-4 grid-rows-[1.3fr_50px_1fr] border-t border-t-white/30 text-white">
        <div className="absolute top-0 left-0 size-5 border-t border-l" />
        <div className="absolute top-0 right-0 size-5 border-t border-r" />

        <div className="col-[2/-1] self-end">
          <h2 className="inline-grid text-6xl">
            <PlusIcon className="size-8" />
            <span className="col-2 row-2">Technology Recruitment</span>
          </h2>
        </div>

        <ul className="col-span-full row-3 grid grid-cols-4">
          <li className="border-t border-t-white/50 py-2">
            <span className="uppercase">Automotive Tech</span>
          </li>
          <li className="border-t border-t-white/50 py-2">
            <span className="uppercase">Semiconductor</span>
          </li>
          <li className="border-t border-t-white/50 py-2">
            <span className="uppercase">AI &amp; Machine Learning</span>
          </li>
          <li className="grid grid-cols-2 content-start gap-4 border-t border-t-white/50 py-2">
            <p className="col-span-full">
              As an award winning automotive tech recruiter, we are committed to
              providing you with the best opportunities for growth and career
              advancement.
            </p>
            <a
              href="#"
              className="inline-block rounded-full bg-black p-4 text-center text-white no-underline"
            >
              <span>Employers</span>
            </a>
            <a
              href="#"
              className="inline-block rounded-full bg-white p-4 text-center text-black no-underline"
            >
              <span>Job Seekers</span>
            </a>
          </li>
        </ul>
      </main>

      <div className="col-span-full grid grid-cols-subgrid  bg-black/40  text-white backdrop-blur-md">
        <ul className="col-2 grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] grid-rows-[minmax(100px,auto)] items-center gap-12 mask-x-from-90%">
          <li>
            <SonyLogo className="h-auto w-full" />
          </li>
          <li>
            <NvidiaLogo className="h-auto w-full" />
          </li>
          <li>
            <SamsungLogo className="h-auto w-full" />
          </li>
          <li>
            <JJLogo className="h-auto w-full" />
          </li>
          <li>
            <SonyLogo className="h-auto w-full" />
          </li>
          <li>
            <NvidiaLogo className="h-auto w-full" />
          </li>
        </ul>
      </div>
    </div>
  );
};
