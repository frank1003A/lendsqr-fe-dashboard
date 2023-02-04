import React, { useMemo, useState } from "react";
import Pagination from "./Pagination";
import { USER } from "./types/user";
import actbtn from "assets/figma/actbtn.svg";
import filterIcon from "assets/figma/filter.svg";
import { convertDate } from "utils";
import { Link } from "react-router-dom";

const DataTableComponent = ({ data }: { data: USER[] }) => {
  let PageSize = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    if (data && data.length) return data.slice(firstPageIndex, lastPageIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, data]);

  const getUserStatus = (): string => {
    let status: "inactive" | "pending" | "active" | "blacklisted" = "active";
    return status;
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              <div>
                <span>Organization</span>
                <img src={filterIcon} alt="filter" />
              </div>
            </th>
            <th>
              <div>
                <span>Username</span>
                <img src={filterIcon} alt="filter" />
              </div>
            </th>
            <th>
              <div>
                <span>Email</span>
                <img src={filterIcon} alt="filter" />
              </div>
            </th>
            <th>
              <div>
                <span>Phone Number</span>
                <img src={filterIcon} alt="filter" />
              </div>
            </th>
            <th>
              <div>
                <span>Date Joined</span>
                <img src={filterIcon} alt="filter" />
              </div>
            </th>
            <th>
              <div>
                <span>Status</span>
                <img src={filterIcon} alt="filter" />
              </div>
            </th>
            {/**ActionButton */}
            <th></th>
          </tr>
        </thead>
        <tbody className="table-body">
          {(currentTableData as USER[]).map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.orgName}</td>
                <td>{item.userName}</td>
                <td>{item.email}</td>
                <td>{item.profile.phoneNumber}</td>
                <td>{convertDate(item.createdAt)}</td>
                <td>
                  <span className="stats-badge green">{getUserStatus()}</span>
                </td>
                {/**Action Button */}
                <td>
                  <Link to={{
                    pathname: `/users/${item.id}`,
                  }} >
                    <img src={actbtn} alt="action_button" />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default DataTableComponent;
