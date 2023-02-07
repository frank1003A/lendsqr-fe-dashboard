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
          {(currentTableData as USER[]).map((item, index) => {
            return (
              <tr key={index}>
                <td data-label={headers[0]}>{item.orgName}</td>
                <td data-label={headers[1]}>{item.userName}</td>
                <td data-label={headers[2]}>{item.email}</td>
                <td data-label={headers[3]}>{item.profile.phoneNumber}</td>
                <td data-label={headers[4]}>{convertDate(item.createdAt.toString())}</td>
                <td data-label={headers[5]}>{determineStatus(index)}</td>
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

/**  <table>
  <caption>Statement Summary</caption>
  <thead>
    <tr>
      <th scope="col">Account</th>
      <th scope="col">Due Date</th>
      <th scope="col">Amount</th>
      <th scope="col">Period</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Account">Visa - 3412</td>
      <td data-label="Due Date">04/01/2016</td>
      <td data-label="Amount">$1,190</td>
      <td data-label="Period">03/01/2016 - 03/31/2016</td>
    </tr>
    <tr>
      <td scope="row" data-label="Account">Visa - 6076</td>
      <td data-label="Due Date">03/01/2016</td>
      <td data-label="Amount">$2,443</td>
      <td data-label="Period">02/01/2016 - 02/29/2016</td>
    </tr>
    <tr>
      <td scope="row" data-label="Account">Corporate AMEX</td>
      <td data-label="Due Date">03/01/2016</td>
      <td data-label="Amount">$1,181</td>
      <td data-label="Period">02/01/2016 - 02/29/2016</td>
    </tr>
    <tr>
      <td scope="row" data-label="Acount">Visa - 3412</td>
      <td data-label="Due Date">02/01/2016</td>
      <td data-label="Amount">$842</td>
      <td data-label="Period">01/01/2016 - 01/31/2016</td>
    </tr>
  </tbody>
</table> */
