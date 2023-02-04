import { useState } from "react";
import Submenu from "./Submenu";
import { SideBarData } from "../types/sidebar";
import ad from "assets/figma/arrowdown.svg";

interface Props {
  menu: SideBarData;
}

const Menu = ({ menu }: Props) => {
  const [show, setShow] = useState<boolean>(false);
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
