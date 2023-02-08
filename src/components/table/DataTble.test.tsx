/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import DataTable from "./DataTable";
import { USER } from "components/types/user";
import {BrowserRouter as Router} from "react-router-dom"

const data: USER[] = [
  {
    id: "1",
    orgName: "org1",
    userName: "user1",
    email: "user1@email.com",
    profile: { phoneNumber: "111-111-1111" },
    createdAt: new Date(),
  },
  {
    id: "2",
    orgName: "org2",
    userName: "user2",
    email: "user2@email.com",
    profile: { phoneNumber: "222-222-2222" },
    createdAt: new Date(),
  },
];

describe("DataTable", () => {
    afterEach(() => {
        jest.clearAllMocks();
      });

  it("renders the table correctly", () => {
    const { getByText } = render(
      <Router>
        <DataTable data={data} />
      </Router>
    );
    expect(getByText(data[0].orgName as string)).toBeInTheDocument();
    expect(getByText(data[0].userName as string)).toBeInTheDocument();
    expect(getByText(data[0].email as string)).toBeInTheDocument();
    expect(getByText(data[0].profile.phoneNumber)).toBeInTheDocument();
    expect(getByText(data[1].orgName as string)).toBeInTheDocument();
    expect(getByText(data[1].userName as string)).toBeInTheDocument();
    expect(getByText(data[1].email as string)).toBeInTheDocument();
    expect(getByText(data[1].profile.phoneNumber)).toBeInTheDocument();
  });
});
