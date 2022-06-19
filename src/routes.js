import * as React from "react";
import { Routes, Route } from "react-router-dom";
import HorizontalNavigator from "./components/navbar";
import Home from "./containers/home";
import Upload from "./containers/upload";

function AppNavigator() {
  return (
    <>
        <HorizontalNavigator />
        <div className="container">
          <div className="min-w-full min-h-full bg-gray-200 p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/upload" element={<Upload />} />
            </Routes>
          </div>
        </div>
    </>
  );
}

export default AppNavigator;
