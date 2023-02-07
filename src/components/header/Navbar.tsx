import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { NavLink } from "react-router-dom";
import home from "assets/figma/home.svg";
import Menu from "components/sidebar/Menu";
import { SidebarData } from "components/sidebar/SidebarData";
import { logo } from "utils/images";

const Navbar = () => {
  const [openNavbar, setOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className="bars">
      <span>
        <Hamburger toggled={openNavbar} toggle={setOpen} />
      </span>
      <Drawer
        open={openNavbar}
        onClose={toggleDrawer}
        direction="left"
        className="sidebar"
      >
        <span className="logo-sx">
          <img src={logo} alt="logo" id="logo" />
        </span>
        <nav className="sdnav">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            <img src={home} alt="home_icon" />
            dashboard
          </NavLink>

          {SidebarData.map((sb, index) => {
            return <Menu menu={sb} key={index} />;
          })}
        </nav>
      </Drawer>
    </div>
  );
};

export default Navbar;
