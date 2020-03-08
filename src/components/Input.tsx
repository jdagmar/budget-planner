import React from 'react';
import { GetIcon } from '../helpers/GetIcon';

type Props = {
  label: string;
  placeholder?: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  icon?: string;
};

export const Input = (props: Props) => {
  const id = `${props.label.toLowerCase()}-input`;
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block font-sans mb-2 text-sm font-mono">
        {props.label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={props.type}
          className={`border border-gray-800 p-2 w-full rounded-sm text-sm ${
            props.icon ? 'pl-8' : 'pl-2'
          }`}
          value={props.value}
          onChange={e => {
            props.onChange(e.target.value);
          }}
        />
        <div className="absolute top-0 bottom-0">
          <div className="flex items-center h-full ml-2">
            {GetIcon(props.icon)}
          </div>
        </div>
      </div>
    </div>
  );
};
