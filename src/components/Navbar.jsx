import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="w-24 h-screen bg-gray-900 text-white fixed left-0 top-0 flex flex-col p-4 items-center space-y-5">
      <img src="/src/assets/logo.svg" alt="Logo" className="w-12 h-12" />
      <div className="h-1 w-full border-b border-solid border-purple-200"></div>
      <Link
        to="/"
        className={`p-3 rounded-lg ${location.pathname === '/' ? 'bg-purple-700' : 'hover:bg-purple-700'}`}
      >
        <img src="/src/assets/combat-light.svg" alt="Combat" className="w-7 h-7" />
      </Link>
      <Link
        to="/enemies"
        className={`p-3 rounded-lg ${location.pathname === '/enemies' ? 'bg-purple-700' : 'hover:bg-purple-700'}`}
      >
        <img src="/src/assets/enemy-light.svg" alt="Enemy" className="w-7 h-7" />
      </Link>
    </nav>
  );
}

export default Navbar;
