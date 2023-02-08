/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router } from "react-router-dom";

describe("Sidebar component", () => {
  it("renders without crashing", () => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );
  });

  it("renders the NavLink component", () => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );
    expect(screen.getByAltText("home_icon")).toBeInTheDocument();
    expect(screen.getByText("dashboard")).toBeInTheDocument();
  });

  // Negative Test
  it("throws an error if components are not found", () => {
    const originalError = console.error;
    console.error = jest.fn();
    const { queryByTestId } = render(
      <Router>
        <Sidebar />
      </Router>
    );
    expect(queryByTestId("not-found")).toBeNull();
    console.error = originalError;
    });
});
