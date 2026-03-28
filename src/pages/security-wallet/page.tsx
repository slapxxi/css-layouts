// assets
import ArrowRight from '~/assets/arrow-right.svg?react';
import Blob from '~/pages/security-wallet/assets/blob.svg?react';
import pic1 from '~/pages/security-wallet/assets/pic-1.jpg';
// config
import { links } from '~/pages/security-wallet/config';
// styles
import './styles/index.css';

export const SecurityWalletPage = () => {
  return (
    <div
      className="relative grid min-h-screen grid-cols-[1fr_minmax(auto,1200px)_1fr] 
    grid-rows-[auto_auto_1fr] content-start gap-4 overflow-hidden bg-[#090210] text-white"
    >
      <header className="z-10 col-2 flex items-center justify-between py-8 gap-2">
        <div className="text-lg font-bold">Security Wallet</div>
        <nav className="cs-button cs-button-sm self-center">
          <ul className="flex flex-wrap items-center justify-evenly gap-4 px-4">
            {links.map((link) => (
              <li
                key={link.name}
                className={`${link.active ? 'cs-button cs-button-sm' : ''}`}
              >
                <a href={link.href} className="text-inherit no-underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="cs-button">Secuirty Swap</button>
      </header>

      <div className="z-10 col-2 grid max-w-[800px] content-center gap-8 justify-self-center text-center">
        <h3 className="mx-auto inline-flex items-center gap-4 text-xl">
          <span>Nova secures pre-Series A funding</span>
          <ArrowRight className="size-5" />
        </h3>
        <h2 className="cs-text self-center text-6xl">
          The First Multichain Crypto Wallet with Chat to Pay
        </h2>
        <p className="mx-auto max-w-[600px] text-white/80">
          Secury Wallet is a Multichain Ecosystem featuring a secure wallet Chat
          to Pay lightning-fast transactions, a Multichain DEX, and powerful
          DeFi tools.
        </p>
        <button className="cs-button cs-button-lg inline-grid grid-cols-[minmax(0,14px)_auto_24px_minmax(0,14px)] items-center gap-2 self-end justify-self-center">
          <span className="col-2">Start Tracking For</span>
          <ArrowRight className="col-3 h-full w-full" />
        </button>
      </div>

      <div className="cs-blob col-[2/3] row-[1/2] -translate-x-1/2 -rotate-10 self-start">
        <Blob id="ellipse" className="h-full w-full overflow-visible" />
      </div>
      <div className="cs-blob col-[2/3] row-[1/2] translate-x-1/2 rotate-10 justify-self-end">
        <svg className="h-full w-full overflow-visible">
          <use href="#ellipse" />
        </svg>
      </div>
      <div className="cs-blob col-[2/3] row-[1/2] w-[340px] translate-y-1/12 self-end justify-self-center">
        <svg className="h-full w-full overflow-visible">
          <use href="#ellipse" />
        </svg>
      </div>

      <img
        src={pic1}
        alt=""
        className="col-2 w-full max-w-[600px] -translate-x-[5px] self-end justify-self-center"
      />
    </div>
  );
};
