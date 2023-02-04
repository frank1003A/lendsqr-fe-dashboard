import React from 'react'
import { NavLink } from 'react-router-dom'
import { subNav } from '../types/sidebar';

interface Props {
    submenu: subNav;
}
const Submenu = ({submenu}: Props) => {
  return (
    <React.Fragment>
         <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={submenu.path}
        >
            <img src={submenu.icon} alt={submenu.icon} id="icon"/>
          {submenu.title}
        </NavLink>
    </React.Fragment>
  )
}

export default Submenu