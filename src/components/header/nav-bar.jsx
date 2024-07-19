import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="space-x-5 ">
      <NavLink to={"/"} className={" text-white hover:bg-gray-500 rounded-full px-5 py-2 text-xl"}>Home</NavLink>
      <NavLink to={"/contact"} className={" text-white hover:bg-gray-500 rounded-full px-5 py-2 text-xl"}>Contact</NavLink>
      <NavLink to={"/student"} className={" text-white hover:bg-gray-500 rounded-full px-5 py-2 text-xl"}>Student</NavLink>

    </nav>
  )
}


export default NavBar