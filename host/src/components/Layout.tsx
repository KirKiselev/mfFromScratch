import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ padding: "20px" }}>
      <header style={{ marginBottom: "20px" }}>
        <nav>
          <h1>Micro Frontend Demo</h1>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;