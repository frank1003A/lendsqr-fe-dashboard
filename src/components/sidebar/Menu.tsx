import { useEffect, useState } from "react";
import Submenu from "./Submenu";
import { SideBarData } from "../types/sidebar";
import ad from "assets/figma/arrowdown.svg";
import { useLocation } from "react-router-dom";

interface Props {
  menu: SideBarData;
}

const Menu = ({ menu }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    let nav = menu.subNav;
    const slideDownOnActive = () => {
      for (let i = 0; i < nav.length; i++) {
        if (location.pathname === nav[i].path) {
          setShow(true);
        }
      }
    };
    slideDownOnActive();
  }, [location.pathname, menu.subNav]);
  return (
    <div>
      <p className="menu" onClick={() => setShow(!show)}>
        {menu.title}
        <span className={show ? "arrow_down drop-active" : "arrow_down"}>
          <img src={ad} alt="arrow_icon" />
        </span>
      </p>
      {show &&
        menu.subNav.map((sn, i) => {
          return <Submenu submenu={sn} key={i} />;
        })}
    </div>
  );
};

export default Menu;
