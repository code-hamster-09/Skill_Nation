import { Link } from "react-router-dom"
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <h2>SkillNation</h2>
          <p>Цифровая платформа для популяризации рабочих профессий</p>
        </div>
        <div className={styles.links}>
          <div className={styles.column}>
            <h3>О проекте</h3>
            <ul>
              <li>
                <Link to="/about">О нас</Link>
              </li>
              <li>
                <Link to="/mission">Наша миссия</Link>
              </li>
              <li>
                <Link to="/partners">Партнеры</Link>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Разделы</h3>
            <ul>
              <li>
                <Link to="/professions">Профессии</Link>
              </li>
              <li>
                <Link to="/stories">Истории успеха</Link>
              </li>
              <li>
                <Link to="/education">Образование</Link>
              </li>
              <li>
                <Link to="/events">Мероприятия</Link>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Контакты</h3>
            <ul>
              <li>
                <Link to="/contact">Связаться с нами</Link>
              </li>
              <li>
                <Link to="/faq">Часто задаваемые вопросы</Link>
              </li>
              <li>
                <Link to="/support">Поддержка</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} SkillNation. All right reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
