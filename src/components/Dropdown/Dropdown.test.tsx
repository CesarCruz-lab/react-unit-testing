import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Dropdown from "./Dropdown";

function setup() {
  return render(<Dropdown />);
}

describe("Dropdown", () => {
  it("should be closed from the beginning", () => {
    setup();

    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("should render on open", () => {
    setup();

    const buttonElement = screen.getByRole("button", { name: "ver" });

    userEvent.click(buttonElement);

    const menuElement = screen.queryByRole("menu");

    expect(menuElement).toBeInTheDocument();
  });
});
