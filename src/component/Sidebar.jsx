import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      {/*<p>List of Cities</p>*/}
      {/*This is where we are going to display that list of the cities using Outlet*/}
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy;copyright {new Date().getFullYear()} by Worldwise Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
