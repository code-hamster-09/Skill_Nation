import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./ProfessionsPage.module.scss";

// Импорт иконок из react-icons
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import ProfessionModal from "../../components/Profession/ProfessionModal";

const ProfessionsPage = () => {
  const { professionsData } = useSelector((state) => state.professions);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    education: "",
    demand: "",
    industry: "",
  });

  const [isOpen, setIsOpen] = useState(false);
  const [selectedProfession, setSelectedProfession] = useState(null);
  const openModal = (modalProfession) => {
    setIsOpen(true);
    setSelectedProfession(modalProfession);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const filteredProfessions = professionsData.filter((profession) => {
    // Поиск по названию
    const matchesSearch =
      profession.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profession.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesEducation =
      !filters.education || profession.education === filters.education;

    const matchesDemand =
      !filters.demand || profession.demand === filters.demand;

    const matchesIndustry =
      !filters.industry || profession.industry === filters.industry;

    return (
      matchesSearch && matchesEducation && matchesDemand && matchesIndustry
    );
  });

  return (
    <div className={styles.container}>
      <Header />

      {/* Заголовок страницы */}
      <section className={styles.pageHeader}>
        <div className={styles.pageHeaderContent}>
          <h1>Рабочие профессии</h1>
          <p>
            Изучите разнообразие рабочих профессий, их особенности, требования и
            перспективы
          </p>
        </div>
      </section>
      <ProfessionModal
        isOpen={isOpen}
        onClose={onClose}
        profession={selectedProfession}
      />
      {/* Поиск профессий */}
      <section className={styles.searchSection}>
        <div className={styles.searchContainer}>
          <div className={styles.searchBox}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Поиск профессии..."
              value={searchTerm}
              onChange={handleSearchChange}
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>Найти</button>
          </div>
          <div className={styles.filterOptions}>
            <div className={styles.filterGroup}>
              <label>Уровень образования:</label>
              <select
                name="education"
                value={filters.education}
                onChange={handleFilterChange}
              >
                <option value="">Все</option>
                <option value="Среднее профессиональное">
                  Среднее профессиональное
                </option>
                <option value="Высшее">Высшее</option>
                <option value="Курсы">Курсы</option>
              </select>
            </div>
            <div className={styles.filterGroup}>
              <label>Востребованность:</label>
              <select
                name="demand"
                value={filters.demand}
                onChange={handleFilterChange}
              >
                <option value="">Все</option>
                <option value="Высокий">Высокая</option>
                <option value="Средний">Средняя</option>
                <option value="Низкий">Низкая</option>
              </select>
            </div>
            <div className={styles.filterGroup}>
              <label>Отрасль:</label>
              <select
                name="industry"
                value={filters.industry}
                onChange={handleFilterChange}
              >
                <option value="">Все</option>
                <option value="Строительство">Строительство</option>
                <option value="Производство">Производство</option>
                <option value="Транспорт">Транспорт</option>
                <option value="Сфера услуг">Сфера услуг</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Список профессий */}
      <section className={styles.professionsListSection}>
        <div className={styles.professionsList}>
          {filteredProfessions.length > 0 ? (
            filteredProfessions.map((profession, index) => (
              <div className={styles.professionListCard} key={index}>
                <div className={styles.professionListImage}>
                  <img src={profession.image} alt={profession.name} />
                </div>
                <div className={styles.professionListContent}>
                  <h2>{profession.name}</h2>
                  <p>{profession.description}</p>
                  <div className={styles.professionDetails}>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Зарплата:</span>
                      <span className={styles.detailValue}>
                        {profession.salary}
                      </span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>
                        Востребованность:
                      </span>
                      <span className={styles.detailValue}>
                        {profession.demand}
                      </span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Образование:</span>
                      <span className={styles.detailValue}>
                        {profession.education}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      openModal(profession);
                    }}
                    className={styles.professionMoreLink}
                  >
                    Подробнее <FaArrowRight className={styles.linkIcon} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.noResults}>
              <p>
                По вашему запросу ничего не найдено. Попробуйте изменить
                параметры поиска.
              </p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProfessionsPage;
