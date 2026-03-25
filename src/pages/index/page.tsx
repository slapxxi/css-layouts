import { Link } from 'react-router-dom';

export const IndexPage = () => {
  return (
    <section className="grid min-h-screen place-content-center gap-2">
      <div>
        <h2 className="text-center text-base font-bold">Nav</h2>
        <ul className="nav">
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-center text-base font-bold">Layouts</h2>
        <ul className="nav">
          <li>
            <Link to="/signature-coffee">Signature Coffee</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
