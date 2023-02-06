import React, { useMemo, useState } from "react";
import Pagination from "components/table/Pagination";
import { USER } from "../types/user";
import { convertDate } from "utils";
import ActionButton from "./ActionButton";
import FilterButton from "./FilterButton";

const DataTableComponent = ({ data }: { data: USER[] }) => {
  let PageSize = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [openFilter, setOpenFilter] = useState<boolean>(false);

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
   * The header is an array
   * so the filter button
   * can be more unique
   */
  const headers = [
    "organization",
    "username",
    "email",
    "phone number",
    "date joined",
    "status",
  ];

  /**
   * Makes all the filter button
   * behave like one so users can't
   * activate more than one of the
   * filter state at the same time
   */
  const handleFilterShow = () => {
    if (openFilter) {
      setOpenFilter(false);
    } else if (openFilter === false) {
      setOpenFilter(true);
    } else {
      setOpenFilter(!openFilter);
    }
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => {
              return (
                <th key={index}>
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
          {(currentTableData as USER[]).map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.orgName}</td>
                <td>{item.userName}</td>
                <td>{item.email}</td>
                <td>{item.profile.phoneNumber}</td>
                <td>{convertDate(item.createdAt.toString())}</td>
                <td>{determineStatus(index)}</td>
                {/**Action Button */}
                <td>
                  <ActionButton id={item.id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="data-table-footer">
        <div className="data-limit">
          <p>showing</p>
          <select name="select" id="sid">
            {data.map((d, i) => {
              return <option value={i - 1}>{data.length}</option>;
            })}
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
