import { PropsWithChildren } from "react";
import MainFooter from "./footer";
import MainHeader from "./header";

const LayoutMain: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="relative w-full">
      <MainHeader />
      <main className="pt-0 relative min-h-screen">{children}</main>
      <MainFooter />
    </main>
  );
};

export default LayoutMain;
