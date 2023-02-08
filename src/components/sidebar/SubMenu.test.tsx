import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Submenu from "./Submenu";

describe("Submenu component", () => {
  it("renders the submenu correctly", () => {
    const submenu = {
      title: "Dashboard",
      path: "/dashboard",
      icon: "dashboard.png",
    };

    render(
      <Router>
        <Submenu submenu={submenu} />
      </Router>
    );

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByAltText("dashboard.png")).toBeInTheDocument();
  });

  // Negative Test
  it("does not render the title if it is not provided", () => {
    const submenu = {
      title: "",
      path: "/dashboard",
      icon: "dashboard.png",
    };

    render(
      <Router>
        <Submenu submenu={submenu} />
      </Router>
    );

    expect(screen.queryByText("Dashboard")).not.toBeInTheDocument();
  });
});
