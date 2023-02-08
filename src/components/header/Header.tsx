import { Link } from "react-router-dom";
import { logo } from "utils/images";
import notifyicon from "assets/figma/notification.svg";
import SearchInput from "./SearchInput";
import UserSelect from "./UserSelect";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
        <img src={logo} alt="logo_header" id="logo" />

        <SearchInput />

        <div className="right">
          <Link to="/docs" id="doc" data-testid="docs-link">
            docs
          </Link>

          <img src={notifyicon} alt="notification_icon" id="noticon" />

          <UserSelect  />
        </div>
    </div>
  );
};

export default Header;
