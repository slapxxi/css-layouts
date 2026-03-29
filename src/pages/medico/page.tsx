import ArrowRight from '~/assets/arrow-right.svg?react';
import logo1 from './assets/logo-1.svg';
import logo2 from './assets/logo-2.svg';
import logo3 from './assets/logo-3.svg';
import logo4 from './assets/logo-4.svg';
import person1 from '~/assets/person-1.png';
import person2 from '~/assets/person-2.png';
import person3 from '~/assets/person-3.png';
import logo5 from './assets/logo-5.svg';
import logo6 from './assets/logo-6.svg';
import woman from './assets/woman.png';
import Logo from './assets/logo.svg?react';

export const MedicoPage = () => {
  return (
    <div className="grid min-h-screen grid-cols-[1fr_minmax(auto,1200px)_1fr] grid-rows-[auto_1fr] gap-0.5 bg-zinc-200">
      <div className="bg-white" />
      <header className="col-2 flex flex-wrap items-center justify-between bg-white p-4">
        <div className="flex items-center gap-2">
          <Logo className="size-8" />
          <a href="#" className="font-semiold text-xl text-black no-underline">
            Medico
          </a>
        </div>
        <nav className="rounded-full border border-zinc-500/40 p-1">
          <ul className="flex flex-wrap items-center gap-1 text-sm text-zinc-500/80">
            <li className="rounded-full bg-black p-1.5 px-4">
              <a href="#" className="text-inherit text-white no-underline">
                Home
              </a>
            </li>
            <li className="rounded-full p-1.5 px-4">
              <a href="#" className="text-inherit no-underline">
                Solutions
              </a>
            </li>
            <li className="rounded-full p-1.5 px-4">
              <a href="#" className="text-inherit no-underline">
                Technology
              </a>
            </li>
            <li className="rounded-full p-1.5 px-4">
              <a href="#" className="text-inherit no-underline">
                Pricing
              </a>
            </li>
            <li className="rounded-full p-1.5 px-4">
              <a href="#" className="text-inherit no-underline">
                About
              </a>
            </li>
          </ul>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-white">
          <span>Book a Call</span>
          <ArrowRight className="size-6" />
        </button>
      </header>
      <div className="bg-white" />

      <div className="bg-white" />
      <div className="col-2 grid grid-cols-[2fr_minmax(0,2fr)] grid-rows-[auto_auto_1fr] bg-white">
        <img
          src={woman}
          alt=""
          className="col-[1/4] row-[1/3] h-full overflow-visible mask-b-from-0% object-cover justify-self-end max-w-1/2 object-left"
        />

        <div className="grid gap-4 self-start p-4 col-1 row-1">
          <div className="flex items-center gap-2 justify-self-start rounded-full border border-zinc-300 p-1 text-sm">
            <span className="rounded-full bg-linear-to-r from-red-400 px-1 py-0.5">
              New
            </span>
            Trusted by 45+ expert medical teams
          </div>
          <h2 className="text-6xl">Revolutionizing healthcare with AI</h2>
          <p className="text-lg text-zinc-800">
            Automate your workflow, AI-powered reporting, and real-time decision
            support so your clinical team can do what they were trained to do.
          </p>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-full border border-black bg-black px-4 py-2 text-sm text-white uppercase">
              Start Diagnosis
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm uppercase">
              Talk to AI Doctor
            </button>
          </div>
        </div>

        <div className="z-10 col-[1/3] row-2 grid grid-cols-[auto_minmax(0,100px)_auto] self-end justify-self-end p-2">
          <div className="grid max-w-[180px] gap-2 justify-self-end rounded-xl border-2 border-zinc-200 bg-white p-1.5">
            <img
              src={person3}
              alt=""
              className="aspect-[3/2.2] w-full rounded-lg object-cover"
            />
            <div className="grid">
              <div className="font-semibold">5,000+</div>
              <span className="text-sm text-zinc-500">
                Successful Treatment
              </span>
            </div>
          </div>

          <div className="col-3 flex items-center self-end rounded-full border border-zinc-300 bg-white p-2">
            <div className="flex items-center">
              <img
                src={person1}
                alt=""
                className="size-9 shrink-0 rounded-full border-2 border-white object-cover"
              />
              <img
                src={person2}
                alt=""
                className="size-9 shrink-0 -translate-x-2 rounded-full border-2 border-white object-cover"
              />
              <img
                src={person3}
                alt=""
                className="size-9 shrink-0 -translate-x-4 rounded-full border-2 border-white object-cover"
              />
            </div>
            <div className="w-max">
              <div className="text-sm font-semibold">45+</div>
              <div className="text-sm text-zinc-500">Expert Doctors</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white" />

      <div className="bg-white" />
      <footer className="col-2 grid min-h-[17vh] grid-cols-7 gap-x-0.5 pb-0.5">
        <div className="grid place-content-center bg-white p-4">
          Trusted by medical teams and hospitals
        </div>
        <div className="grid place-content-center bg-white p-2">
          <img src={logo1} className="size-8" />
        </div>
        <div className="grid place-content-center bg-white p-2">
          <img src={logo2} className="size-8" />
        </div>
        <div className="grid place-content-center bg-white p-2">
          <img src={logo3} className="size-8" />
        </div>
        <div className="grid place-content-center bg-white p-2">
          <img src={logo4} className="size-8" />
        </div>
        <div className="grid place-content-center bg-white p-2">
          <img src={logo5} className="size-8" />
        </div>
        <div className="grid place-content-center bg-white p-2">
          <img src={logo6} className="size-8" />
        </div>
      </footer>
      <div className="bg-white" />
    </div>
  );
};
