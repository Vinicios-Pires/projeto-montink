import type { PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-custom-primary-bg">
      {children}
    </div>
  );
};

export default Layout;
