import clsx from "clsx";
import { useId } from "react";

import classes from "./Radio.module.css";

type RadioOption = {
  value: RadioButtonProps["value"];
  label: RadioButtonProps["label"];
};

type RadioProps = {
  options: RadioOption[];
  name: RadioButtonProps["groupName"];
  value: RadioButtonProps["value"];
  onChange: RadioButtonProps["onChange"];
};

export function Radio({ options, name, value, onChange }: RadioProps) {
  const handleChange = (v: RadioButtonProps["value"]) => {
    onChange(v);
  };

  return (
    <div className={clsx(classes.radio)}>
      {options.map(({ value: val, label }) => (
        <RadioButton
          key={`radio-${val}`}
          groupName={name}
          value={val}
          label={label}
          checked={val === value}
          onChange={handleChange}
        />
      ))}
    </div>
  );
}

type RadioButtonProps = {
  groupName: string;
  value: string | number;
  label: string;
  checked: boolean;
  className?: string;
  onChange: (v: string | number) => void;
};

export function RadioButton({
  groupName,
  value,
  label,
  checked,
  className,
  onChange,
}: RadioButtonProps) {
  const id = useId();

  return (
    <div className={clsx(classes.button, className)}>
      <input
        id={id}
        className={classes.button__input}
        type="radio"
        name={groupName}
        value={value}
        checked={checked}
        onChange={() => {
          onChange(value);
        }}
      />
      <label htmlFor={id} className={classes.button__label}>
        {label}
      </label>
    </div>
  );
}
