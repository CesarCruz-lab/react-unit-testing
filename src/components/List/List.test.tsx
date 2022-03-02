/* eslint-disable */
import { render, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import List from "./List";

const initialItems = ["public", "list", "template"];

describe("List Component", () => {
  it("should render list items", () => {
    const { getByText, queryByText, rerender, unmount } = render(<List initialItems={initialItems} />);

    expect(getByText("public")).toBeInTheDocument();
    expect(getByText("list")).toBeInTheDocument();
    expect(getByText("template")).toBeInTheDocument();

    unmount();
    rerender(<List initialItems={["template"]} />);

    expect(getByText("template")).toBeInTheDocument();
    expect(queryByText("public")).not.toBeInTheDocument();
  });

  it("should be able to add new item to the list", async () => {
    const { getByText, getByPlaceholderText, findByText } = render(<List initialItems={initialItems} />);

    const inputElement = getByPlaceholderText("Novo item");
    const addButton = getByText("Adicionar");

    userEvent.type(inputElement, "new");
    userEvent.click(addButton);

    /* options ------- */

    // 1º
    expect(await findByText("new")).toBeInTheDocument();

    // 2º
    await waitFor(() => {
      expect(getByText("new")).toBeInTheDocument();
    });

    /* ---------------- */
  });

  it("should be able to remove item from the list", async () => {
    const { getByText, getAllByText, getByPlaceholderText, queryByText } = render(<List initialItems={initialItems} />);

    const inputElement = getByPlaceholderText("Novo item");
    const addButton = getByText("Adicionar");
    const removeButtons = getAllByText("Remover");

    userEvent.type(inputElement, "new");
    userEvent.click(addButton);
    userEvent.click(removeButtons[0]);

    await waitFor(() => {
      expect(getByText("new")).toBeInTheDocument();
    });

    /* options ------- */

    // 1º
    await waitForElementToBeRemoved(() => {
      return getByText("public");
    });

    // 2º
    await waitFor(() => {
      expect(queryByText("public")).not.toBeInTheDocument();
    });

    /* ---------------- */
  });
});
