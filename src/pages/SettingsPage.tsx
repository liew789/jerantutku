import { useState } from 'react'
import type { Lang, Theme } from '../data/types'
import { useSettings } from '../context/SettingsContext'
import { AddToHomeScreenModal } from '../components/AddToHomeScreenModal'
import './SettingsPage.css'

const langs: Lang[] = ['en', 'bm', 'cn']
const themes: Theme[] = ['light', 'dark']

export function SettingsPage() {
  const { lang, theme, strings, setLang, setTheme } = useSettings()
  const [showAddToHome, setShowAddToHome] = useState(false)

  return (
    <div className="page settings-page">
      <div className="settings-page__body">
      <header className="page-header">
        <h1>{strings.settings.title}</h1>
      </header>

      <section className="section">
        <h2 className="section-title">{strings.settings.language}</h2>
        <div className="segmented" role="group" aria-label={strings.settings.language}>
          {langs.map((code) => (
            <button
              key={code}
              type="button"
              className="chip-button"
              aria-pressed={lang === code}
              onClick={() => setLang(code)}
            >
              {strings.settings.langs[code]}
            </button>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">{strings.settings.appearance}</h2>
        <div className="segmented" role="group" aria-label={strings.settings.appearance}>
          {themes.map((mode) => (
            <button
              key={mode}
              type="button"
              className="chip-button"
              aria-pressed={theme === mode}
              onClick={() => setTheme(mode)}
            >
              {mode === 'light' ? strings.settings.light : strings.settings.dark}
            </button>
          ))}
        </div>
      </section>

      <section className="section">
        <button
          type="button"
          className="settings-ath-button"
          onClick={() => setShowAddToHome(true)}
        >
          {strings.settings.addToHome}
        </button>
      </section>

      <section className="section">
        <h2 className="section-title">{strings.settings.aboutTitle}</h2>
        <p className="section-body">{strings.settings.aboutBody}</p>
      </section>
      </div>

      <p className="settings-footer">
        v{__APP_VERSION__} . by KY . {new Date().getFullYear()}
      </p>

      <AddToHomeScreenModal
        open={showAddToHome}
        onClose={() => setShowAddToHome(false)}
      />
    </div>
  )
}
