import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <NavLink to={"/"}>
          <h1>SkillNation</h1>
        </NavLink>
      </div>
      <div className={styles.navigation}>
        <nav>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeNav : styles.nav
            }
            to="/"
          >
            Главная
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeNav : styles.nav
            }
            to="/professions"
          >
            Профессии
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeNav : styles.nav
            }
            to="/stories"
          >
            Истории успеха
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeNav : styles.nav
            }
            to="/tech"
          >
            Технологии
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeNav : styles.nav
            }
            to="/quiz"
          >
            Тест для профессии
          </NavLink>
        </nav>
      </div>
      <div className={styles.cta}>
        <NavLink to="/auth">Войти</NavLink>
      </div>
    </div>
  );
};

export default Header;
