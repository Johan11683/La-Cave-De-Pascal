import s from './WhyUs.module.scss';

export default function WhyUs() {
  return (
    <section className={s.why} id="why" aria-labelledby="why-title">
      <div className={s.inner}>
        <h2 id="why-title" className={s.title}>
          Expertise
        </h2>

        <p className={s.subtitle}>
          Sélection minutieuse, conseils adaptés, proximité.
        </p>

        <div className={s.grid}>
          <article className={s.card}>
            <h3 className={s.cardTitle}>Sélection rigoureuse</h3>
            <p className={s.cardText}>
              Chaque vin est choisi avec soin, dégusté et validé pour sa qualité, son équilibre et son caractère unique.
            </p>
          </article>

          <article className={s.card}>
            <h3 className={s.cardTitle}>Proximité & écoute</h3>
            <p className={s.cardText}>
              Présents au <strong>Bouscat</strong> et à <strong>Villenave d’Ornon</strong>, nous prenons le temps de
              connaître nos clients pour viser juste.
            </p>
          </article>

          <article className={s.card}>
            <h3 className={s.cardTitle}>Passion du vin</h3>
            <p className={s.cardText}>
              Derrière chaque bouteille : une rencontre, une histoire, une émotion que nous aimons transmettre.
            </p>
          </article>

          <article className={s.card}>
            <h3 className={s.cardTitle}>Conseil & excellence</h3>
            <p className={s.cardText}>
              Faire le lien entre nos domaines et vos envies, pour trouver le vin juste, au bon moment.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
