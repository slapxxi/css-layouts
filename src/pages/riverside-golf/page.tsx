import pic1 from '~/pages/riverside-golf/assets/pic-1.png';
import pic2 from '~/pages/riverside-golf/assets/pic-2.png';
import pic3 from '~/pages/riverside-golf/assets/pic-3.png';
import pic4 from '~/pages/riverside-golf/assets/pic-4.png';
import cart1 from '~/pages/riverside-golf/assets/cart-1.png';
import cart2 from '~/pages/riverside-golf/assets/cart-2.png';
import cart3 from '~/pages/riverside-golf/assets/cart-3.png';
import Logo from '~/pages/riverside-golf/assets/logo.svg?react';
import ArrowRight from '~/pages/riverside-golf/assets/arrow-right.svg?react';
import ArrowLeft from '~/pages/riverside-golf/assets/arrow-left.svg?react';
import Play from '~/pages/riverside-golf/assets/play.svg?react';

const navLinks = [
  { name: 'Golf', href: '#' },
  { name: 'Club House', href: '#' },
  { name: 'Membership', href: '#' },
  { name: 'Inquiry', href: '#' },
];

export const RiversideGolfPage = () => {
  return (
    <div
      className="grid min-h-screen auto-rows-[50px_auto] grid-cols-[minmax(0,1fr)_minmax(auto,1200px)_minmax(0,1fr)] grid-rows-[auto]
      gap-4 selection:bg-[#104D1B]/80 selection:text-white"
    >
      <header className="col-2 flex items-center justify-between gap-2 bg-white py-2 text-black">
        <div className="flex items-center gap-2">
          <Logo className="size-4" />
          <a href="#" className="text-lg text-inherit no-underline">
            RiverSide
          </a>
        </div>
        <nav>
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-inherit no-underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#" className="text-inherit no-underline">
          Contact Us
        </a>
      </header>

      {/* hero */}
      <div className="col-span-full row-3 grid grid-cols-subgrid content-start gap-y-10 bg-white">
        {/* hero copy */}
        <div className="col-2 grid grid-cols-[3fr_minmax(0,40px)_2fr] grid-rows-[auto_2fr_1fr] content-start justify-between gap-y-4 self-start">
          <div className="flex items-center gap-1">
            <Logo className="size-3" />
            <span>Golf Course</span>
          </div>
          <h2 className="col-1 row-span-2 self-center text-7xl">
            Master the Art of Golf at Riverside
          </h2>
          <p className="col-3 max-w-[460px] self-end text-sm text-gray-700">
            Experience world-class golf courses, top-tier facilities, and
            personalized lessons for every skill level. Join us and elevate your
            game in a serene and professional environment.
          </p>
          <div className="col-3 flex flex-wrap gap-2 self-start">
            <button className="inline-grid grid-cols-[20px_1fr_20px] items-center gap-1 rounded-full bg-[#104D1B] p-2 text-white">
              <span className="col-2">Book a Time</span>
            </button>
            <button className="inline-grid grid-cols-[20px_1fr_20px] items-center gap-1 rounded-full border border-[#104D1B] p-2 text-[#104D1B]">
              <span className="col-2">Membership</span>
            </button>
          </div>
        </div>
        {/* hero slider*/}
        <div className="snap col-span-3 overflow-auto">
          <div className="mx-2 grid w-max auto-cols-fr grid-flow-col grid-rows-[460px] items-center gap-2">
            <img src={pic2} alt="" className="h-full w-full object-cover" />
            <img src={pic3} alt="" className="h-full w-full object-cover" />
            <img src={pic4} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>

      {/* copy 1 */}
      <div className="col-2 row-5 grid grid-cols-[2fr_3fr] gap-x-4 gap-y-8">
        <img src={pic1} alt="" className="row-span-5 h-full object-cover" />
        <div className="flex items-center gap-2 self-end">
          <Logo className="size-3" />
          <span>About Us</span>
        </div>
        <h2 className="-mt-6 self-center text-5xl leading-[36px]">
          Golf in Perfect
        </h2>
        <h2 className="-mt-6 self-center justify-self-end text-5xl leading-[36px]">
          Harmony with Nature
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,140px),1fr))] gap-2">
          <div>
            <img
              src={cart1}
              alt=""
              className="aspect-[3/4] w-full object-cover"
            />
            <span>[01]</span>
          </div>
          <div>
            <img
              src={cart2}
              alt=""
              className="aspect-[3/4] w-full object-cover"
            />
            <span>[02]</span>
          </div>
          <div>
            <img
              src={cart3}
              alt=""
              className="aspect-[3/4] w-full object-cover"
            />
            <span>[03]</span>
          </div>
        </div>
        <p className="mb-4 self-end text-sm text-gray-700">
          Riverside Golf Club, nestled in Bogor, Indonesia, features a stunning
          18-hole par 72 championship course designed by golf legend Greg
          Norman. Set along the scenic Cikeas River, it offers an exhiliratting
          golfing experience amidst lush greenery . Relax afterward in our
          award-winning clubhouse and enjoy umatched hospitality.
        </p>
      </div>

      {/* map */}
      <div
        className="relative col-2 row-7 grid grid-cols-[minmax(0,auto)_minmax(0,auto)_minmax(0,auto)] gap-y-4 
      bg-linear-to-b from-[#0C4317] to-[#083212] p-4 text-green-50"
      >
        <div className="text-3xl">
          [01/<span className="text-green-200/50">08</span>]
        </div>
        <div className="col-3 justify-self-end text-right">
          <ul className="grid gap-1 text-sm">
            <li className="text-xl">The Course</li>
            <li className="text-green-300/40">Driving Range</li>
            <li className="text-green-300/40">Lessons</li>
            <li className="text-green-300/40">Rates &amp; Fees</li>
          </ul>
        </div>
        <div className="col-span-full mask-r-from-80% mask-l-from-80%">
          <ol className="grid grid-flow-col place-items-center gap-2">
            <li>13th</li>
            <li>14th</li>
            <li>15th</li>
            <li>16th</li>
            <li className="rounded-xs bg-white px-3 py-1 text-green-800">
              1st Hole
            </li>
            <li>2nd</li>
            <li>3rd</li>
            <li>4th</li>
            <li>5th</li>
          </ol>
        </div>
        <div className="col-[1/4] row-3 max-w-[500px] place-self-center py-8">
          <img src={pic2} alt="" className="h-full w-full object-cover" />
        </div>
        <button className="col-[1/4] row-3 origin-center -rotate-[20deg] place-self-center rounded-full bg-white p-5 text-green-800">
          <Play className="size-8 translate-x-0.5" />
        </button>
        <p className="col-span-2 max-w-[440px] text-sm text-green-200/90">
          A challenging hole above the river, tough to reach in two shots. Aim
          for the right side of the fairway near the bunkers for a better lnding
          area, and play the second shot short of the greenside bunkers.
        </p>
        <div className="bottom-4 col-3 row-4 flex gap-4 place-self-end">
          <button className="rounded-full border border-white p-4">
            <ArrowLeft className="size-8" />
          </button>
          <button className="rounded-full border border-white p-4">
            <ArrowRight className="size-8" />
          </button>
        </div>
      </div>

      <footer className="col-span-full row-9 grid grid-cols-subgrid bg-gray-100">
        <div className="col-2 grid grid-cols-[repeat(auto-fill,minmax(min(100%,140px),1fr))] gap-2 py-4 pt-8">
          <div className="col-1 row-1">
            <div className="flex gap-2 items-center">
              <Logo className="size-6" />
              <span className="text-2xl">RiverSide</span>
            </div>
          </div>

          <div className="-col-5 justify-self-end">
            <h3 className="text-xl">About Us</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-700 no-underline">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 no-underline">
                  Vision and Mission
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 no-underline">
                  Course Designer
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 no-underline">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          <div className="-col-4 justify-self-end">
            <h3 className="text-xl">Golf</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-700 no-underline">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 no-underline">
                  Vision and Mission
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 no-underline">
                  Course Designer
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 no-underline">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          <div className="-col-3 justify-self-end">
            <h3 className="text-xl">Membership</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-700 no-underline">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 no-underline">
                  Vision and Mission
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 no-underline">
                  Course Designer
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 no-underline">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          <div className="-col-2 justify-self-end">
            <h3 className="text-xl">Facilities</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-700 no-underline">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 no-underline">
                  Vision and Mission
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 no-underline">
                  Course Designer
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 no-underline">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          <nav className="col-span-3 text-sm min-h-[100px] grid">
            <ul className="flex gap-6 flex-wrap self-end">
              <li>
                <a href="#" className="text-inherit no-underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-inherit no-underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-inherit no-underline">
                  Classes
                </a>
              </li>
              <li>
                <a href="#" className="text-inherit no-underline">
                  Programs
                </a>
              </li>
              <li>
                <a href="#" className="text-inherit no-underline">
                  Community
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="col-span-full h-[2px] bg-gray-800/5"></div>

        <div className="col-2 text-sm text-gray-600/70 py-4 flex flex-wrap justify-between items-center">
          <small>Riverside Golf Club &copy; 2026. All Rights Reserved</small>
          <div className="text-xs flex gap-4 items-center flex-wrap">
            <a href="#" className="text-inherit no-underline">
              Privacy &amp; Policy
            </a>
            <a href="#" className="text-inherit no-underline">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
