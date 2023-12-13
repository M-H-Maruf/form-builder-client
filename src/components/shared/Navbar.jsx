import { NavLink } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";

const Navbar = () => {
  // active route styling
  const activeLink =
    "text-accent font-bold underline decoration-2 underline-offset-4";

  // navbar routes
  const navLinks = (
    <div className="text-accent opacity-80 flex flex-col lg:flex-row gap-5">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeLink : "text-white")}
      >
        HOME
      </NavLink>
      <NavLink
        to="/editor"
        className={({ isActive }) => (isActive ? activeLink : "text-white")}
      >
        EDITOR
      </NavLink>
      <NavLink
        to="/form"
        className={({ isActive }) => (isActive ? activeLink : "text-white")}
      >
        FORM
      </NavLink>
    </div>
  );

  return (
    <nav className="navbar bg-base-100 h-20">
      <div className="max-w-[1250px] h-full navbar mx-auto p-0">
        <div className="navbar-start h-full">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <RiMenu2Fill className="text-2xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <img className="h-full" src="/logo.png" alt="form craft logo" />
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
