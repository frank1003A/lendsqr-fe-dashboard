import imgdefault from "assets/user/avatar.svg";
import { USER } from "components/types/user";
import Dropdown from "./Dropdown";
import Tier from "./Tier";

interface Props {
  user: USER;
  /**parent active button state */
  active: number;
  /**Callback Function */
  onButtonClick: (n: number) => void;
}

const UserCard = (props: Props) => {

  /**Handles CHanging between Default and User Avatar */
  const renderAvatar = (): string => {
    if (!props.user.profile.avatar) {
      return imgdefault
    }  else {
      return props.user.profile.avatar
    }
  }
  return (
    <div className="card1">
      <div className="general-info">
        <div className="username-img-id">
          <img src={renderAvatar()} alt="user_avatar" />
          <div className="name-id">
            <h1>{props.user.profile?.firstName} {props.user.profile?.lastName}</h1>
            <h2>{props.user.accountNumber}</h2>
          </div>
        </div>
        <hr />
        <div className="tier">
          <p>User's Tier</p>
          <Tier/>
        </div>
        <hr />
        <div className="current-trans">
          <h1 className="current-loan">₦{props.user.accountBalance}</h1>
          <h2 className="bank-details">{props.user.profile?.bvn}/Providus Bank</h2>
        </div>
        <Dropdown handleSelect={(e) => props.onButtonClick(Number(e.target.value))}/>
      </div>

      <div className="section-toggle">
        <button
          className={props.active === 1 ? "btn active" : "btn"}
          onClick={() => props.onButtonClick(1)}
        >
          General Details
        </button>
        <button
          className={props.active === 2 ? "btn active" : "btn"}
          onClick={() => props.onButtonClick(2)}
        >
          Documents
        </button>
        <button
          className={props.active === 3 ? "btn active" : "btn"}
          onClick={() => props.onButtonClick(3)}
        >
          Bank Details
        </button>
        <button
          className={props.active === 4 ? "btn active" : "btn"}
          onClick={() => props.onButtonClick(4)}
        >
          Loans
        </button>
        <button
          className={props.active === 5 ? "btn active" : "btn"}
          onClick={() => props.onButtonClick(5)}
        >
          Savings
        </button>
        <button
          className={props.active === 6 ? "btn active" : "btn"}
          onClick={() => props.onButtonClick(6)}
        >
          App and System
        </button>
      </div>
    </div>
  );
};

export default UserCard;
