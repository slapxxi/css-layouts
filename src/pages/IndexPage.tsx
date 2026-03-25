import { Link } from 'react-router-dom';

export const IndexPage = () => {
  return (
    <section>
      <ul className="nav">
        <li>
          <Link to="/about">About</Link>{' '}
        </li>
        <li>
          <Link to="/main">Main Layout</Link>{' '}
        </li>
      </ul>
    </section>
  );
};
