import { fireEvent, render, screen } from "@testing-library/react";
import { useState } from "react";

import { Radio, RadioOption } from "./Radio";

const options: RadioOption[] = [
  { value: 0, label: "option-0" },
  { value: 1, label: "option-1" },
  { value: 2, label: "option-2" },
];

const onChange = vitest.fn((value: string | number) => value);

const WrappedRadio = ({ defaultValue }: { defaultValue: string | number }) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <Radio
      name="test-radio-group"
      options={options}
      value={value}
      onChange={(v) => {
        onChange(v);
        setValue(v);
      }}
    />
  );
};

describe("Radio Component", () => {
  it("should render multiple radio items", () => {
    render(<WrappedRadio defaultValue={options[0].value} />);

    const radioElements = screen.getAllByRole("radio");

    expect(radioElements.length).toBe(options.length);
  });

  it("should set checked for the item with the current value", () => {
    render(<WrappedRadio defaultValue={options[1].value} />);

    const currentRadioElement = screen.getByLabelText(options[1].label);
    const anotherRadioElement = screen.getByLabelText(options[0].label);

    expect(currentRadioElement).toBeChecked();
    expect(anotherRadioElement).not.toBeChecked();
  });

  it("should handle onChange correctly", () => {
    render(<WrappedRadio defaultValue={options[0].value} />);

    const currentRadioElement = screen.getByLabelText(options[0].label);
    const anotherRadioElement = screen.getByLabelText(options[1].label);

    expect(currentRadioElement).toBeChecked();
    expect(anotherRadioElement).not.toBeChecked();

    fireEvent.click(anotherRadioElement);

    expect(onChange).toBeCalled();
    expect(onChange).toHaveReturnedWith(options[1].value);
    expect(currentRadioElement).not.toBeChecked();
    expect(anotherRadioElement).toBeChecked();
  });
});
