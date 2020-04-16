import React from 'react';

type Props = {
  cssClass?: string;
  size: number;
};

export const RemoveIcon = (props: Props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      width={`${props.size}em`}
      height={`${props.size}em`}
      className={props.cssClass}
    >
      <path d="M21 4H8l-7 8 7 8h13a2 2 0 002-2V6a2 2 0 00-2-2zM18 9l-6 6M12 9l6 6" />
    </svg>
  );
};

export const MoneyIcon = (props: Props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      width={`${props.size}em`}
      height={`${props.size}em`}
      className={props.cssClass}
    >
      <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  );
};

export const LabelIcon = (props: Props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      width={`${props.size}em`}
      height={`${props.size}em`}
      className={props.cssClass}
    >
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82zM7 7h.01" />
    </svg>
  );
};

export const CloseIcon = (props: Props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      width={`${props.size}em`}
      height={`${props.size}em`}
      className={props.cssClass}
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
};

export const ErrorIcon = (props: Props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      width={`${props.size}em`}
      height={`${props.size}em`}
      className={props.cssClass}
    >
      <path d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2zM12 8v4M12 16h.01" />
    </svg>
  );
};

export const CreditCardIcon = (props: Props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      width={`${props.size}em`}
      height={`${props.size}em`}
      className={props.cssClass}
      fill="currentColor"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
    </svg>
  );
};
