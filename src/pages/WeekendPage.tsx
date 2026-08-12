import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ItineraryTimeline } from '../components/ItineraryTimeline'
import { weekendPlan } from '../data/weekend'
import { useSettings } from '../context/SettingsContext'

type DayKey = 'saturday' | 'sunday'

export function WeekendPage() {
  const { strings } = useSettings()
  const [day, setDay] = useState<DayKey>('saturday')
  const steps = weekendPlan[day]

  return (
    <div className="page">
      <Link className="back-link" to="/">
        ← {strings.weekend.back}
      </Link>
      <header className="page-header">
        <h1>{strings.weekend.title}</h1>
        <p>{strings.weekend.subtitle}</p>
      </header>

      <div className="segmented" role="group" aria-label={strings.weekend.title}>
        <button
          type="button"
          className="chip-button"
          aria-pressed={day === 'saturday'}
          onClick={() => setDay('saturday')}
        >
          {strings.weekend.saturday}
        </button>
        <button
          type="button"
          className="chip-button"
          aria-pressed={day === 'sunday'}
          onClick={() => setDay('sunday')}
        >
          {strings.weekend.sunday}
        </button>
      </div>

      <ItineraryTimeline steps={steps} viewPlaceLabel={strings.weekend.viewPlace} />
    </div>
  )
}
