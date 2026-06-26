import ArrowRight from '~/assets/arrow-right.svg?react';

export const BrooksPage = () => {
  return (
    <div className="grid min-h-screen grid-cols-[1fr_minmax(auto,1290px)_1fr] grid-rows-[auto_1fr] gap-x-4 bg-orange-400 text-white">
      <header className="col-span-full grid grid-cols-subgrid self-start border-b border-b-white/30">
        <div className="col-2 flex items-center justify-between gap-4 py-4">
          <a
            href="#"
            className="text-lg font-bold text-inherit uppercase no-underline"
          >
            Ethan Brooks
          </a>

          <nav>
            <ul className="flex items-center gap-4">
              <li>
                <a
                  href="#"
                  className="rounded-full border border-white/20 bg-white/30 p-2 px-4 text-inherit no-underline"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-inherit no-underline">
                  About Me
                </a>
              </li>
              <li>
                <a href="#" className="text-inherit no-underline">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-inherit no-underline">
                  Services
                </a>
              </li>
            </ul>
          </nav>

          <button className="self-center rounded-full bg-white p-2 text-black">
            Contact Me
          </button>
        </div>
      </header>

      <div className="col-span-full grid grid-cols-subgrid">
        <div className="col-2 grid grid-cols-[1.4fr_minmax(0,150px)_1fr] grid-rows-3">
          <svg
            className="col-span-full row-[1/3] self-center"
            viewBox="0 0 100 34"
          >
            <text fill="white" y="30" className="text-[32px]">
              Brooks
            </text>
          </svg>

          <h2 className="col-1 row-3 text-7xl font-semibold">
            Bringing Ideas to Life Through Illustration
          </h2>

          <svg
            viewBox="0 0 20 20"
            className="col-3 row-2 size-40 place-self-center overflow-visible"
          >
            <circle cx="50%" cy="50%" r="50%" className="fill-white" />
            <g transform="rotate(-40 10 0) translate(-6 2)">
              <ArrowRight width="8" x="50%" y="-8" fill="black" />
            </g>
            <text
              x="50%"
              y="12"
              className="text-[4px] uppercase"
              textAnchor="middle"
            >
              Let&apos;s
            </text>
            <text
              x="50%"
              y="16"
              className="text-[4px] font-bold uppercase"
              textAnchor="middle"
            >
              Talk
            </text>
          </svg>

          <div className="col-3 row-3 grid grid-cols-2 gap-4 self-center">
            <p className="col-span-full text-xl">
              I create bold digital illustrations, character designs, and visual
              experiences for brands, startups, and creative teams worldwide.
            </p>
            <div className="grid gap-2">
              <span className="text-5xl font-semibold">150+</span>
              <span className="text-lg">Projects Completed</span>
            </div>
            <div className="grid gap-2">
              <span className="text-5xl font-semibold">8+</span>
              <span className="text-lg">Years of Creative Experience</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
