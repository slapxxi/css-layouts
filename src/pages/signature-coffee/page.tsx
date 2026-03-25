// static
import pic1 from '~/pages/signature-coffee/assets/pic-1.png';
import pic2 from '~/pages/signature-coffee/assets/pic-2.png';
import pic3 from '~/pages/signature-coffee/assets/pic-3.png';
import pic4 from '~/pages/signature-coffee/assets/pic-4.png';
import ArrowRight from '~/pages/signature-coffee/assets/arrow_right.svg?react';

export const SignatureCoffeePage = () => {
  return (
    <div className="grid min-h-screen grid-cols-[auto_1fr_auto] grid-rows-[auto_1fr] gap-6 [&>*]:col-2">
      <header className="grid gap-1 py-3.5">
        <div className="grid grid-cols-3 items-end">
          <h3 className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="size-4 shrink-0">
              <circle cx="50%" cy="50%" r="12" fill="orange" />
              <circle cx="50%" cy="50%" r="5" fill="black" />
            </svg>
            <span>Comfortable Coffee Shop in - Jakarta</span>
          </h3>

          <h2 className="justify-self-center font-serif text-2xl italic">
            Sumimasen
          </h2>

          <ul className="grid grid-cols-[auto_minmax(0,40px)_auto] justify-self-end">
            <li className="w-max">
              <a href="#" className="text-black">
                Register Now
              </a>
            </li>
            <li className="col-3">
              <a href="#" className="text-black">
                Login
              </a>
            </li>
          </ul>
        </div>

        <div className="justify-self-center">
          Delicious coffee - Coworking Space - Event Hosting
        </div>
      </header>

      <main className="overflow-hidden grid gap-10 content-start">
        <h1 className="grid grid-flow-col justify-start text-6xl">
          <span>Signature Coffee</span>
          <span className="text-2xl">(09)</span>
        </h1>

        <div className="overflow-x-auto">
          <div className="grid w-max auto-cols-[minmax(0,300px)_minmax(0,300px)_50px] gap-3">
            <p className="uppercase">
              Cups are brewed from ethical beans, roasted in batches.
            </p>
            <div className="col-1 row-2 grid grid-rows-[minmax(0,350px)]">
              <img src={pic1} alt="" className="h-full w-full object-cover" />
            </div>
            <button className="col-1 row-2 m-4 aspect-square self-start justify-self-end rounded-full bg-black/50">
              <ArrowRight className="col-1 row-[2/4] m-2 size-5 self-start justify-self-end fill-white" />
            </button>
            <div className="col-1 row-2 grid self-end p-2 px-4 text-white">
              <span>Signature Latte - Omaza</span>
              <span>$5,56</span>
            </div>

            <div className="row-2 grid gap-2 grid-rows-[minmax(0,200px)]">
              <img src={pic2} alt="" className="h-full w-full object-cover" />
              <p>
                Every cup is brewed from ehtically sourced beans, roasted in
                small batches, and preapred with precision.
              </p>
            </div>

            <p className="col-[4/6] text-xl max-w-[40ch]">
              Every cup is brewed from ethically sourced beans, roasted in small
              batches, and preapred with precision.
            </p>

            <div className="col-4 row-2 grid grid-rows-[minmax(0,250px)] gap-2">
              <img src={pic3} alt="" className="h-full w-full object-cover" />
              <div className="grid content-start">
                <span>Signature Latte - Omaza</span>
                <span>$5,56</span>
              </div>
            </div>

            <div className="col-5 row-2 grid grid-rows-[minmax(0,200px)] gap-2">
              <img src={pic4} alt="" className="h-full w-full object-cover" />
              <div>Rich chocolate blend with a hint of caramel.</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[1fr_2fr_1fr] gap-6">
          <div className="flex items-center gap-2 self-start">
            <svg viewBox="0 0 24 24" className="size-4 shrink-0">
              <circle cx="50%" cy="50%" r="12" fill="orange" />
              <circle cx="50%" cy="50%" r="5" fill="black" />
            </svg>
            <span>Comfortable Co-working Space</span>
          </div>
          <div className="text-center">
            <h3 className="text-2xl">Good coffee keeps you here</h3>
            <h3 className="text-2xl">
              A comfortable space keeps you productive
            </h3>
          </div>
          <div className="justify-self-end">
            <button className="rounded-full bg-gray-200 px-4 py-2">
              Join Community
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
