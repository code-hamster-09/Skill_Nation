import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    {
      id: 1,
      text: "Как вы предпочитаете проводить время?",
      options: [
        { text: "Работать с техникой и механизмами", value: "realistic" },
        { text: "Исследовать и анализировать", value: "investigative" },
        { text: "Творить и создавать что-то новое", value: "artistic" },
        { text: "Помогать и заботиться о других", value: "social" },
        { text: "Убеждать и руководить", value: "enterprising" },
        { text: "Работать с цифрами и системами", value: "conventional" },
      ],
    },
    {
      id: 2,
      text: "Какие школьные предметы вам нравились больше всего?",
      options: [
        { text: "Физика, технология", value: "realistic" },
        { text: "Математика, естественные науки", value: "investigative" },
        { text: "Искусство, литература", value: "artistic" },
        { text: "Психология, биология", value: "social" },
        { text: "Экономика, обществознание", value: "enterprising" },
        { text: "Информатика, бухгалтерия", value: "conventional" },
      ],
    },
    {
      id: 3,
      text: "Как бы вас описали ваши друзья?",
      options: [
        { text: "Практичный, технически подкованный", value: "realistic" },
        { text: "Аналитичный, любознательный", value: "investigative" },
        { text: "Креативный, оригинальный", value: "artistic" },
        { text: "Дружелюбный, эмпатичный", value: "social" },
        { text: "Энергичный, амбициозный", value: "enterprising" },
        {
          text: "Организованный, внимательный к деталям",
          value: "conventional",
        },
      ],
    },
    {
      id: 4,
      text: "Какой рабочий процесс вам ближе?",
      options: [
        {
          text: "Работа руками, создание физических объектов",
          value: "realistic",
        },
        { text: "Решение сложных задач, исследования", value: "investigative" },
        { text: "Свободное творчество, самовыражение", value: "artistic" },
        { text: "Общение с людьми, помощь", value: "social" },
        { text: "Руководство, продажи, переговоры", value: "enterprising" },
        { text: "Работа с данными, систематизация", value: "conventional" },
      ],
    },
    {
      id: 5,
      text: "Что для вас важно в работе?",
      options: [
        {
          text: "Конкретные результаты, практическая польза",
          value: "realistic",
        },
        { text: "Интеллектуальный вызов, открытия", value: "investigative" },
        { text: "Возможность самовыражения", value: "artistic" },
        { text: "Возможность помогать другим", value: "social" },
        { text: "Карьерный рост, высокий доход", value: "enterprising" },
        { text: "Стабильность, четкие инструкции", value: "conventional" },
      ],
    },
  ],
  careerTypes: {
    realistic: {
      title: "Реалистический тип",
      description:
        "Вам нравится работать с инструментами, машинами и механизмами. Вы предпочитаете конкретные задачи и практические результаты.",
      careers: [
        "Инженер",
        "Механик",
        "Электрик",
        "Строитель",
        "Агроном",
        "Водитель",
        "Плотник",
      ],
    },
    investigative: {
      title: "Интеллектуальный тип",
      description:
        "Вы любите анализировать, исследовать и решать сложные задачи. Научная работа и интеллектуальный вызов для вас важны.",
      careers: [
        "Ученый",
        "Программист",
        "Математик",
        "Врач",
        "Фармацевт",
        "Биолог",
        "Физик",
      ],
    },
    artistic: {
      title: "Артистический тип",
      description:
        "Вы креативны, оригинальны и любите самовыражаться через искусство и творчество.",
      careers: [
        "Дизайнер",
        "Художник",
        "Музыкант",
        "Писатель",
        "Актер",
        "Архитектор",
        "Фотограф",
      ],
    },
    social: {
      title: "Социальный тип",
      description:
        "Вы общительны, эмпатичны и любите помогать другим людям. Работа в сфере услуг и образования вам подходит.",
      careers: [
        "Учитель",
        "Психолог",
        "Врач",
        "Социальный работник",
        "Тренер",
        "HR-специалист",
        "Воспитатель",
      ],
    },
    enterprising: {
      title: "Предприимчивый тип",
      description:
        "Вы амбициозны, энергичны и любите влиять на других. Руководство, продажи и бизнес - ваша стихия.",
      careers: [
        "Предприниматель",
        "Менеджер",
        "Юрист",
        "Маркетолог",
        "Политик",
        "Агент по недвижимости",
        "Риелтор",
      ],
    },
    conventional: {
      title: "Конвенциональный тип",
      description:
        "Вы организованы, внимательны к деталям и предпочитаете структурированную работу с данными и системами.",
      careers: [
        "Бухгалтер",
        "Банковский работник",
        "Офис-менеджер",
        "Аналитик данных",
        "Архивариус",
        "Налоговый инспектор",
        "Секретарь",
      ],
    },
  },
  answers: [],  
  showResult: false,
  currentQuestion: 0,
};

const quizSlice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    handleAnswer: (state, action) => {
      state.answers.push(action.payload);
      if (state.currentQuestion < state.questions.length - 1) {
        state.currentQuestion += 1;
      } else {
        state.showResult = true;
      }
    },
    restartQuiz: (state) => {
      state.currentQuestion = 0;
      state.answers = [];
      state.showResult = false;
    },
  },
});

export const { setAnswers, setShowResult, setCurrentQuestion, handleAnswer, restartQuiz } = quizSlice.actions;
export default quizSlice.reducer;
