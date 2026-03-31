import ArrowLeft from '~/assets/arrow-left.svg?react';
import ArrowRight from '~/assets/arrow-right.svg?react';
import person1 from '~/assets/person-2.png';
import hero from './assets/hero.jpg';
import house1 from './assets/house-1.jpg';
import house2 from './assets/house-2.jpg';
import house3 from './assets/house-3.jpg';
import house4 from './assets/house-4.jpg';
import house5 from './assets/house-5.jpg';
import house6 from './assets/house-6.jpg';
import house7 from './assets/house-7.jpg';
import './styles/index.css';

export const ArchevaloraPage = () => {
  return (
    <div className="grid grid-cols-[1fr_minmax(auto,1200px)_1fr] gap-x-4">
      <header className="z-10 col-2 row-1 flex flex-wrap items-center gap-2 py-4 font-semibold text-white uppercase">
        <nav>
          <ul className="flex gap-8 text-sm">
            <li>
              <a href="#" className="text-inherit no-underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-inherit no-underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-inherit no-underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <a
          href="#"
          className="flex-1 text-center leading-tight font-bold text-inherit uppercase no-underline"
        >
          Archevalora
        </a>

        <nav>
          <ul className="flex gap-8 text-sm">
            <li>
              <a href="#" className="text-inherit no-underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="text-inherit no-underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-inherit no-underline">
                Gallery
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="relative col-span-full row-[1/4] max-h-screen overflow-hidden">
        <img
          src={hero}
          alt=""
          className="aspect-[3/2] w-full object-cover object-center"
        />
      </div>
      <svg
        viewBox="0 0 135 9"
        className="z-10 col-span-full row-3 w-full fill-white/90 p-2"
      >
        <path d="M0 8.88V.12h1.5v7.368h3.72V8.88zm7.039 0V7.56h1.764V1.44H7.039V.12h5.04v1.32h-1.764v6.12h1.764v1.32zm8.743 0L13.574.12h1.56l1.32 5.712q.108.42.204.9t.144.78q.048-.3.132-.78a21 21 0 0 1 .18-.912l1.308-5.7h1.512l-2.208 8.76zm5.648 0V7.56h1.764V1.44H21.43V.12h5.04v1.32h-1.764v6.12h1.764v1.32zm6.979 0V.12h1.836L32.68 7.2l-.084-.9a45 45 0 0 1-.06-1.068 23 23 0 0 1-.024-.96V.12h1.368v8.76h-1.836L29.633 1.8l.06.84q.036.492.06 1.008t.024.948V8.88zm9.98.12q-.84 0-1.477-.312a2.4 2.4 0 0 1-.972-.9q-.336-.588-.336-1.38V2.592q0-.804.336-1.38.348-.576.972-.888Q37.548 0 38.388 0q.852 0 1.464.324.624.312.972.888t.348 1.38H39.66q0-.624-.336-.948-.324-.324-.936-.324t-.948.324-.336.936v3.828q0 .612.336.948t.948.336.936-.336q.336-.336.336-.948V5.52h-1.488V4.224h3v2.184q0 .792-.348 1.38a2.4 2.4 0 0 1-.972.9Q39.24 9 38.388 9m11.162-.12L51.759.12h1.932l2.22 8.76h-1.536l-.48-2.124h-2.328l-.48 2.124zm2.292-3.348h1.776L53.09 3.18a59 59 0 0 1-.228-1.056 25 25 0 0 1-.132-.696 25 25 0 0 1-.132.696q-.084.468-.228 1.044zm5.395 3.348V.12h2.772q.876 0 1.512.324.648.324 1.008.912.36.576.36 1.368 0 .864-.444 1.524-.432.66-1.176.936l1.74 3.696h-1.68L59.806 5.4h-1.068v3.48zm1.5-4.8h1.272q.636 0 .996-.348t.36-.96q0-.624-.36-.972-.36-.36-.996-.36h-1.272zM67.17 9q-.84 0-1.477-.312a2.4 2.4 0 0 1-.971-.9q-.337-.588-.337-1.38V2.592q0-.804.337-1.38.348-.576.972-.888Q66.33 0 67.169 0q.852 0 1.465.324.623.312.972.888.348.576.348 1.38h-1.512q0-.624-.336-.948-.324-.324-.936-.324t-.948.324q-.337.324-.337.936v3.828q0 .612.337.948.336.324.948.324t.936-.324q.336-.336.336-.948h1.512q0 .78-.348 1.368a2.4 2.4 0 0 1-.972.912Q68.02 9 67.169 9m4.47-.12V.12h1.5v3.516h2.353V.12h1.5v8.76h-1.5V5.028H73.14V8.88zm7.352 0V7.56h1.764V1.44h-1.764V.12h5.04v1.32h-1.764v6.12h1.764v1.32zm8.96 0V1.512h-2.293V.12h6.096v1.392h-2.292V8.88zm5.407 0V.12h5.256v1.308h-3.78v2.28h3.36v1.296h-3.36v2.568h3.78V8.88zm9.787.12q-.84 0-1.476-.312a2.4 2.4 0 0 1-.972-.9q-.336-.588-.336-1.38V2.592q0-.804.336-1.38.348-.576.972-.888.636-.324 1.476-.324.852 0 1.464.324.624.312.972.888t.348 1.38h-1.512q0-.624-.336-.948-.324-.324-.936-.324t-.948.324-.336.936v3.828q0 .612.336.948.336.324.948.324t.936-.324q.336-.336.336-.948h1.512q0 .78-.348 1.368a2.4 2.4 0 0 1-.972.912q-.612.312-1.464.312m6.391-.12V1.512h-2.292V.12h6.096v1.392h-2.292V8.88zm7.952.12q-1.284 0-2.016-.696-.72-.708-.72-1.92V.12h1.512v6.252q0 .624.312.972t.912.348q.588 0 .9-.348.324-.348.324-.972V.12h1.512v6.264q0 1.212-.72 1.92-.72.696-2.016.696m4.507-.12V.12h2.772q.876 0 1.512.324.648.324 1.008.912.36.576.36 1.368 0 .864-.444 1.524-.432.66-1.176.936l1.74 3.696h-1.68l-1.524-3.48h-1.068v3.48zm1.5-4.8h1.272q.636 0 .996-.348t.36-.96q0-.624-.36-.972-.36-.36-.996-.36h-1.272zm5.839 4.8V.12h5.256v1.308h-3.78v2.28h3.36v1.296h-3.36v2.568h3.78V8.88z" />
      </svg>

      <div className="col-span-full grid max-w-[1490px] grid-cols-12 gap-[clamp(2px,2vw,24px)] justify-self-center bg-white p-2">
        <div className="col-span-3 grid gap-2 self-start">
          <img src={house1} alt="" />
          <h3 className="text-sm font-semibold uppercase">Aurelia Residence</h3>
          <p className="text-xs">
            A contemporary private home designed to maximize natural light and
            spatial openness within a compact urban setting.
          </p>
        </div>

        <div className="col-[span_5/-1] grid grid-cols-2 gap-1">
          <img src={house2} alt="" className="col-span-2" />
          <h3 className="text-sm font-semibold uppercase">Solmere Pavilion</h3>
          <p className="text-xs">
            A minimalist pavilion exploring material contrast, transparency, and
            seamless indoor-outdoor connection.
          </p>
        </div>

        <div className="col-[1/span_4] grid grid-cols-2 gap-2 self-end">
          <img src={house3} alt="" className="col-span-2 w-full" />
          <h3 className="text-xs font-semibold uppercase">Viremont Office</h3>
          <p className="text-xs">
            A minimalist pavilion exploring material contrast, transparency, and
            seamless indoor-outdoor connection.
          </p>
        </div>

        <div className="col-[9/span_2] grid gap-1">
          <img src={house6} alt="" />
          <h3 className="text-xs font-semibold uppercase">Solmere Pavilion</h3>
          <p className="text-xs">
            A minimalist pavilion exploring material contrast, transparency, and
            seamless indoor-outdoor connection.
          </p>
        </div>

        <div className="col-[11/span_2] grid gap-1">
          <img src={house7} alt="" />
          <h3 className="text-sm font-semibold uppercase">Solmere Pavilion</h3>
          <p className="text-xs">
            A minimalist pavilion exploring material contrast, transparency, and
            seamless indoor-outdoor connection.
          </p>
        </div>

        <div className="col-[1/span_6] grid grid-cols-2 gap-2">
          <img src={house5} alt="" className="col-span-2 w-full" />
          <h3 className="text-sm font-semibold uppercase">Solmere Pavilion</h3>
          <p className="text-xs">
            A minimalist pavilion exploring material contrast, transparency, and
            seamless indoor-outdoor connection.
          </p>
        </div>
        <div className="col-span-6 grid grid-cols-2 gap-2">
          <img src={house4} alt="" className="col-span-2 w-full" />
          <h3 className="text-xs font-semibold uppercase">Casa Verdanza</h3>
          <p className="text-xs">
            A minimalist pavilion exploring material contrast, transparency, and
            seamless indoor-outdoor connection.
          </p>
        </div>
      </div>

      <div className="col-span-full grid grid-cols-subgrid bg-white py-20">
        <div className="relative col-2 grid grid-cols-[auto_1fr_auto] grid-rows-[1fr_2fr] gap-8">
          <div className="text-sm font-bold">05/</div>

          <h3 className="col-3 justify-self-end text-sm font-semibold uppercase">
            Testimonials
          </h3>

          <img
            src={person1}
            alt=""
            className="aspect-square top-2 w-full max-w-24 sticky object-cover object-top"
          />

          <p className="row-span-2 max-w-prose">
            Working with Archevalora was an excellent experience. The team was
            responsive and knowledgeable, and the design was top-notch. I highly
            recommend this company to anyone looking for a high-quality, modern
            home. Every detail was meticulously thought out, and the overall
            design was stunning.
          </p>

          <div className="flex gap-4 self-start justify-self-end">
            <button>
              <ArrowLeft className="size-6" />
            </button>
            <button>
              <ArrowRight className="size-6" />
            </button>
          </div>

          <div className="col-3 text-right self-end">
            <h4 className="text-xl font-bold uppercase">Daniel Whitmore</h4>
            <div>Managing Director</div>
          </div>
        </div>
      </div>
    </div>
  );
};
