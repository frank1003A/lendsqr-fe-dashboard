import Card from "components/user/Card";
import users from "assets/figma/users.svg";
import active from "assets/figma/active.svg";
import loans from "assets/figma/loans.svg";
import savings from "assets/figma/savings.svg";
import DataTableComponent from "components/DataTable";
import { useState, useEffect } from "react";
import Loader from "components/Loader";

const Users = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
        );
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loader/>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
      <div className="users">
        {/**Page Name */}
        <div className="name">
          <h1>Users</h1>
        </div>

        {/**Cards */}
        <Card name="Users" icon={users} fig={2453} />
        <Card name="Active Users " icon={active} fig={2453} />
        <Card name="Users With Loans" icon={loans} fig={12453} />
        <Card name="Users With Saving" icon={savings} fig={102453} />

        {/**Data Table */}
        <div className="table">
        <DataTableComponent data={data}/>
        </div>
      </div>
  );
};

export default Users;
