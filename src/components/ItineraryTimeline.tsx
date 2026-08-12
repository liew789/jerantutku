import { Link } from 'react-router-dom'
import type { ItineraryStep } from '../data/types'
import { tLocalized } from '../i18n'
import { useSettings } from '../context/SettingsContext'
import './ItineraryTimeline.css'

interface ItineraryTimelineProps {
  steps: ItineraryStep[]
  viewPlaceLabel: string
}

function getStepHref(step: ItineraryStep): string | null {
  if (!step.link) return null
  if (step.link.type === 'food') {
    return `/food/${step.link.id}`
  }
  return `/attractions/${step.link.id}`
}

export function ItineraryTimeline({ steps, viewPlaceLabel }: ItineraryTimelineProps) {
  const { lang } = useSettings()

  return (
    <ol className="timeline">
      {steps.map((step, index) => {
        const to = getStepHref(step)

        return (
          <li
            key={step.id}
            className="timeline__item"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div className="timeline__rail" aria-hidden="true" />
            <div className="timeline__time">{step.time}</div>
            <div className="timeline__card">
              <h3>{tLocalized(step.title, lang)}</h3>
              <p>{tLocalized(step.tip, lang)}</p>
              {to ? (
                <Link className="timeline__link" to={to}>
                  {viewPlaceLabel}
                </Link>
              ) : null}
            </div>
          </li>
        )
      })}
    </ol>
  )
}
