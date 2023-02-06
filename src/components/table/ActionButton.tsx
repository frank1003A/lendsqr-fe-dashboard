import actbtn from "assets/figma/actbtn.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import view from "assets/figma/eye.svg"
import blc_usr from "assets/figma/blacklistuser.svg"
import act_usr from "assets/figma/activateuser.svg"

interface Props {
  id: string;
}
const ActionButton = ({ id }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="action-btn" onClick={() => setOpen(!open)} >
      <img src={actbtn} alt="action_button"/>
      </button>
      {open && (
        <div className="table-action-menu">
          <Link
            to={{
              pathname: `/users/${id}`,
            }}
          >
            <img src={view} alt="eye_icon" />
            View Details
          </Link>
          <Link
            to={{
              pathname: `/blacklist`,
            }}
          >
            <img src={blc_usr} alt="user_cancel_icon" />
            Blacklist User
          </Link>
          <Link
            to={{
              pathname: `/activate`,
            }}
          >
            <img src={act_usr} alt="user_check_user" />
            Activate User
          </Link>
        </div>
      )}
    </>
  );
};

export default ActionButton;
