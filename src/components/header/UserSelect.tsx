import React, { useEffect, useRef, useState } from "react";
import {
  FaCaretDown,
  FaUserCircle,
  FaEdit,
  FaEnvelope,
  FaHireAHelper,
  FaSignOutAlt,
} from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import avatar from "assets/png/avatar.png";
import { Link } from "react-router-dom";
import useOnClickOutside from "hooks/useOnClickOutside";

const UserSelect = () => {
  const [open, setOpen] = useState(false);
  // style toggle
  const [style, setStyle] = useState({
    top: "",
    visibility: "",
    opacity: 0,
  });

  // pop up menu
  const popupRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: any) => {
    setOpen(false);
  };

  // handling style toggle
  useEffect(() => {
    if (open) {
      setStyle({ top: "92px", visibility: "visible", opacity: 1 });
    } else {
      setStyle({top: "", visibility: "hidden", opacity: 0})
    }
  }, [open]);


  // hook to handle when user clicks outside the popup menu
  // this means that for users to close the popup they must
  // click outside the menu
  useOnClickOutside(popupRef, handleClickOutside);

  return (
    <div className="action" data-testid="user-select">
      <div className="account-handle">
        <span className="avatar">
          <img src={avatar} alt="profile_photo_badge" />
        </span>
        <span className="toggler" ref={popupRef} onClick={() => setOpen(!open)}>
          <p>Adedeji</p>
          <FaCaretDown />
        </span>
      </div>
      <div
        className="user-menu"
        style={style as React.CSSProperties}
      >
        <h3>
          Adedeji John Doe
          <br />
          <span>Admin Lendsqr</span>
        </h3>
        <ul>
          <li>
            <FaUserCircle />
            <Link to="#">My profile</Link>
          </li>
          <li>
            <FaEdit />
            <Link to="#">Edit profile</Link>
          </li>
          <li>
            <FaEnvelope />
            <Link to="#">Inbox</Link>
          </li>
          <li>
            <AiFillSetting />
            <Link to="#">Setting</Link>
          </li>
          <li>
            <FaHireAHelper />
            <Link to="#">Help</Link>
          </li>
          <li>
            <FaSignOutAlt />
            <Link to="/login">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserSelect;
