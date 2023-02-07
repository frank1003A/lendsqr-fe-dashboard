import { NavLink } from "react-router-dom";
import home from "assets/figma/home.svg";
import Menu from "./Menu";
import Select from "components/Select";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <Select
        options={["switch orgnization", "organisation 1", "organition 2"]}
      />
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
    </section>
  );
};

export default Sidebar;
