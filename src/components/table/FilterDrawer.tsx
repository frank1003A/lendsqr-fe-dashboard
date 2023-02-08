import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { FaFilter } from "react-icons/fa";

const FilterDrawer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <button className="filter-btn-sx" data-testid="filter-btn-sx" onClick={toggleDrawer}>
        Filter 
        <FaFilter/>
      </button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="form"
      >
        <form data-testid="form">
          <label htmlFor="org">Organization</label>
          <input type="text" placeholder="select" id="org" />
          <label htmlFor="user">username</label>
          <input type="text" placeholder="user" id="user" />
          <label htmlFor="date">date</label>
          <input type="date" placeholder="date" id="date" />
          <label htmlFor="stat">status</label>
          <input type="text" placeholder="status" id="stat" />
          <span>
            <button>reset</button>
            <button>filter</button>
          </span>
        </form>
      </Drawer>
    </>
  );
};

export default FilterDrawer;
