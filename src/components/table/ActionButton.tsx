import actbtn from "assets/figma/actbtn.svg";
import { MouseEventHandler, useRef, useState } from "react";
import view from "assets/figma/eye.svg";
import blc_usr from "assets/figma/blacklistuser.svg";
import act_usr from "assets/figma/activateuser.svg";
import { FaEdit } from "react-icons/fa";
import useOnClickOutside from "hooks/useOnClickOutside";

interface Props {
  id: string;
  saveSelectedUserIdStorage: MouseEventHandler<HTMLSpanElement>;
}
const ActionButton = ({ id, saveSelectedUserIdStorage }: Props) => {
  const [open, setOpen] = useState(false);

  const tableActionBtnRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: any) => {
    setOpen(false);
  };

  // hook to handle when user clicks outside the popup menu
  // this means that for users to close the popup they must
  // click outside the menu
  useOnClickOutside(tableActionBtnRef, handleClickOutside);
  return (
    <>
      <button className="action-btn" onClick={() => setOpen(!open)}>
        <img src={actbtn} alt="action_button" />
      </button>
      <button className="action-btn-sx" onClick={() => setOpen(!open)}>
        <FaEdit />
      </button>
      {open && (
        <div className="table-action-menu" ref={tableActionBtnRef}>
          <span onClick={saveSelectedUserIdStorage}>
            <img src={view} alt="eye_icon" />
            View Details
          </span>
          <span>
            <img src={blc_usr} alt="user_cancel_icon" />
            Blacklist User
          </span>
          <span>
            <img src={act_usr} alt="user_check_user" />
            Activate User
          </span>
        </div>
      )}
    </>
  );
};

export default ActionButton;
