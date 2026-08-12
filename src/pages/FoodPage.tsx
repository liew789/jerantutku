import { foodPlaces } from '../data/food'
import { PlaceCard } from '../components/PlaceCard'
import { tLocalized } from '../i18n'
import { useSettings } from '../context/SettingsContext'

export function FoodPage() {
  const { lang, strings } = useSettings()

  return (
    <div className="page">
      <header className="page-header">
        <h1>{strings.food.title}</h1>
        <p>{strings.food.subtitle}</p>
      </header>
      <div className="list">
        {foodPlaces.map((place) => (
          <PlaceCard
            key={place.id}
            to={`/food/${place.id}`}
            rank={place.rank}
            name={tLocalized(place.name, lang)}
            highlight={tLocalized(place.highlight, lang)}
            tag={tLocalized(place.cuisine, lang)}
            image={place.image}
          />
        ))}
      </div>
    </div>
  )
}
