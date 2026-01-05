import s from './Services.module.scss';

const SERVICES = [
  {
    title: 'Emballages cadeau personnalisés',
    text:
      "Des emballages cadeau estampillés à la cire, réalisés par nos soins. Un geste simple, mais une attention qui change tout.",
    img: '/wine-gift.jpg',
    alt: 'Emballage cadeau avec sceau de cire',
  },
  {
    title: "Cadeaux d'entreprise",
    text:
      'Nous établissons un devis sur mesure, selon votre budget, vos délais et le message que vous souhaitez transmettre.',
    img: '/entreprise-gift.jpg',
    alt: "Coffrets de vin pour cadeaux d'entreprise",
  },
  {
    title: 'Dégustations',
    text:
      'Rares, mais qualitatives : elles permettent de découvrir les vins, mais aussi les personnes, les domaines, et les histoires derrière chaque bouteille.',
    img: '/tasting.jpg',
    alt: 'Dégustation de vin en cave',
  },
  {
    title: 'Parking réservé',
    text:
      'Des places réservées vous permettent de stationner au plus près, pour une visite sereine et un départ sans contrainte.',
    img: '/parking.jpg',
    alt: 'Parking réservé près de la cave',
  },
  {
    title: 'A votre service',
    text:
      "Nous prenons soin de nos clients dès leur arrivée, et jusqu'à leur départ.",
    img: '/voiture.jpg',
    alt: 'Accueil et service en cave à vin',
  },
] as const;

export default function Services() {
  return (
    <section className={s.services} id="services" aria-labelledby="services-title">
      <div className={s.inner}>
        <header className={s.head}>
          <h2 id="services-title" className={s.title}>
            Services
          </h2>
          <p className={s.subtitle}>
            Des attentions discrètes, pensées pour rendre chaque visite simple, fluide et mémorable.
          </p>
        </header>

        <div className={s.list}>
          {SERVICES.map((item, idx) => (
            <article
              key={item.title}
              className={`${s.item} ${idx % 2 === 1 ? s.reverse : ''}`}
            >
              <div className={s.media} aria-hidden="true">
                <div
                  className={s.image}
                  style={{ backgroundImage: `url(${item.img})` }}
                  role="img"
                  aria-label={item.alt}
                />
              </div>

              <div className={s.content}>
                <h3 className={s.itemTitle}>{item.title}</h3>
                <p className={s.text}>{item.text}</p>

                <div className={s.rule} aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
