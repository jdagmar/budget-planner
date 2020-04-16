import React from 'react';

export const Header = () => {
  return (
    <header className="mb-2 px-3 py-4 border-gray-200 border-b  flex ">
      <h1 className="font-overpass">Budget Planner</h1>
      <span role="img" className="ml-3" aria-label="money flying away">
        💸
      </span>
    </header>
  );
};
