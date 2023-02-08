import React, { useMemo, useState } from "react";
import Pagination from "components/table/Pagination";
import { USER } from "../types/user";
import { convertDate } from "utils";
import ActionButton from "./ActionButton";
import FilterButton from "./FilterButton";
import useLocalStorage from "hooks/useLocalStrorage";
import { useNavigate } from "react-router-dom";

const DataTableComponent = ({ data }: { data: USER[] }) => {
  //
  let navigate = useNavigate();

  let PageSize = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  // localstorage hook to store user ID
  const [, setUserid] = useLocalStorage<string>("user_id", "");

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    if (data && data.length) return data.slice(firstPageIndex, lastPageIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, data]);

  /**
   * I couldn't figure out how to get active user,
   * so I used this formula (mainly for display):
   * composite number: active
   * perfect cubes: inactive
   * prime number: blacklisted
   * perfect squares: pending
   */
  const determineStatus = (index: number) => {
    const num = index + 1;
    let type = "";

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        type = "active";
        break;
      }
    }

    if (type === "") {
      type = "blacklisted";
    }

    const sqrt = Math.sqrt(num);
    if (sqrt === Math.floor(sqrt)) {
      type = "pending";
    }

    const cube = Math.cbrt(num);
    if (cube === Math.floor(cube)) {
      type = "inactive";
    }

    return <span className={`stats-badge ${type}`}>{type}</span>;
  };

  /**
   * The header is an array to make the render dynamic
   */
  const headers = [
    "organization",
    "username",
    "email",
    "phone number",
    "date joined",
    "status",
  ];

  // Filter Button Toggler
  const handleFilterShow = () => {
    if (openFilter) {
      setOpenFilter(false);
    } else if (openFilter === false) {
      setOpenFilter(true);
    } else {
      setOpenFilter(!openFilter);
    }
  };

  /* 
  pass the user id to local storage 
  and automatically navigate to the route: /users/:id
  */
  const navigateToPage = (id: string) => {
    setUserid(id);
    navigate(`/users/:${id}`);
  };

  return (
    <>
      <table data-testid="data-table">
        <thead>
          <tr>
            {headers.map((header, index) => {
              return (
                <th key={index} scope="col">
                  <div>
                    <span>{header}</span>
                    <FilterButton
                      open={openFilter}
                      handleOpen={handleFilterShow}
                    />
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="table-body">
          {Array.isArray(data) && data.length > 0 ? (
            (currentTableData as USER[]).map((item, index) => {
              return (
                <tr key={index}>
                  <td data-label={headers[0]}>{item.orgName}</td>
                  <td data-label={headers[1]}>{item.userName}</td>
                  <td data-label={headers[2]}>{item.email}</td>
                  <td data-label={headers[3]}>{item.profile.phoneNumber}</td>
                  <td data-label={headers[4]}>
                    {convertDate(item.createdAt.toString())}
                  </td>
                  <td data-label={headers[5]}>{determineStatus(index)}</td>
                  {/**Action Button */}
                  <td>
                    <ActionButton
                      id={item.id}
                      saveSelectedUserIdStorage={() => navigateToPage(item.id)}
                    />
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={6}>No data</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="data-table-footer">
        <div className="data-limit">
          <p>showing</p>
          <select>
            <option value="100">100</option>
          </select>
          <p>out of {data.length}</p>
        </div>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  );
};

export default DataTableComponent;
