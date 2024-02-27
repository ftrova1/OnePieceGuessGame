import { ReactNode } from "react";

const Background = ({ children }: { children: ReactNode }) => {
  return <div className="bg-cover min-h-screen flex">{children}</div>;
};

export default Background;
