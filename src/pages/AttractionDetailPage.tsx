import { Link, useParams } from 'react-router-dom'
import { getAttractionById } from '../data/attractions'
import { tLocalized } from '../i18n'
import { useSettings } from '../context/SettingsContext'

export function AttractionDetailPage() {
  const { id } = useParams()
  const { lang, strings } = useSettings()
  const place = id ? getAttractionById(id) : undefined

  if (!place) {
    return (
      <div className="not-found">
        <h1>{strings.common.notFound}</h1>
        <Link className="primary-button" to="/attractions" style={{ marginTop: 16 }}>
          {strings.attractions.back}
        </Link>
      </div>
    )
  }

  return (
    <div className="page">
      <Link className="back-link" to="/attractions">
        ← {strings.attractions.back}
      </Link>
      <img className="detail-hero" src={place.image} alt="" />
      <p className="meta-pill" style={{ display: 'inline-flex' }}>
        #{place.rank}
      </p>
      <h1 style={{ marginTop: 10, fontSize: '1.8rem' }}>{tLocalized(place.name, lang)}</h1>
      <p style={{ marginTop: 8, color: 'var(--text-muted)' }}>
        {tLocalized(place.highlight, lang)}
      </p>
      <p style={{ marginTop: 14, color: 'var(--text-muted)' }}>{tLocalized(place.description, lang)}</p>

      <div className="detail-block">
        <h3>{strings.attractions.whyVisit}</h3>
        <p>{tLocalized(place.whyVisit, lang)}</p>
      </div>

      <div className="detail-block">
        <h3>{strings.attractions.howToGet}</h3>
        <p>{tLocalized(place.howToGet, lang)}</p>
      </div>

      <div className="detail-block">
        <h3>{strings.attractions.bestTime}</h3>
        <p>{tLocalized(place.bestTime, lang)}</p>
      </div>

      <a
        className="primary-button"
        href={place.mapUrl}
        target="_blank"
        rel="noreferrer"
        style={{ marginTop: 22, width: '100%' }}
      >
        {strings.attractions.openMap}
      </a>
    </div>
  )
}
