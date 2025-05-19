import React from "react";
import Navigation from "../_components/Navigation";

function Layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <Navigation />
      <div className="py-1">{children}</div>
    </div>
  );
}

export default Layout;
