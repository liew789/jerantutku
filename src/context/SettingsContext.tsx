import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Lang, Theme } from '../data/types'
import { getUiStrings, type UiStrings } from '../i18n'

const LANG_KEY = 'jerantutku-lang'
const THEME_KEY = 'jerantutku-theme'

interface SettingsContextValue {
  lang: Lang
  theme: Theme
  strings: UiStrings
  setLang: (lang: Lang) => void
  setTheme: (theme: Theme) => void
}

const SettingsContext = createContext<SettingsContextValue | null>(null)

function readStoredLang(): Lang {
  const value = localStorage.getItem(LANG_KEY)
  if (value === 'en' || value === 'bm' || value === 'cn') return value
  return 'cn'
}

function readStoredTheme(): Theme {
  const value = localStorage.getItem(THEME_KEY)
  if (value === 'light' || value === 'dark') return value
  return 'light'
}

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => readStoredLang())
  const [theme, setThemeState] = useState<Theme>(() => readStoredTheme())

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.lang = lang === 'bm' ? 'ms' : lang
  }, [theme, lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    localStorage.setItem(LANG_KEY, next)
  }, [])

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
    localStorage.setItem(THEME_KEY, next)
  }, [])

  const value = useMemo(
    () => ({
      lang,
      theme,
      strings: getUiStrings(lang),
      setLang,
      setTheme,
    }),
    [lang, theme, setLang, setTheme],
  )

  return (
    <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>
  )
}

export function useSettings() {
  const ctx = useContext(SettingsContext)
  if (!ctx) {
    throw new Error('cwlog: useSettings must be used within SettingsProvider')
  }
  return ctx
}
