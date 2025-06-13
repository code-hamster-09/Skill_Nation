import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { handleAnswer, restartQuiz } from "../../store/slices/quizSlice";
import styles from "./CareerQuiz.module.scss";
import { useDispatch, useSelector } from "react-redux";

const CareerQuiz = () => {
  const { questions, careerTypes, answers, showResult, currentQuestion } = useSelector((state) => state.quiz)
  const dispatch = useDispatch()

  const calculateResult = () => {
    const typeCounts = {
      realistic: 0,
      investigative: 0,
      artistic: 0,
      social: 0,
      enterprising: 0,
      conventional: 0,
    };

    answers.forEach((answer) => {
      typeCounts[answer]++;
    });

    let maxType = "realistic";
    let maxCount = 0;

    for (const type in typeCounts) {
      if (typeCounts[type] > maxCount) {
        maxCount = typeCounts[type];
        maxType = type;
      }
    }

    return maxType;
  };

  if (showResult) {
    const resultType = calculateResult();
    const result = careerTypes[resultType];

    return (
      <div className={styles.root}>
        <Header />
        <div className={styles.quizContainer}>
          <h2>Ваш результат</h2>
          <div className={styles.resultSection}>
            <h3>{result.title}</h3>
            <p>{result.description}</p>

            <h4>Рекомендуемые профессии:</h4>
            <ul className={styles.careersList}>
              {result.careers.map((career, index) => (
                <li key={index}>{career}</li>
              ))}
            </ul>
          </div>

          <button className={styles.restartButton} onClick={() => dispatch(restartQuiz())}>
            Пройти тест еще раз
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.quizContainer}>
        <h2>Профессиональный опросник</h2>
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div> 

        <div className={styles.questionSection}>
          <h3>
            Вопрос {currentQuestion + 1}
          </h3>
          <p className={styles.questionText}>
            {questions[currentQuestion].text}
          </p>

          <div className={styles.optionsContainer}>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={styles.optionButton}
                onClick={() => dispatch(handleAnswer(option.value))}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CareerQuiz;
