import { fireEvent, render, screen } from "@testing-library/react";

import { Button } from "./Button";

describe("Button", () => {
  it("should render children", () => {
    render(
      <Button
        onClick={() => {
          return false;
        }}
      >
        my button
      </Button>
    );

    const buttonElement = screen.getByRole("button", { name: /my button/i });

    expect(buttonElement).toHaveTextContent("my button");
  });

  it("should handle onClick", () => {
    const onClick = vitest.fn();

    render(<Button onClick={onClick}>my button</Button>);

    const buttonElement = screen.getByRole("button", { name: /my button/i });

    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
