import styles from './ProfessionModal.module.scss'

import { useState, useEffect } from "react"
import { X, ArrowRight, Briefcase, GraduationCap, TrendingUp, Clock, MapPin, Wrench } from "lucide-react"
import { ProfessionType } from '../../store/slices/professionsSlice'

type ProfessionModalProps = {
  isOpen: boolean
  onClose: () => void
  profession: ProfessionType | null
}

const ProfessionModal = ({ isOpen, onClose, profession }:ProfessionModalProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      document.body.style.overflow = "hidden"
    } else {
      setTimeout(() => {
        setIsVisible(false)
      }, 300)
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!profession || !isVisible) return null

  const educationPrograms = [
    {
      name: "Колледж современных технологий",
      duration: "2 года 10 месяцев",
      location: "Москва",
      link: "/education/college-1",
    },
    {
      name: "Технический колледж №54",
      duration: "3 года 6 месяцев",
      location: "Санкт-Петербург",
      link: "/education/college-2",
    },
    {
      name: "Профессиональный лицей №18",
      duration: "2 года 6 месяцев",
      location: "Казань",
      link: "/education/college-3",
    },
  ]

  const skills = [
    "Чтение чертежей и технической документации",
    "Работа с различными видами сварочного оборудования",
    "Контроль качества сварных соединений",
    "Соблюдение техники безопасности",
    "Работа в команде",
  ]

  const careerPath = [
    "Помощник сварщика",
    "Сварщик 3-го разряда",
    "Сварщик 4-го разряда",
    "Сварщик 5-го разряда",
    "Сварщик 6-го разряда",
    "Бригадир сварщиков",
    "Мастер сварочного участка",
  ]

  return (
    <div
      className={`${styles.modalOverlay} ${isOpen ? styles.modalOpen : styles.modalClosed}`}
      onClick={onClose}
    >
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalCloseButton} onClick={onClose}>
          <X size={24} />
        </button>

        <div className={styles.modalHeader}>
          <div className={styles.modalImage}>
            <img
              src={profession.image || `/placeholder.svg?height=400&width=600&text=${profession.name}`}
              alt={profession.name}
              width={600}
              height={400}
              className={styles.modalImg}
            />
          </div>
          <div className={styles.modalTitle}>
            <h2>{profession.name}</h2>
            <p>{profession.description}</p>
          </div>
        </div>

        <div className={styles.modalDetails}>
          <div className={styles.detailItem}>
            <div className={styles.detailIcon}>
              <Briefcase size={20} />
            </div>
            <div className={styles.detailContent}>
              <span className={styles.detailLabel}>Зарплата:</span>
              <span className={styles.detailValue}>{profession.salary}</span>
            </div>
          </div>
          <div className={styles.detailItem}>
            <div className={styles.detailIcon}>
              <TrendingUp size={20} />
            </div>
            <div className={styles.detailContent}>
              <span className={styles.detailLabel}>Востребованность:</span>
              <span className={styles.detailValue}>{profession.demand}</span>
            </div>
          </div>
          <div className={styles.detailItem}>
            <div className={styles.detailIcon}>
              <GraduationCap size={20} />
            </div>
            <div className={styles.detailContent}>
              <span className={styles.detailLabel}>Образование:</span>
              <span className={styles.detailValue}>{profession.education}</span>
            </div>
          </div>
        </div>

        <div className={styles.modalContent}>
          <div className={styles.modalSection}>
            <h3>Описание профессии</h3>
            <p>
              {profession.fullDescription ||
                `${profession.name} - это специалист, который выполняет работы по соединению металлических деталей с помощью сварки. Сварщики работают в различных отраслях промышленности, включая строительство, машиностроение, судостроение и многие другие. Они используют различные типы сварочного оборудования и технологий для создания прочных и надежных соединений.`}
            </p>
            <p>
              Профессия сварщика требует технических знаний, точности, внимательности и соблюдения правил безопасности.
              Хороший сварщик должен уметь читать чертежи, знать свойства различных металлов и сплавов, а также владеть
              различными техниками сварки.
            </p>
          </div>

          <div className={styles.modalSection}>
            <h3>Необходимые навыки</h3>
            <ul className={styles.skillsList}>
              {skills.map((skill, index) => (
                <li key={index} className={styles.skillItem}>
                  <Wrench size={16} className={styles.skillIcon} />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.modalSection}>
            <h3>Карьерный рост</h3>
            <div className={styles.careerPath}>
              {careerPath.map((position, index) => (
                <div key={index} className={styles.careerStep}>
                  <div className={styles.careerStepNumber}>{index + 1}</div>
                  <div className={styles.careerStepContent}>
                    <h4>{position}</h4>
                    {index < careerPath.length - 1 && <ArrowRight className={styles.careerArrow} />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.modalSection}>
            <h3>Где получить образование</h3>
            <div className={styles.educationList}>
              {educationPrograms.map((program, index) => (
                <div key={index} className={styles.educationItem}>
                  <h4>{program.name}</h4>
                  <div className={styles.educationDetails}>
                    <div className={styles.educationDetail}>
                      <Clock size={16} className={styles.educationIcon} />
                      <span>{program.duration}</span>
                    </div>
                    <div className={styles.educationDetail}>
                      <MapPin size={16} className={styles.educationIcon} />
                      <span>{program.location}</span>
                    </div>
                  </div>
                  <a href={program.link} className={styles.educationLink}>
                    Подробнее <ArrowRight size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.modalFooter}>
          <a href={`/professions/${profession.slug}/apply`} className={styles.applyButton}>
            Узнать о возможностях обучения
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProfessionModal