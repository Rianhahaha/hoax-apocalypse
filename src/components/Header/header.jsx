import NavMenu from "./navMenu";
function Header() {
  
  return (
    <>
      <nav className="text-yellowMain z-50 fixed top-0  w-full bg-transparent  flex justify-center align-middle">
        <NavMenu />
      </nav>
    </>
  );
}
export default Header;
