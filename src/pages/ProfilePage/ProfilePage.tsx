import {
  BookOpen,
  Briefcase,
  Calendar,
  Clock,
  Download,
  Edit3,
  Heart,
  Mail,
  MapPin,
  Phone,
  Upload,
  User,
} from "lucide-react";
import { useState } from "react";
import styles from "./ProfilePage.module.scss";
import { NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isEditing, setIsEditing] = useState(false);

  const userData = {
    name: "Александр Петров",
    email: "aleksandr.petrov@email.com",
    phone: "+7 (999) 123-45-67",
    location: "Москва, Россия",
    birthDate: "15 марта 1995",
    registrationDate: "10 января 2024",
    avatar: "/placeholder.svg?height=150&width=150&text=АП",
    bio: "Интересуюсь рабочими профессиями, особенно сваркой и металлообработкой. Хочу получить новую специальность и развиваться в этой области.",
    currentProfession: "Менеджер по продажам",
    experience: "5 лет",
  };

  const favoritesProfessions = [
    {
      id: 1,
      name: "Сварщик",
      image: "/placeholder.svg?height=100&width=150&text=Сварщик",
      salary: "60 000 - 120 000 ₽",
      demand: "Высокий",
    },
    {
      id: 2,
      name: "Оператор ЧПУ",
      image: "/placeholder.svg?height=100&width=150&text=ЧПУ",
      salary: "70 000 - 130 000 ₽",
      demand: "Высокий",
    },
    {
      id: 3,
      name: "Электрик",
      image: "/placeholder.svg?height=100&width=150&text=Электрик",
      salary: "50 000 - 100 000 ₽",
      demand: "Высокий",
    },
  ];

  const completedTests = [
    {
      id: 1,
      name: "Тест на профориентацию",
      result: "Технические профессии",
      score: "85%",
      date: "20 мая 2024",
    },
    {
      id: 2,
      name: "Тест по сварке",
      result: "Базовый уровень",
      score: "78%",
      date: "15 мая 2024",
    },
    {
      id: 3,
      name: "Тест по электротехнике",
      result: "Начальный уровень",
      score: "65%",
      date: "10 мая 2024",
    },
  ];

  const achievements = [
    {
      id: 1,
      name: "Первые шаги",
      description: "Зарегистрировались на платформе",
      icon: "🎯",
      date: "10 января 2024",
    },
    {
      id: 2,
      name: "Исследователь",
      description: "Изучили 10 профессий",
      icon: "🔍",
      date: "25 января 2024",
    },
    {
      id: 3,
      name: "Тестировщик",
      description: "Прошли 3 теста",
      icon: "📝",
      date: "20 мая 2024",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      action: "Добавил в избранное профессию",
      target: "Сварщик",
      date: "2 часа назад",
      icon: <Heart size={16} />,
    },
    {
      id: 2,
      action: "Прошел тест",
      target: "Тест на профориентацию",
      date: "1 день назад",
      icon: <BookOpen size={16} />,
    },
    {
      id: 3,
      action: "Просмотрел профессию",
      target: "Оператор ЧПУ",
      date: "3 дня назад",
      icon: <Briefcase size={16} />,
    },
  ];

  return (
    <div className={styles.siteContainer}>
      {/* Шапка сайта */}
      <Header />

      {/* Профиль пользователя */}
      <div className={styles.profileContainer}>
        {/* Шапка профиля */}
        <div className={styles.profileHeader}>
          <div className={styles.profileCover}>
            <div className={styles.profileAvatarSection}>
              <div className={styles.profileAvatar}>
                <img
                  src={userData.avatar || "/placeholder.svg"}
                  alt={userData.name}
                  width={150}
                  height={150}
                />
                <button className={styles.avatarUploadBtn}>
                  <Upload size={16} />
                </button>
              </div>
              <div className={styles.profileInfo}>
                <h1>{userData.name}</h1>
                <p className={styles.profileProfession}>
                  {userData.currentProfession}
                </p>
                <p className={styles.profileLocation}>
                  <MapPin size={16} />
                  {userData.location}
                </p>
                <p className={styles.profileBio}>{userData.bio}</p>
              </div>
            </div>
            <div className={styles.profileActions}>
              <button
                className={styles.editProfileBtn}
                onClick={() => setIsEditing(!isEditing)}
              >
                <Edit3 size={16} />
                Редактировать профиль
              </button>
              <button className={styles.downloadResumeBtn}>
                <Download size={16} />
                Скачать резюме
              </button>
            </div>
          </div>
        </div>

        {/* Навигация по вкладкам */}
        <div className={styles.profileTabs}>
          <button
            className={`${styles.tabButton} ${
              activeTab === "overview" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("overview")}
          >
            Обзор
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === "favorites" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("favorites")}
          >
            Избранное
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === "tests" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("tests")}
          >
            Тесты
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === "achievements" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("achievements")}
          >
            Достижения
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === "settings" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("settings")}
          >
            Настройки
          </button>
        </div>

        {/* Контент вкладок */}
        <div className={styles.profileContent}>
          {activeTab === "overview" && (
            <div className={styles.overviewContent}>
              <div className={styles.overviewGrid}>
                {/* Личная информация */}
                <div className={styles.infoCard}>
                  <h3>Личная информация</h3>
                  <div className={styles.infoList}>
                    <div className={styles.infoItem}>
                      <Mail size={18} />
                      <span>{userData.email}</span>
                    </div>
                    <div className={styles.infoItem}>
                      <Phone size={18} />
                      <span>{userData.phone}</span>
                    </div>
                    <div className={styles.infoItem}>
                      <Calendar size={18} />
                      <span>Дата рождения: {userData.birthDate}</span>
                    </div>
                    <div className={styles.infoItem}>
                      <User size={18} />
                      <span>На платформе с: {userData.registrationDate}</span>
                    </div>
                  </div>
                </div>

                {/* Статистика */}
                <div className={styles.statsCard}>
                  <h3>Статистика</h3>
                  <div className={styles.statsGrid}>
                    <div className={styles.statItem}>
                      <div className={styles.statNumber}>12</div>
                      <div className={styles.statLabel}>
                        Изученных профессий
                      </div>
                    </div>
                    <div className={styles.statItem}>
                      <div className={styles.statNumber}>3</div>
                      <div className={styles.statLabel}>Пройденных тестов</div>
                    </div>
                    <div className={styles.statItem}>
                      <div className={styles.statNumber}>5</div>
                      <div className={styles.statLabel}>
                        Избранных профессий
                      </div>
                    </div>
                    <div className={styles.statItem}>
                      <div className={styles.statNumber}>8</div>
                      <div className={styles.statLabel}>Достижений</div>
                    </div>
                  </div>
                </div>

                {/* Последняя активность */}
                <div className={styles.activityCard}>
                  <h3>Последняя активность</h3>
                  <div className={styles.activityList}>
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className={styles.activityItem}>
                        <div className={styles.activityIcon}>
                          {activity.icon}
                        </div>
                        <div className={styles.activityContent}>
                          <p>
                            {activity.action} <strong>{activity.target}</strong>
                          </p>
                          <span className={styles.activityDate}>
                            {activity.date}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "favorites" && (
            <div className={styles.favoritesContent}>
              <h3>Избранные профессии</h3>
              <div className={styles.favoritesGrid}>
                {favoritesProfessions.map((profession) => (
                  <div key={profession.id} className={styles.favoriteCard}>
                    <div className={styles.favoriteImage}>
                      <img
                        src={profession.image || "/placeholder.svg"}
                        alt={profession.name}
                        width={150}
                        height={100}
                      />
                    </div>
                    <div className={styles.favoriteInfo}>
                      <h4>{profession.name}</h4>
                      <p className={styles.favoriteSalary}>
                        {profession.salary}
                      </p>
                      <p className={styles.favoriteDemand}>
                        Востребованность: {profession.demand}
                      </p>
                      <div className={styles.favoriteActions}>
                        <NavLink
                          to={`/professions/${profession.id}`}
                          className={styles.viewBtn}
                        >
                          Подробнее
                        </NavLink>
                        <button className={styles.removeFavoriteBtn}>
                          <Heart size={16} fill="currentColor" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "tests" && (
            <div className={styles.testsContent}>
              <h3>Пройденные тесты</h3>
              <div className={styles.testsList}>
                {completedTests.map((test) => (
                  <div key={test.id} className={styles.testCard}>
                    <div className={styles.testInfo}>
                      <h4>{test.name}</h4>
                      <p className={styles.testResult}>
                        Результат: {test.result}
                      </p>
                      <p className={styles.testDate}>
                        <Clock size={16} />
                        {test.date}
                      </p>
                    </div>
                    <div className={styles.testScore}>
                      <div className={styles.scoreCircle}>
                        <span>{test.score}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.testsActions}>
                <NavLink to="/tests" className={styles.primaryButton}>
                  Пройти новый тест
                </NavLink>
              </div>
            </div>
          )}

          {activeTab === "achievements" && (
            <div className={styles.achievementsContent}>
              <h3>Достижения</h3>
              <div className={styles.achievementsGrid}>
                {achievements.map((achievement) => (
                  <div key={achievement.id} className={styles.achievementCard}>
                    <div className={styles.achievementIcon}>
                      {achievement.icon}
                    </div>
                    <div className={styles.achievementInfo}>
                      <h4>{achievement.name}</h4>
                      <p>{achievement.description}</p>
                      <span className={styles.achievementDate}>
                        {achievement.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div className={styles.settingsContent}>
              <h3>Настройки профиля</h3>
              <div className={styles.settingsSections}>
                <div className={styles.settingsSection}>
                  <h4>Уведомления</h4>
                  <div className={styles.settingItem}>
                    <label>
                      <input type="checkbox" defaultChecked />
                      <span>Уведомления о новых профессиях</span>
                    </label>
                  </div>
                  <div className={styles.settingItem}>
                    <label>
                      <input type="checkbox" defaultChecked />
                      <span>Уведомления о мероприятиях</span>
                    </label>
                  </div>
                  <div className={styles.settingItem}>
                    <label>
                      <input type="checkbox" />
                      <span>Email-рассылка</span>
                    </label>
                  </div>
                </div>

                <div className={styles.settingsSection}>
                  <h4>Приватность</h4>
                  <div className={styles.settingItem}>
                    <label>
                      <input type="checkbox" defaultChecked />
                      <span>Показывать профиль другим пользователям</span>
                    </label>
                  </div>
                  <div className={styles.settingItem}>
                    <label>
                      <input type="checkbox" />
                      <span>Показывать активность</span>
                    </label>
                  </div>
                </div>

                <div className={styles.settingsSection}>
                  <h4>Аккаунт</h4>
                  <div className={styles.settingActions}>
                    <button className={styles.changePasswordBtn}>
                      Изменить пароль
                    </button>
                    <button className={styles.deleteAccountBtn}>
                      Удалить аккаунт
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Подвал сайта */}
      <Footer />
    </div>
  );
}
