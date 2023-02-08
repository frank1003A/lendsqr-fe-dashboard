/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, cleanup } from "@testing-library/react";
import Pagination from "./Pagination";

afterEach(cleanup);

describe("Pagination component", () => {
  it("renders correctly", () => {
    const onPageChange = jest.fn();
    const { getByTestId } = render(
      <Pagination
        className="sdsfsf"
        onPageChange={onPageChange}
        totalCount={10}
        siblingCount={2}
        currentPage={2}
        pageSize={5}
      />
    );
    expect(getByTestId("pagination-container")).toBeTruthy();
    expect(getByTestId("pagination-item-left-arrow")).toBeTruthy();
    expect(getByTestId("pagination-item-right-arrow")).toBeTruthy();
  });

  it("renders null when currentPage is 0 or paginationRange length is less than 2", () => {
    const onPageChange = jest.fn();
    const { queryByTestId } = render(
      <Pagination
        className="sdsfsf"
        onPageChange={onPageChange}
        totalCount={1}
        siblingCount={2}
        currentPage={0}
        pageSize={5}
      />
    );
    expect(queryByTestId("pagination-container")).toBeNull();
  });
  
  // negative test
  test("Should not render component if totalCount is less than 2 times siblingCount", () => {
    const onPageChange = jest.fn();
    const { queryByTestId } = render(
      <Pagination
      className="dsfsf"
        onPageChange={onPageChange}
        totalCount={1}
        siblingCount={2}
        currentPage={1}
        pageSize={10}
      />
    );
    expect(queryByTestId("pagination-container")).toBeNull();
  });
});
