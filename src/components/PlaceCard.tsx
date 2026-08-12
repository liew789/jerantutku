import { Link } from 'react-router-dom'
import './PlaceCard.css'

interface PlaceCardProps {
  to: string
  rank: number
  name: string
  highlight: string
  tag: string
  image: string
}

export function PlaceCard({ to, rank, name, highlight, tag, image }: PlaceCardProps) {
  return (
    <Link to={to} className="place-card">
      <div className="place-card__media">
        <img src={image} alt="" loading="lazy" />
        <span className="place-card__rank">{rank}</span>
      </div>
      <div className="place-card__body">
        <p className="place-card__tag">{tag}</p>
        <h2>{name}</h2>
        <p className="place-card__highlight">{highlight}</p>
      </div>
    </Link>
  )
}
