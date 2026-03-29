import Burger from '~/assets/burger.svg?react';
import person1 from '~/assets/person-1.png';
import person2 from '~/assets/person-2.png';
import chair1 from './assets/chair-1.png';
import chair2 from './assets/chair-2.png';
import person3 from '~/assets/person-3.png';
import Search from '~/assets/search.svg?react';
import User from '~/assets/user.svg?react';
import Logo from './assets/logo.svg?react';
import './styles/index.css';

export const AshleyHomestorePage = () => {
  return (
    <div className="grid min-h-screen grid-cols-[1fr_minmax(auto,1200px)_1fr] grid-rows-[28px_auto_64px_1fr] gap-x-2 bg-(--bg)">
      <header className="col-2 row-2 grid grid-cols-3 flex-wrap items-center gap-0 self-center">
        <nav className="flex flex-wrap gap-1">
          <button className="ah-button">
            <Burger className="size-5" />
          </button>
          <div className="inline-flex flex-wrap items-center gap-1">
            <button className="ah-button ah-button-active">Home</button>
            <button className="ah-button">Category</button>
            <button className="ah-button">About Us</button>
          </div>
        </nav>

        <div className="inline-grid grid-cols-[auto_3fr_1fr] gap-0.5 justify-self-center">
          <Logo className="size-6 self-end" />
          <h2 className="col-span-2 -mb-2 flex items-end self-end font-[--serif] text-2xl leading-snug font-semibold">
            Ashley <span className="mb-1.5 text-[4px]">&copy;</span>
          </h2>
          <h3 className="col-[1/3] justify-self-end text-[9px] font-medium uppercase">
            Homestore
          </h3>
        </div>

        <nav className="flex flex-wrap justify-end gap-1 justify-self-end">
          <div className="ah-button flex items-center gap-1">
            <div className="inline-flex">
              <img src={person1} className="ah-avatar size-8" alt="" />
              <img src={person2} className="ah-avatar -ml-3 size-8" alt="" />
              <img src={person3} className="ah-avatar -ml-3 size-8" alt="" />
            </div>
            <span>+15K Customers</span>
          </div>
          <div className="flex gap-1">
            <button className="ah-button self-center p-2">
              <User className="size-5 overflow-visible" />
            </button>
            <button className="ah-button self-center p-2">
              <Search className="size-5 scale-90 overflow-visible" />
            </button>
          </div>
        </nav>
      </header>

      <div className="col-2 row-4 grid grid-cols-[1fr_1.1fr_1fr] grid-rows-[auto_1fr] gap-4 self-start">
        <h2 className="col-[1/3] row-1 text-9xl text-[clamp(20px,20vw,140px)] leading-normal font-bold">
          Stylish
        </h2>

        <h2 className="col-[2/4] row-3 self-end justify-self-end text-[clamp(20px,16vw,140px)] font-bold">
          Furniture
        </h2>

        <div className="col-1 grid gap-4 self-start">
          <p className="text-sm">
            Thoughtfully designed furniture that blends comfort, craftsmanship,
            and timeless style-made for today's spaces.
          </p>
          <button className="ah-button ah-button-active justify-self-start px-6 py-4">
            Discover More
          </button>
        </div>

        <img
          src={chair1}
          alt=""
          className="squircle col-1 row-3 m-4 max-w-[200px] mt-20"
        />

        <img
          src={chair2}
          alt=""
          className="squircle col-2 row-[1/4] self-center"
        />

        <div className="col-3 row-[1/3] grid content-start gap-6 justify-self-end bg-linear-to-l from-(--bg)/90 to-(--bg)/20 p-2 backdrop-blur-lg">
          <nav>
            <ul className="inline-grid gap-2 text-3xl font-semibold">
              <li>
                <a
                  href="#"
                  className="text-(--text) no-underline hover:text-black"
                >
                  Dining
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black no-underline hover:text-black"
                >
                  Office
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-(--text) no-underline hover:text-black"
                >
                  Bedroom
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-(--text) no-underline hover:text-black"
                >
                  Living Room
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-(--text) no-underline hover:text-black"
                >
                  Lighting
                </a>
              </li>
            </ul>
          </nav>
          <div className="grid gap-2">
            <img src={person1} alt="" className="ah-avatar size-12" />
            <p className="text-sm">
              We finally found furniture that's both stylish and comfortable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
