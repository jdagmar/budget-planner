import React from 'react';
import { GetIcon } from '../helpers/GetIcon';

type Props = {
  label: string;
  type: string;
  value: string;
  icon?: string;
  onChange: (value: string) => void;
};

export const Input = (props: Props) => {
  const id = `${props.label.toLowerCase()}-input`;

  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block font-bold font-sans mb-2  tracking-wider text-md"
      >
        {props.label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={props.type}
          className={` bg-transparent border border-gray-600 text-gray-600 p-2 w-full rounded-sm  ${
            props.icon ? 'pl-8' : 'pl-2'
          }`}
          value={props.value}
          onChange={e => {
            props.onChange(e.target.value);
          }}
        />
        <div className="absolute top-0 bottom-0 text-gray-600">
          <div className="flex items-center h-full ml-2">
            {GetIcon(1, props.icon)}
          </div>
        </div>
      </div>
    </div>
  );
};
