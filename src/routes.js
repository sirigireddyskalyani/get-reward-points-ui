import * as React from "react";
import { Routes, Route } from "react-router-dom";
import HorizontalNavigator from "./components/navbar";
import Home from "./containers/home";

function AppNavigator() {
  return (
    <>
        <HorizontalNavigator />
        <div className="container">
          <div className="min-w-full min-h-full bg-gray-200 p-4">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
    </>
  );
}

export default AppNavigator;
