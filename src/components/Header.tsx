import React from 'react';
import { GetIcon } from '../helpers/GetIcon';

export const Header = () => {
  return (
    <header className="mb-2 px-3 py-4 border-gray-200 border-b flex center-items">
      {GetIcon(1.6, 'credit', 'mr-2 self-center')}
      <h1 className="font-overpass text-xl">Budget Planner</h1>
    </header>
  );
};
