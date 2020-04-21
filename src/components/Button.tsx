import React from 'react';
import { GetIcon } from '../helpers/GetIcon';

type Props = {
  text: string;
  isTextVisible: boolean;
  color: string;
  fill: 'solid' | 'outline' | 'none';
  onClick?: () => void;
  icon?: string;
};

export const Button = (props: Props) => {
  const getButtonStyle = (color: string, fill: string) => {
    switch (fill) {
      case 'solid':
        return `bg-${color}-800 hover:bg-${color}-900 focus:bg-${color}-900 text-white rounded-sm w-full mr-2 p-2`;
      case 'outline':
        return `border-${color}-800 hover:border-${color}-900 focus:border-${color}-900 border-2 text-blue-800 w-full mr-2 p-2`;
      default:
        return 'p-4';
    }
  };

  return (
    <button
      className={getButtonStyle(props.color, props.fill)}
      onClick={props.onClick}
    >
      <span
        className={
          props.isTextVisible
            ? 'font-overpass uppercase tracking-wide'
            : 'sr-only'
        }
      >
        {props.text}
      </span>
      {GetIcon(1, props.icon)}
    </button>
  );
};
