import React from 'react';
import { GetIcon } from '../helpers/GetIcon';

type Props = {
  text: string;
  isTextVisible: boolean;
  icon?: string;
  color?: string;
  onClick?: () => void;
};

export const Button = (props: Props) => {
  /* If component is used as a icon button, add extra padding to ensure minimum 42px touch accuracy */
  const btnClasses = `bg-${props.color} rounded-sm ${
    !props.isTextVisible && props.icon ? 'p-4' : 'p-2'
  } `;

  /* Make sure a screen reader text is available if component is used as a icon button */
  const btnTextClasses = `${
    props.isTextVisible ? '' : 'sr-only'
  } font-overpass uppercase tracking-wide`;

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={btnTextClasses}>{props.text}</span>
      {GetIcon(props.icon)}
    </button>
  );
};
