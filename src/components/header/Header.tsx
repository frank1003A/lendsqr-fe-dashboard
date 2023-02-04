import { Link } from "react-router-dom";
import { logo } from "utils/images";
import notifyicon from "assets/figma/notification.svg";
import avatar from "assets/png/avatar.png";
import SearchInput from "./SearchInput";
import { FaCaretDown } from "react-icons/fa";

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

          <div className="account-handle">
            <span className="avatar">
              <img src={avatar} alt="profile_photo_badge" />
            </span>
            <p>Adedeji</p>
            <FaCaretDown />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
