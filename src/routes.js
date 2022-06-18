import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './containers/home';

function AppNavigator() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default AppNavigator;