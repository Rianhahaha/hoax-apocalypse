import NavItem from "./navItem";
import { useEffect, useState } from "react";

function NavMenu() {
const [isScrolled, SetScroll] = useState(false);
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 0) {
      SetScroll(true);
    } else {
      SetScroll(false);
    }
  };
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };  
}, []);

  return (
    <>
      <div className="relative flex justify-center w-full py-4 px-16 bg-blueMain ">
        <div className="hidden md:block md:absolute md:left-10 md:top-2">
          <img className={`${ isScrolled ? "w-[100px] md:w-[150px] hovered" : "w-[150px] md:w-[250px] hovered"}`} src="/img/icon.png" alt="" />
        </div>
          <img className={`block md:hidden fixed bottom-2 right-2 ${ isScrolled ? "w-[100px] md:w-[150px] hovered" : "w-[150px] md:w-[250px] hovered"}`} src="/img/icon.png" alt="" />
        <ul className="inline-flex items-center cursor-auto ">
          <NavItem menu="Home" to="/" />
          <NavItem menu="Tentang" to="/tentang" />
          <NavItem menu="Karakter" to="/karakter" />
        </ul>
      </div>
    </>
  );
}
export default NavMenu;
