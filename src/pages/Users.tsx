import Card from "components/user/Card";
import users_icon from "assets/figma/users.svg";
import active from "assets/figma/active.svg";
import loans from "assets/figma/loans.svg";
import savings from "assets/figma/savings.svg";
import DataTableComponent from "components/table/DataTable";
import { useState, useEffect } from "react";
import Loader from "components/Loader";
import FilterDrawer from "components/table/FilterDrawer";

const Users = () => {
  const [data, setData] = useState<any>();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loader message="Loading" />;
  }
  if (error) {
    return (
      <div className="center">
        <p>Network Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="users">
      {/**Page Name */}
      <div className="name">
        <h1>Users</h1>
      </div>

      {/**Cards */}
      <Card name="Users" icon={users_icon} id={"c1"} fig={2453} />
      <Card name="Active Users " icon={active} id={"c2"} fig={2453} />
      <Card name="Users With Loans" icon={loans} id={"c3"} fig={12453} />
      <Card name="Users With Saving" icon={savings} id={"c4"} fig={102453} />

      {/**Only visible on mobile */}
      <FilterDrawer />

      {/**Data Table */}
      <div className="table">
        <DataTableComponent data={data} />
      </div>
    </div>
  );
};

export default Users;
