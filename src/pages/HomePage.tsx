import { Link } from 'react-router-dom'
import { heroImage, historyCopy, iconicPlaces, visitorTips } from '../data/home'
import { tLocalized } from '../i18n'
import { useSettings } from '../context/SettingsContext'
import './HomePage.css'

export function HomePage() {
  const { lang, strings } = useSettings()

  return (
    <div className="home">
      <section className="home-hero" aria-label={strings.brand}>
        <img className="home-hero__image" src={heroImage} alt="" />
        <div className="home-hero__overlay" />
        <div className="home-hero__content">
          <p className="home-hero__place">Jerantut · Pahang</p>
          <h1>{strings.brand}</h1>
          <p className="home-hero__tagline">{strings.tagline}</p>
        </div>
      </section>

      <div className="page home-sections">
        <section className="section">
          <h2 className="section-title">{strings.home.historyTitle}</h2>
          <p className="section-body">{tLocalized(historyCopy, lang)}</p>
        </section>

        <section className="section">
          <h2 className="section-title">{strings.home.iconicTitle}</h2>
          <div className="iconic-strip" tabIndex={0}>
            {iconicPlaces.map((place) => (
              <figure key={place.id} className="iconic-strip__item">
                <img src={place.image} alt="" loading="lazy" />
                <figcaption>{tLocalized(place.title, lang)}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section weekend-entrance">
          <h2 className="section-title">{strings.home.weekendTitle}</h2>
          <p className="section-body">{strings.home.weekendBody}</p>
          <Link className="cta-button weekend-entrance__cta" to="/weekend">
            {strings.home.weekendCta}
          </Link>
        </section>

        <section className="section">
          <h2 className="section-title">{strings.home.tipsTitle}</h2>
          <div className="tips-list">
            {visitorTips.map((tip) => (
              <article key={tip.id} className="tip-item">
                <h3>{tLocalized(tip.title, lang)}</h3>
                <p>{tLocalized(tip.body, lang)}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
