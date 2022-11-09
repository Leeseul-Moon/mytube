import React from 'react';
import { Outlet } from 'react-router';
import SearchHeader from './components/SearchHeader';

function App() {
  return (
    <div>
      <SearchHeader />
      <Outlet />
    </div>
  );
}

export default App;
