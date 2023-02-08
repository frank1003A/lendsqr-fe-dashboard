import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ActionButton from "./ActionButton";
import { BrowserRouter as Router } from "react-router-dom";

describe("ActionButton component", () => {
  const onclick = jest.fn();
  it("opens and closes the action menu on button click", () => {
    render(
      <Router>
        <ActionButton id="123" saveSelectedUserIdStorage={onclick} />
      </Router>
    );

    const actionBtn = screen.getByAltText("action_button");
    fireEvent.click(actionBtn);

    expect(screen.getByAltText("eye_icon")).toBeInTheDocument();

    fireEvent.click(actionBtn);

    expect(screen.queryByAltText("eye_icon")).not.toBeInTheDocument();
  });
});
