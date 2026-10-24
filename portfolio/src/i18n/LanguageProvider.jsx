import { useEffect, useMemo, useState } from 'react'
import { CONTENT, LANGUAGES } from '../data/content.js'
import { LanguageContext } from './LanguageContext.js'

const STORAGE_KEY = 'lang'

function getInitialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (LANGUAGES.includes(saved)) return saved
  } catch {
    // Storage unavailable (private mode) — fall through to browser language
  }
  return navigator.language?.startsWith('fr') ? 'fr' : 'en'
}

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Ignore — the choice just won't persist
    }
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t: CONTENT[lang] }), [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
