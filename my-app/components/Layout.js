// components/Layout.js
const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>My Data Vault</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2025 My Vault Project</p>
      </footer>
    </div>
  );
};

export default Layout;
