import React from 'react';

export const Header = () => {
  return (
    <header className="mb-2 px-3 py-4 bg-peach-500 text-center flex justify-center">
      <h1 className="font-overpass">Budget Planner</h1>
      <span role="img" className="ml-3" aria-label="money flying away">
        💸
      </span>
    </header>
  );
};
