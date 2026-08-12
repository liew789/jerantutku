import { Link, useParams } from 'react-router-dom'
import { getFoodById } from '../data/food'
import { tLocalized, tLocalizedList } from '../i18n'
import { useSettings } from '../context/SettingsContext'

export function FoodDetailPage() {
  const { id } = useParams()
  const { lang, strings } = useSettings()
  const place = id ? getFoodById(id) : undefined

  if (!place) {
    return (
      <div className="not-found">
        <h1>{strings.common.notFound}</h1>
        <Link className="primary-button" to="/food" style={{ marginTop: 16 }}>
          {strings.food.back}
        </Link>
      </div>
    )
  }

  return (
    <div className="page">
      <Link className="back-link" to="/food">
        ← {strings.food.back}
      </Link>
      <img className="detail-hero" src={place.image} alt="" />
      <p className="meta-pill" style={{ display: 'inline-flex' }}>
        #{place.rank}
      </p>
      <h1 style={{ marginTop: 10, fontSize: '1.8rem' }}>{tLocalized(place.name, lang)}</h1>
      <p style={{ marginTop: 8, color: 'var(--text-muted)' }}>
        {tLocalized(place.highlight, lang)}
      </p>
      <div className="detail-meta">
        <span className="meta-pill">{tLocalized(place.cuisine, lang)}</span>
      </div>
      <p style={{ color: 'var(--text-muted)' }}>{tLocalized(place.description, lang)}</p>

      <div className="detail-block">
        <h3>{strings.food.mustTry}</h3>
        <ul>
          {tLocalizedList(place.mustTry, lang).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="detail-block">
        <h3>{strings.food.address}</h3>
        <p>{tLocalized(place.address, lang)}</p>
      </div>

      <div className="detail-block">
        <h3>{strings.food.hours}</h3>
        <p>{tLocalized(place.hours, lang)}</p>
      </div>

      <a
        className="primary-button"
        href={place.mapUrl}
        target="_blank"
        rel="noreferrer"
        style={{ marginTop: 22, width: '100%' }}
      >
        {strings.food.openMap}
      </a>
    </div>
  )
}
