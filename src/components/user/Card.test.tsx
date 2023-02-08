import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import Card from "./Card";

afterEach(cleanup);

describe("Card component", () => {
  it("renders the name, icon and fig of the card", () => {
    render(<Card id="1" name="User 1" icon="user1.png" fig={1000} />);

    const name = screen.getByText("User 1");
    const icon = screen.getByAltText('user1.png_icon')
    const fig = screen.getByText("1,000");

    expect(name).toBeInTheDocument();
    expect(icon).toBeInTheDocument()
    expect(fig).toBeInTheDocument();
  }); 
});
