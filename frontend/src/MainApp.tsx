import styles from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";

const MainApp = () => {
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <nav>
          <ul>
            <li>
              <Link to="app">Add new account</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default MainApp;
