import React from 'react';
import { GetIcon } from '../helpers/GetIcon';

type Props = {
  text: string;
  icon?: string;
  classes?: string;
  color?: string;
  onClick?: () => void;
};

export const Button = (props: Props) => {
  const cssClasses = `flex p-2 bg-${props.color} rounded-sm font-overpass items-center ${props.classes}`;
  return (
    <button className={cssClasses} onClick={props.onClick}>
      <span>{props.text}</span>
      {GetIcon(props.icon)}
    </button>
  );
};
