import React from 'react';
import { AddIcon } from './Icons';

type Props = {
  text: string;
  icon?: string;
  onClick?: () => void;
  classes?: string;
};

export const Button = (props: Props) => {
  const cssClasses = 'flex p-2 bg-swampGreen rounded-sm' + props.classes;
  return (
    <button className={cssClasses} onClick={props.onClick}>
      <span>{props.text}</span>
      <AddIcon />
    </button>
  );
};
