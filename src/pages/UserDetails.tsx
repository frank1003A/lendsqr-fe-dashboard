import backarrow from "assets/user/back.svg";
import { Link, useParams } from "react-router-dom";
import UserCard from "components/user/UserCard";
import { useEffect, useState } from "react";
import GeneralDetails from "components/user/tabs/GeneralDetails";
import { USER } from "components/types/user";
import Loader from "components/Loader";

const UserDetailes = () => {
  let { id } = useParams();
  const [user, setUser] = useState<USER>()
  const [activeButton, setActiveButton] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Callback Function to UserCard to Retrieve Active Button Number
  const handleActiveButtonClick = (button: number) => {
    setActiveButton(button);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
        );
        const json = await response.json();
        setLoading(false);
        setUser(json)
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [id])

  if (loading) {
    return <Loader/>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
      <div className="user-details">
        <div className="back">
          <img src={backarrow} alt="back_arrow_icon" />
          <Link to="/users">
            <button>back to user</button>
          </Link>
        </div>
        <div className="name">
          <h1>User Details</h1>

          <span>
            <button id="deactivate">blacklist user</button>
            <button id="activate">activate user</button>
          </span>
        </div>

        <UserCard
          active={activeButton}
          onButtonClick={handleActiveButtonClick}
          user={user as USER}
        />
        <div className="card2">
          {activeButton === 1 && (<GeneralDetails user={user as USER}/>)}
        </div>
      </div>
  );
};

export default UserDetailes;
