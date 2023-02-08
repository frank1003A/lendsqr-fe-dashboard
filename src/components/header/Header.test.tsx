/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, cleanup } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";

describe("Header component", () => {
  afterEach(cleanup);

  // Positive Test
  it("renders without crashing", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
  });

  it("renders Navbar component", () => {
    const { getByTestId } = render(
      <Router>
        <Header />
      </Router>
    );
    expect(getByTestId("navbar")).toBeInTheDocument();
  });

  it("renders logo", () => {
    const { getByAltText } = render(
      <Router>
        <Header />
      </Router>
    );
    expect(getByAltText("logo_header")).toBeInTheDocument();
  });

  it("renders SearchInput component", () => {
    const { getByTestId } = render(
      <Router>
        <Header />
      </Router>
    );
    expect(getByTestId("search-input")).toBeInTheDocument();
  });

  it("renders docs link", () => {
    const { getByTestId } = render(
      <Router>
        <Header />
      </Router>
    );
    expect(getByTestId("docs-link")).toBeInTheDocument();
  });

  it("renders notification icon", () => {
    const { getByAltText } = render(
      <Router>
        <Header />
      </Router>
    );
    expect(getByAltText("notification_icon")).toBeInTheDocument();
  });

  it("renders UserSelect component", () => {
    const { getByTestId } = render(
      <Router>
        <Header />
      </Router>
    );
    expect(getByTestId("user-select")).toBeInTheDocument();
  });

  // Negative Test
  it("does not render non-existing element", () => {
    const { queryByTestId } = render(
      <Router>
        <Header />
      </Router>
    );
    expect(queryByTestId("non-existing")).toBeNull();
  });
});
