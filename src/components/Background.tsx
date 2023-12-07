import React from "react";
import { ReactNode } from "react";

const Background = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="bg-cover min-h-screen flex"
      style={{ backgroundImage: "url('/images/wallpaper.jpg')" }}
    >
      {children}
    </div>
  );
};

export default Background;
