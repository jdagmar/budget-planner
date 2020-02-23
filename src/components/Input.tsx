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
    <div>
      <label htmlFor={id} className="block font-sans mb-2">
        {props.label}
      </label>
      <input
        id={id}
        type={props.type}
        className="border border-gray-800 p-1"
        value={props.value}
        onChange={e => {
          props.onChange(e.target.value);
        }}
      />
    </div>
  );
};
