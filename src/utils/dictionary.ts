import { useTypeSelector } from "@src/redux/store";

export enum DictionaryWords {
  welcomeAboutTitle,
  welcomeAbout,
  here,
  RaccoonsTeam,
  SignIn,
  SignUp,
  LogOut,
  MainPage,
  notFoundTitle,
  notFoundSubtitle,
  notFoundText,
  welcomePage,
  email,
  password,
  passwordConfirm,
}

interface IDictionary {
  [string: string]: {
    [string: string]: string;
  };
}

export function useTranslate(...wordsToTranslate: DictionaryWords[]) {
  const language = useTypeSelector((state) => state.language.value);
  const words: string[] = [];

  if (wordsToTranslate.length > 0) {
    wordsToTranslate.forEach((word) => {
      const dictionaryWord = dictionary[word];
      const translatedWord = dictionaryWord[language];
      words.push(translatedWord);
    });
  }

  return words;
}

export const dictionary: IDictionary = {
  [DictionaryWords.welcomeAboutTitle]: {
    en: "About Project",
    ru: "О проекте",
  },
  [DictionaryWords.welcomeAbout]: {
    en: "The final task of RSSchool React2023Q1 course. Description and technical requirements you can see",
    ru: "Заключительное задание курса RSSchool React2023Q1. Описание и технические требования",
  },
  [DictionaryWords.here]: {
    en: "here",
    ru: "здесь",
  },
  [DictionaryWords.RaccoonsTeam]: {
    en: "Raccoons team",
    ru: "Команда енотов",
  },
  [DictionaryWords.SignIn]: {
    en: "Sign In",
    ru: "Войти",
  },
  [DictionaryWords.SignUp]: {
    en: "Sign Up",
    ru: "Регистрация",
  },
  [DictionaryWords.LogOut]: {
    en: "Log out",
    ru: "Выйти",
  },
  [DictionaryWords.MainPage]: {
    en: "Go to Main Page",
    ru: "На Главную",
  },
  [DictionaryWords.notFoundTitle]: {
    en: "Oops!",
    ru: "Ой!",
  },
  [DictionaryWords.notFoundSubtitle]: {
    en: "404 - page not found!",
    ru: "404 - страница не найдена!",
  },
  [DictionaryWords.notFoundText]: {
    en: "The page you are looking for might have been removed, had its name changed or temporarily unavaliable.",
    ru: "Страница, которую вы ищете, могла быть удалена, ее название было изменено или она временно недоступна.",
  },
  [DictionaryWords.welcomePage]: {
    en: "Welcome Page",
    ru: "На главную",
  },
  [DictionaryWords.email]: {
    en: "E-mail",
    ru: "Почта",
  },
  [DictionaryWords.password]: {
    en: "Password",
    ru: "Пароль",
  },
  [DictionaryWords.passwordConfirm]: {
    en: "Confirm password",
    ru: "Подтверждение пароля",
  },
};
