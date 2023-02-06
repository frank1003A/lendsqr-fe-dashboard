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

const UserSelect = () => {
  const [open, setOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [popupRef]);

  useEffect(() => {
    if (open === true) {
      const toggleMenu = document.querySelector(".menu")!;
      toggleMenu.classList.toggle("active");
    }
  }, [open]);
  return (
    <div className="action">
      <div className="account-handle">
        <span className="avatar">
          <img src={avatar} alt="profile_photo_badge" />
        </span>
        <span className="toggler" onClick={() => setOpen(!open)}>
          <p>Adedeji</p>
          <FaCaretDown />
        </span>
      </div>
      <div className="menu" ref={popupRef}>
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
