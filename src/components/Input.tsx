import React from 'react';

type Props = {
  label: string;
  placeholder?: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
};

export const Input = (props: Props) => {
  const id = `${props.label.toLowerCase()}-input`;
  return (
    <div className="mb-2">
      <label htmlFor={id} className="block font-sans mb-2 text-sm">
        {props.label}
      </label>
      <input
        id={id}
        type={props.type}
        className="border border-gray-800 p-1 w-full rounded-sm"
        value={props.value}
        onChange={e => {
          props.onChange(e.target.value);
        }}
      />
    </div>
  );
};
