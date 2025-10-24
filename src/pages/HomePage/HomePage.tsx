import heroVideo from "../../assets/videos/video.mp4";
import styles from "./HomePage.module.scss";

import Button from "../../components/Button/Button";

import {
  FaArrowRight,
  FaAward,
  FaBook,
  FaBriefcase,
  FaUsers,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { RootState } from "../../store/store";

const HomePage = () => {
  const { professionsData } = useSelector((state: RootState) => state.professions);

  return (
    <div className={styles.root}>
      <Header />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.videoBlock}>
            <div className={styles.bg}></div>
            <video autoPlay muted loop className={styles.videoBg}>
              <source src={heroVideo} type="video/mp4" />
            </video>
            <div className={styles.heroText}>
              <span>Открой для себя мир востребованных специальностей</span>
              <h1>
                Будущее в твоих руках: выбери рабочую профессию — стань героем
                новой индустрии
              </h1>
              <p>
                Цифровая платформа для популяризации рабочих профессий и
                поддержки профессионального развития
              </p>
              <div className={styles.ctaBtn}>
                <NavLink to={"/quiz"}>Найти свою профессию</NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция с преимуществами */}
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>
          Почему рабочие профессии — это будущее?
        </h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <FaBriefcase />
            </div>
            <h3>Востребованность</h3>
            <p>
              Стабильный спрос на квалифицированных специалистов во всех
              отраслях экономики
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <FaAward />
            </div>
            <h3>Достойная оплата</h3>
            <p>
              Конкурентоспособная заработная плата и возможности карьерного
              роста
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <FaBook />
            </div>
            <h3>Доступное обучение</h3>
            <p>
              Множество программ подготовки и переподготовки с государственной
              поддержкой
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <FaUsers />
            </div>
            <h3>Социальная значимость</h3>
            <p>Вклад в развитие общества и экономики страны</p>
          </div>
        </div>
      </section>

      {/* Популярные профессии */}
      <section className={styles.professions}>
        <h2 className={styles.sectionTitle}>Популярные рабочие профессии</h2>
        <div className={styles.professionsGrid}>
          {professionsData.map((profession, index) => (
            <div className={styles.professionCard} key={index}>
              <div className={styles.professionImage}>
                <img src={profession.image} alt={profession.name} />
              </div>
              <h3>{profession.name}</h3>
              <Link to={`/professions`} className={styles.professionLink}>
                Узнать больше <FaArrowRight className={styles.linkIcon} />
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.sectionAction}>
          <Button to="/professions">
            Все профессии
            <FaArrowRight className={styles.buttonIcon} />
          </Button>
        </div>
      </section>

      {/* Истории успеха */}
      <section className={styles.stories}>
        <h2 className={styles.sectionTitle}>Истории успеха</h2>
        <div className={styles.storiesContainer}>
          <div className={styles.storyCard}>
            <div className={styles.storyImage}>
              <img
                src="https://via.placeholder.com/400x300?text=История+успеха"
                alt="История успеха"
              />
            </div>
            <div className={styles.storyContent}>
              <h3>Александр Петров</h3>
              <h4>Сварщик высшего разряда</h4>
              <p>
                Начинал с простого помощника на стройке, а сейчас руковожу
                бригадой сварщиков на крупном промышленном объекте. Моя история
                доказывает, что в рабочих профессиях есть реальный карьерный
                рост.
              </p>
              <Link to="/stories" className={styles.storyLink}>
                Читать полностью <FaArrowRight className={styles.linkIcon} />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.sectionAction}>
          <Button to="/stories">
            Больше историй
            <FaArrowRight className={styles.buttonIcon} />
          </Button>
        </div>
      </section>

      {/* Образовательные возможности */}
      <section className={styles.education}>
        <h2 className={styles.sectionTitle}>Где получить образование?</h2>
        <div className={styles.educationGrid}>
          {["Колледжи", "Техникумы", "Учебные центры", "Онлайн-курсы"].map(
            (eduType, index) => (
              <div className={styles.educationCard} key={index}>
                <h3>{eduType}</h3>
                <p>Узнайте о лучших образовательных учреждениях и программах</p>
                <Link
                  to={`/education/${eduType.toLowerCase()}`}
                  className={styles.educationLink}
                >
                  Подробнее <FaArrowRight className={styles.linkIcon} />
                </Link>
              </div>
            )
          )}
        </div>
      </section>

      {/* Интерактивный блок */}
      <section className={styles.interactive}>
        <div className={styles.quizContainer}>
          <h2>Какая профессия подходит именно вам?</h2>
          <p>
            Пройдите наш тест и узнайте, какая рабочая профессия соответствует
            вашим интересам и способностям
          </p>
          <Button to="/quiz">
            Пройти тест
            <FaArrowRight className={styles.buttonIcon} />
          </Button>
        </div>
      </section>

      {/* Мероприятия */}
      <section className={styles.events}>
        <h2 className={styles.sectionTitle}>Ближайшие мероприятия</h2>
        <div className={styles.eventsGrid}>
          {[
            {
              title: "Ярмарка вакансий",
              date: "15 июня 2025",
              location: "Москва",
            },
            {
              title: "Мастер-класс по сварке",
              date: "22 июня 2025",
              location: "Санкт-Петербург",
            },
            {
              title: "День открытых дверей в колледже",
              date: "30 июня 2025",
              location: "Казань",
            },
          ].map((event, index) => (
            <div className={styles.eventCard} key={index}>
              <div className={styles.eventDate}>{event.date}</div>
              <h3>{event.title}</h3>
              <p className={styles.eventLocation}>{event.location}</p>
              <Link to={`/events/${index + 1}`} className={styles.eventLink}>
                Подробнее <FaArrowRight className={styles.linkIcon} />
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.sectionAction}>
          <Button to="/events">
            Все мероприятия
            <FaArrowRight className={styles.buttonIcon} />
          </Button>
        </div>
      </section>

      {/* Подписка */}
      <section className={styles.subscribe}>
        <div className={styles.subscribeContainer}>
          <h2>Будьте в курсе новостей</h2>
          <p>
            Подпишитесь на нашу рассылку, чтобы получать информацию о новых
            возможностях, мероприятиях и историях успеха
          </p>
          <form className={styles.subscribeForm}>
            <input type="email" placeholder="Ваш email" required />
            <Button>Подписаться</Button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
