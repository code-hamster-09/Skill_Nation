import { createSlice } from "@reduxjs/toolkit";

import avtomehanik from "../../assets/images/avtomehanik.webp";
import cpu from "../../assets/images/cpu.jpg";
import elektrik from "../../assets/images/elektrik.webp";
import stolyar from "../../assets/images/stolyar.webp";
import svarka from "../../assets/images/svarka.jpg";

type StateType = {
  professionsData: ProfessionType[];
  searchTerm: string;
  filters: FiltersType;
  selectedProfession: null;
};

type FiltersType = {
  education: string;
  demand: string;
  industry: string;
};

type EduProgType = {
  name: string;
  duration: string;
  location: string;
  link: string;
};

export type ProfessionType = {
  id: number;
  name: string;
  description: string;
  fullDescription: string;
  salary: string;
  demand: string;
  education: string;
  industry: string;
  slug: string;
  image: string;
  skills: string[];
  careerPath: string[];
  educationPrograms: EduProgType[];
};

const initialState: StateType = {
  professionsData: [
    {
      id: 1,
      name: "Сварщик",
      description:
        "Специалист по соединению металлических деталей с помощью сварки",
      fullDescription: `Сварщик - это специалист, который выполняет работы по соединению металлических деталей с помощью сварки. Сварщики работают в различных отраслях промышленности, включая строительство, машиностроение, судостроение и многие другие. Они используют различные типы сварочного оборудования и технологий для создания прочных и надежных соединений.

Профессия сварщика требует технических знаний, точности, внимательности и соблюдения правил безопасности. Хороший сварщик должен уметь читать чертежи, знать свойства различных металлов и сплавов, а также владеть различными техниками сварки.`,
      salary: "60 000 - 120 000 ₽",
      demand: "Высокий",
      education: "Среднее профессиональное",
      industry: "Производство", // ✅ добавлено
      slug: "svarshchik",
      image: svarka,
      skills: [
        "Чтение чертежей и технической документации",
        "Работа с различными видами сварочного оборудования",
        "Контроль качества сварных соединений",
        "Соблюдение техники безопасности",
        "Работа в команде",
      ],
      careerPath: [
        "Помощник сварщика",
        "Сварщик 3-го разряда",
        "Сварщик 4-го разряда",
        "Сварщик 5-го разряда",
        "Сварщик 6-го разряда",
        "Бригадир сварщиков",
        "Мастер сварочного участка",
      ],
      educationPrograms: [
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
      ],
    },
    {
      id: 2,
      name: "Электрик",
      description: "Специалист по монтажу и обслуживанию электрических систем",
      fullDescription: `Электрик - это специалист, который занимается монтажом, обслуживанием и ремонтом электрических систем и оборудования. Электрики работают в жилых домах, офисных зданиях, на промышленных предприятиях, строительных площадках и в других местах, где используется электричество.`,
      salary: "50 000 - 100 000 ₽",
      demand: "Высокий",
      education: "Среднее профессиональное",
      industry: "Строительство", // ✅ добавлено
      slug: "elektrik",
      image: elektrik,
      skills: [
        "Монтаж электропроводки и электрооборудования",
        "Диагностика и устранение неисправностей",
        "Чтение электрических схем",
        "Работа с измерительными приборами",
        "Соблюдение правил электробезопасности",
      ],
      careerPath: [
        "Помощник электрика",
        "Электрик 3-го разряда",
        "Электрик 4-го разряда",
        "Электрик 5-го разряда",
        "Электрик 6-го разряда",
        "Бригадир электриков",
        "Главный энергетик",
      ],
      educationPrograms: [
        {
          name: "Энергетический колледж",
          duration: "2 года 10 месяцев",
          location: "Москва",
          link: "/education/college-4",
        },
        {
          name: "Политехнический колледж №2",
          duration: "3 года 10 месяцев",
          location: "Санкт-Петербург",
          link: "/education/college-5",
        },
        {
          name: "Технический колледж №7",
          duration: "2 года 6 месяцев",
          location: "Екатеринбург",
          link: "/education/college-6",
        },
      ],
    },
    {
      id: 3,
      name: "Автомеханик",
      description: "Специалист по ремонту и обслуживанию автомобилей",
      fullDescription: `Автомеханик - это специалист, который занимается диагностикой, ремонтом и техническим обслуживанием автомобилей.`,
      salary: "55 000 - 110 000 ₽",
      demand: "Высокий",
      education: "Среднее профессиональное",
      industry: "Транспорт", // ✅ добавлено
      slug: "avtomekhanik",
      image: avtomehanik,
      skills: [
        "Диагностика неисправностей автомобиля",
        "Ремонт двигателей и трансмиссий",
        "Обслуживание тормозных систем",
        "Работа с электронными системами автомобиля",
        "Шиномонтаж и балансировка колес",
      ],
      careerPath: [
        "Помощник автомеханика",
        "Автомеханик",
        "Автомеханик-диагност",
        "Мастер-приемщик",
        "Технический эксперт",
        "Начальник цеха",
        "Технический директор автосервиса",
      ],
      educationPrograms: [
        {
          name: "Автомеханический колледж",
          duration: "3 года 10 месяцев",
          location: "Москва",
          link: "/education/college-7",
        },
        {
          name: "Колледж автомобильного транспорта",
          duration: "2 года 10 месяцев",
          location: "Нижний Новгород",
          link: "/education/college-8",
        },
        {
          name: "Технический колледж №12",
          duration: "3 года 6 месяцев",
          location: "Самара",
          link: "/education/college-9",
        },
      ],
    },
    {
      id: 4,
      name: "Столяр",
      description: "Специалист по изготовлению изделий из дерева",
      fullDescription: `Столяр - это специалист, который занимается изготовлением, сборкой и ремонтом изделий из дерева.`,
      salary: "45 000 - 90 000 ₽",
      demand: "Средний",
      education: "Среднее профессиональное",
      industry: "Производство", // ✅ добавлено
      slug: "stolyar",
      image: stolyar,
      skills: [
        "Работа с различными породами дерева",
        "Изготовление мебели и деревянных конструкций",
        "Работа с ручным и электрическим инструментом",
        "Чтение чертежей и эскизов",
        "Отделка и реставрация деревянных изделий",
      ],
      careerPath: [
        "Ученик столяра",
        "Столяр 3-го разряда",
        "Столяр 4-го разряда",
        "Столяр 5-го разряда",
        "Столяр 6-го разряда",
        "Мастер столярного цеха",
        "Руководитель мебельного производства",
      ],
      educationPrograms: [
        {
          name: "Колледж деревообработки",
          duration: "2 года 10 месяцев",
          location: "Москва",
          link: "/education/college-10",
        },
        {
          name: "Строительный колледж №5",
          duration: "3 года 10 месяцев",
          location: "Санкт-Петербург",
          link: "/education/college-11",
        },
        {
          name: "Профессиональный лицей №22",
          duration: "2 года 6 месяцев",
          location: "Краснодар",
          link: "/education/college-12",
        },
      ],
    },
    {
      id: 5,
      name: "Оператор ЧПУ",
      description:
        "Специалист по управлению станками с числовым программным управлением",
      fullDescription: `Оператор ЧПУ - это специалист, который управляет станками с числовым программным управлением (ЧПУ).`,
      salary: "70 000 - 130 000 ₽",
      demand: "Высокий",
      education: "Среднее профессиональное",
      industry: "Производство", // ✅ добавлено
      slug: "operator-chpu",
      image: cpu,
      skills: [
        "Программирование станков с ЧПУ",
        "Настройка и обслуживание станков",
        "Чтение чертежей и технических спецификаций",
        "Контроль качества обработки деталей",
        "Работа с CAD/CAM системами",
      ],
      careerPath: [
        "Ученик оператора ЧПУ",
        "Оператор ЧПУ 3-го разряда",
        "Оператор ЧПУ 4-го разряда",
        "Оператор ЧПУ 5-го разряда",
        "Оператор ЧПУ 6-го разряда",
        "Наладчик станков с ЧПУ",
        "Технолог-программист ЧПУ",
      ],
      educationPrograms: [
        {
          name: "Колледж автоматизации и информационных технологий",
          duration: "3 года 10 месяцев",
          location: "Москва",
          link: "/education/college-13",
        },
        {
          name: "Технический колледж №8",
          duration: "2 года 10 месяцев",
          location: "Челябинск",
          link: "/education/college-14",
        },
        {
          name: "Промышленный колледж",
          duration: "3 года 6 месяцев",
          location: "Тольятти",
          link: "/education/college-15",
        },
      ],
    },
  ],
  searchTerm: "",
  filters: {
    education: "",
    demand: "",
    industry: "",
  },
  selectedProfession: null,
};

const professionsSlice = createSlice({
  name: "professions",
  initialState,
  reducers: {},
});

export const {} = professionsSlice.actions;
export default professionsSlice.reducer;
