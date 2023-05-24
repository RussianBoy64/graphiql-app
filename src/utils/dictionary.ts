export function translate(text: keyof typeof dictionary, lang: string) {
  const value = dictionary[text];
  const result = value[lang as keyof typeof value];
  return result;
}

export const dictionary = {
  about: {
    en: 'About Project',
    ru: 'О проекте',
  },
};
