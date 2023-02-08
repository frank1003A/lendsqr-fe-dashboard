/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";

describe("Navbar component", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    const { getByTestId } = render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(getByTestId("navbar")).toBeInTheDocument();
  });
  
  // Negative Test
  it("handles errors when the hamburger component is not found", () => {
    const { getByTestId } = render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(() => {
      fireEvent.click(getByTestId("non-existent-hamburger"));
    }).toThrowError();
  });
});
