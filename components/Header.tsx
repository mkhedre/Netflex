// @ts-ignore
import { FiSearch } from 'react-icons/fi';
// @ts-ignore
import { BsFillBellFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <header
      className={`container p-3 m-auto ${
        isScrolled && ' bg-gray-500 text-black'
      }`}
    >
      <div className="flex items-center justify-between ">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="object-contain cursor-pointer"
        />
        <ul className="hidden space-x-5 capitalize md:flex ">
          <li className="headerlink">home</li>
          <li className="headerlink">tv shows</li>
          <li className="headerlink">movies</li>
          <li className="headerlink">new & popular</li>
          <li className="headerlink">my list</li>
        </ul>
        <div className="flex space-x-2 lg:space-x-7">
          <FiSearch />
          <BsFillBellFill />
        </div>
      </div>
    </header>
  );
};

export default Header;
