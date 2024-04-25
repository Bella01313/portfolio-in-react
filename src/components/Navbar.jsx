import React, {useState} from 'react';
import logo from "/images/logo.png";
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="flex items-center justify-between shadow-slate-200 overflow-hidden p-2 bg-orange-100 fixed w-full top-0 z-10 h-24 mb-4">
      <div className="fixed top-0 overflow-hidden w-full mx-auto py-1 flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-24"/>
          <i className="size-[1.5rem] cursor-pointer" aria-hidden="true"></i>
        </div>
        <ul className={"flex " }>
          <li>
          {/* <a href="home" className="px-4">Home</a> */}
          <Link to="/" onClick={toggleMenu} className="px-4">Home</Link>
          </li>
          <li>
            {/* <a href="about" className="px-4">About</a> */}
            <Link to="/about" onClick={toggleMenu} className="px-4">About</Link>
          </li>
          <li>
            {/* <a href="project" className="px-4">Projects</a> */}
            <Link to="/project" onClick={toggleMenu} className="px-4">Projects</Link>
          </li>
          <li>
            {/* <a href="contact" className="px-4">Contact</a> */}
            <Link to="/contact" onClick={toggleMenu} className="px-4">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;