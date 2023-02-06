import { Link } from "react-router-dom";
import { logo } from "utils/images";
import notifyicon from "assets/figma/notification.svg";
import SearchInput from "./SearchInput";
import UserSelect from "./UserSelect";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <span className="logo">
          <img src={logo} alt="logo" />
        </span>

        <SearchInput />

        <div className="right">
          <Link to="/docs">docs</Link>

          <img src={notifyicon} alt="notification_icon" />

        <UserSelect/>
        </div>
      </nav>
    </div>
  );
};

export default Header;
