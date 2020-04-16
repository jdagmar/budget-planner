import React from 'react';

import {
  LabelIcon,
  MoneyIcon,
  RemoveIcon,
  CloseIcon,
  ErrorIcon,
  CreditCardIcon,
} from '../components/Icons';

export const GetIcon = (size: number, icon?: string, cssClass?: string) => {
  switch (icon) {
    case 'label':
      return <LabelIcon cssClass={cssClass} size={size} />;
    case 'money':
      return <MoneyIcon cssClass={cssClass} size={size} />;
    case 'remove':
      return <RemoveIcon cssClass={cssClass} size={size} />;
    case 'close':
      return <CloseIcon cssClass={cssClass} size={size} />;
    case 'error':
      return <ErrorIcon cssClass={cssClass} size={size} />;
    case 'credit':
      return <CreditCardIcon cssClass={cssClass} size={size} />;
    default:
      return null;
  }
};
