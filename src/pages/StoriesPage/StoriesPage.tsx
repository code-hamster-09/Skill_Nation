import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import styles from "./StoriesPage.module.scss";

// Импорт иконок из react-icons
import { FaArrowRight } from "react-icons/fa";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const StoriesPage = () => {
  const stories = [
    {
      id: 1,
      name: "Александр Петров",
      profession: "Сварщик высшего разряда",
      image: "https://via.placeholder.com/400x300?text=Александр",
      excerpt:
        "Начинал с простого помощника на стройке, а сейчас руковожу бригадой сварщиков на крупном промышленном объекте. Моя история доказывает, что в рабочих профессиях есть реальный карьерный рост.",
      slug: "aleksandr-petrov",
    },
    {
      id: 2,
      name: "Елена Смирнова",
      profession: "Оператор ЧПУ",
      image: "https://via.placeholder.com/400x300?text=Елена",
      excerpt:
        "После школы решила пойти учиться на оператора ЧПУ вместо университета. Сейчас работаю на современном оборудовании, получаю достойную зарплату и постоянно развиваюсь в профессии.",
      slug: "elena-smirnova",
    },
    {
      id: 3,
      name: "Дмитрий Иванов",
      profession: "Автомеханик",
      image: "https://via.placeholder.com/400x300?text=Дмитрий",
      excerpt:
        "Всегда любил возиться с машинами. Прошел обучение, работал в нескольких автосервисах, а теперь открыл собственную мастерскую. Моя история — пример того, как хобби может стать успешным бизнесом.",
      slug: "dmitriy-ivanov",
    },
    {
      id: 4,
      name: "Ольга Козлова",
      profession: "Электрик",
      image: "https://via.placeholder.com/400x300?text=Ольга",
      excerpt:
        "Многие удивляются, когда узнают, что я работаю электриком. Но я доказала, что женщины могут быть успешными в традиционно мужских профессиях. Сейчас я специализируюсь на умных домах и современных системах.",
      slug: "olga-kozlova",
    },
    {
      id: 5,
      name: "Сергей Николаев",
      profession: "Столяр-краснодеревщик",
      image: "https://via.placeholder.com/400x300?text=Сергей",
      excerpt:
        "Начинал с изготовления простой мебели в гараже, а сейчас мои изделия заказывают состоятельные клиенты по всей стране. Ручная работа с деревом — это искусство, которое всегда будет цениться.",
      slug: "sergey-nikolaev",
    },
  ];

  return (
    <div className={styles.container}>
      <Header />
      {/* Заголовок страницы */}
      <section className={styles.pageHeader}>
        <div className={styles.pageHeaderContent}>
          <h1>Истории успеха</h1>
          <p>
            Вдохновляющие истории людей, которые добились успеха в рабочих
            профессиях
          </p>
        </div>
      </section>

      {/* Список историй */}
      <section className={styles.storiesListSection}>
        <div className={styles.storiesList}>
          {stories.map((story) => (
            <div className={styles.storyListCard} key={story.id}>
              <div className={styles.storyListImage}>
                <img src={story.image || "/placeholder.svg"} alt={story.name} />
              </div>
              <div className={styles.storyListContent}>
                <h2>{story.name}</h2>
                <h3>{story.profession}</h3>
                <p>{story.excerpt}</p>
                <Link
                  to={`/stories/${story.slug}`}
                  className={styles.storyMoreLink}
                >
                  Читать полностью <FaArrowRight className={styles.linkIcon} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Поделиться своей историей */}
      <section className={styles.shareStorySection}>
        <div className={styles.shareStoryContainer}>
          <h2>У вас есть своя история успеха?</h2>
          <p>
            Поделитесь своим опытом и вдохновите других на выбор рабочей
            профессии
          </p>
          <Button to="/share-story">
            Поделиться историей
            <FaArrowRight className={styles.buttonIcon} />
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default StoriesPage;
