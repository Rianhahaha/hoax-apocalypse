import { NavLink } from 'react-router-dom';

function NavItem({ menu, icon, to }) {
  return (
    <li className='px-3 md:px-6'>
      <NavLink
        to={to}
        className={({ isActive }) => 
          `cursor-pointer flex flex-col items-center text-[15px] md:text-xl rounded-3xl p-4 md:gap-1 hover:bg-yellowMain hover:text-blueMain hovered 
        ${ isActive ? 'text-blueMain bg-yellowMain' : ''
          }`
        }
      >
        {icon}
        {menu}
      </NavLink>
    </li>
  );
}

export default NavItem;
