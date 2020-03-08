import React from 'react';

import {
  LabelIcon,
  MoneyIcon,
  RemoveIcon,
  CloseIcon,
} from '../components/Icons';

export const GetIcon = (icon?: string, cssClass?: string) => {
  switch (icon) {
    case 'label':
      return <LabelIcon cssClass={cssClass} />;
    case 'money':
      return <MoneyIcon cssClass={cssClass} />;
    case 'remove':
      return <RemoveIcon cssClass={cssClass} />;
    case 'close':
      return <CloseIcon cssClass={cssClass} />;
    default:
      return null;
  }
};
