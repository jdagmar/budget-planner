import React from 'react';
import { AddIcon } from './Icons';

type Props = {
  text: string;
  icon?: string;
  onClick?: () => void;
};

export const Button = (props: Props) => {
  return (
    <button
      className="flex p-2 bg-swampGreen rounded-sm"
      onClick={props.onClick}
    >
      <span>{props.text}</span>
      <AddIcon />
    </button>
  );
};
