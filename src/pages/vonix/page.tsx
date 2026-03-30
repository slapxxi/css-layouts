import pic1 from './assets/pic-1.png';
import pic2 from './assets/pic-2.png';
import GraphUp from '~/assets/graph-up.svg?react';

export const VonixPage = () => {
  return (
    <div className="relative grid min-h-screen grid-cols-[1fr_minmax(auto,1200px)_1fr] grid-rows-[30px_1fr_30px] gap-4 bg-[#f9f6f5]">
      <div className="col-2 row-2 grid grid-cols-[1fr_1fr] grid-rows-2">
        <img
          src={pic1}
          alt=""
          className="w-full max-w-[380px] place-self-center"
        />

        <div className="flex flex-col gap-2 bg-[#f9f6f5]/20 p-4 backdrop-blur-lg">
          <button className="inline-flex items-center gap-2 self-start rounded-full bg-white p-2 px-4 text-sm shadow">
            <GraphUp className="size-4" />
            <span>Analytics</span>
          </button>
          <div className="my-auto space-y-4 self-center">
            <h2 className="max-w-[440px] text-4xl">
              Monitor Portfolio
              <br />
              <em className="font-serif">performance in real time</em>
            </h2>
            <p className="max-w-[340px] text-zinc-900/80">
              Connect your data sources, track portfolio activity, and automate
              investment decisions.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 p-4">
          <button className="inline-flex items-center gap-2 self-start rounded-full bg-white p-2 px-4 text-sm shadow">
            <GraphUp className="size-4" />
            Risk Scoring
          </button>
          <div className="my-auto space-y-4 self-center">
            <h2 className="max-w-[440px] text-4xl">
              Evaulate and score every
              <br />
              <em className="font-serif">applicant instantly</em>
            </h2>
            <p className="max-w-[340px] text-zinc-900/80">
              Analyze applicant data quickly, generate reliable scores, and
              support smarter decisions.
            </p>
          </div>
        </div>

        <img
          src={pic2}
          alt=""
          className="w-full max-w-[380px] place-self-center"
        />

        <svg className="pointer-events-none absolute col-[2/3] row-[2/3] h-full w-full self-center overflow-visible">
          <mask id="mask-1">
            <rect x="-10%" y="-10%" width="140%" height="140%" fill="white" />
            <circle r="10" fill="black" id="c-mask" />
            <use href="#c-mask" x="50%" />
            <use href="#c-mask" x="100%" />
            <use href="#c-mask" x="50%" y="50%" />
            <use href="#c-mask" y="100%" x="50%" />
          </mask>

          <circle r="3" id="circle" />
          <use href="#circle" y="50%" x="50%" />
          <use href="#circle" x="50%" />
          <use href="#circle" x="100%" />
          <use href="#circle" y="100%" x="50%" />

          <g transform="translate(0,-.5)">
            <rect x="-20" width="20" height="1" mask="url(#mask-1)" />
            <rect width="100%" height="1" mask="url(#mask-1)" />
            <rect width="100%" height="1" y="100%" mask="url(#mask-1)" />
            <rect x="0" y="50%" width="100%" height="1" mask="url(#mask-1)" />
            <rect x="100%" width="20" height="1" mask="url(#mask-1)" />
          </g>

          <g transform="translate(-.5)">
            <rect y="-20" width="1" height="20" mask="url(#mask-1)" />
            <rect x="100%" y="-20" width="1" height="20" mask="url(#mask-1)" />
            <rect x="0" y="0" width="1" height="100%" mask="url(#mask-1)" />
            <rect x="50%" width="1" height="100%" mask="url(#mask-1)" />
            <rect x="100%" width="1" height="100%" mask="url(#mask-1)" />
          </g>
        </svg>
      </div>
    </div>
  );
};
