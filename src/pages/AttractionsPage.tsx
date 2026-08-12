import { attractions } from '../data/attractions'
import { PlaceCard } from '../components/PlaceCard'
import { tLocalized } from '../i18n'
import { useSettings } from '../context/SettingsContext'

export function AttractionsPage() {
  const { lang, strings } = useSettings()

  return (
    <div className="page">
      <header className="page-header">
        <h1>{strings.attractions.title}</h1>
        <p>{strings.attractions.subtitle}</p>
      </header>
      <div className="list">
        {attractions.map((place) => (
          <PlaceCard
            key={place.id}
            to={`/attractions/${place.id}`}
            rank={place.rank}
            name={tLocalized(place.name, lang)}
            highlight={tLocalized(place.highlight, lang)}
            tag={tLocalized(place.bestTime, lang)}
            image={place.image}
          />
        ))}
      </div>
    </div>
  )
}
