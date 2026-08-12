import { useEffect } from 'react'
import { useSettings } from '../context/SettingsContext'
import './AddToHomeScreenModal.css'

interface AddToHomeScreenModalProps {
  open: boolean
  onClose: () => void
}

export function AddToHomeScreenModal({ open, onClose }: AddToHomeScreenModalProps) {
  const { strings } = useSettings()
  const title = strings.settings.addToHomeTitle.replace('{brand}', strings.brand)

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="ath-overlay" role="presentation" onClick={onClose}>
      <div
        className="ath-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ath-title"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 id="ath-title" className="ath-modal__title">
          {title}
        </h2>

        <div className="ath-modal__divider">
          <span>{strings.settings.iosHeading}</span>
        </div>
        <ol className="ath-modal__steps">
          {strings.settings.iosSteps.map((step, index) => (
            <li key={`ios-${index}`}>
              <span className="ath-modal__num">{index + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>

        <div className="ath-modal__divider">
          <span>{strings.settings.androidHeading}</span>
        </div>
        <ol className="ath-modal__steps">
          {strings.settings.androidSteps.map((step, index) => (
            <li key={`android-${index}`}>
              <span className="ath-modal__num">{index + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>

        <button type="button" className="ath-modal__back" onClick={onClose}>
          {strings.settings.addToHomeClose}
        </button>

        <p className="ath-modal__version">V{__APP_VERSION__}</p>
      </div>
    </div>
  )
}
