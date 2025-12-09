import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang, path] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function getPathFromUrl(url: URL) {
  const [, lang, path] = url.pathname.split('/');
  if (path) return path;
  return null;
}


export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}