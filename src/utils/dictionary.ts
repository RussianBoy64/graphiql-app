import { useTypeSelector } from '@src/redux/store';

export function useTranslate(text: keyof typeof dictionary) {
  const language = useTypeSelector((state) => state.language.value);
  const value = dictionary[text];
  const result = value[language as keyof typeof value];
  return result;
}

export const dictionary = {
  welcomeAboutTitle: {
    en: 'About Project',
    ru: 'О проекте',
  },
  welcomeAbout: {
    en: 'The final task of RSSchool React2023Q1 course. Description and technical requirements you can see',
    ru: 'Заключительное задание курса RSSchool React2023Q1. Описание и технические требования',
  },
  here: {
    en: 'here',
    ru: 'здесь',
  },
  'Raccoons team': {
    en: 'Raccoons team',
    ru: 'Команда енотов',
  },
  SignIn: {
    en: 'Sign In',
    ru: 'Войти',
  },
  SignUp: {
    en: 'Sign Up',
    ru: 'Регистрация',
  },
  notFoundTitle: {
    en: 'Oops!',
    ru: 'Ой!',
  },
  notFoundSubtitle: {
    en: '404 - page not found!',
    ru: '404 - страница не найдена!',
  },
  notFoundText: {
    en: 'The page you are looking for might have been removed, had its name changed or temporarily unavaliable.',
    ru: 'Страница, которую вы ищете, могла быть удалена, ее название было изменено или она временно недоступна.',
  },
  welcomePage: {
    en: 'Welcome Page',
    ru: 'На главную',
  },
  email: {
    en: 'E-mail',
    ru: 'Почта',
  },
  password: {
    en: 'Password',
    ru: 'Пароль',
  },
  passwordConfirm: {
    en: 'Confirm password',
    ru: 'Подтверждение пароля',
  },
};
