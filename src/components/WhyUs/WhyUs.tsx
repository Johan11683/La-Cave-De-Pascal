import s from './WhyUs.module.scss';

export default function WhyUs() {
  return (
    <section className={s.why} id="why" aria-labelledby="why-title">
      <div className={s.inner}>
        <h2 id="why-title" className={s.title}>
          Pourquoi choisir <span>La Cave de Pascal</span> ?
        </h2>

        <div className={s.grid}>
          <div className={s.item}>
            <div className={s.icon}>🍷</div>
            <div>
              <h3>Sélection rigoureuse</h3>
              <p>
                Chaque vin est choisi avec soin, dégusté et validé pour sa qualité, son équilibre et son caractère unique.
              </p>
            </div>
          </div>

          <div className={s.item}>
            <div className={s.icon}>📍</div>
            <div>
              <h3>Proximité & écoute</h3>
              <p>
                Présents au <strong>Bouscat</strong> et à <strong>Villenave d’Ornon</strong>, 
                nous prenons le temps de connaître nos clients pour anticiper leurs envies et leurs moments de partage.
              </p>
            </div>
          </div>

          <div className={s.item}>
            <div className={s.icon}>❤️</div>
            <div>
              <h3>Passion du vin</h3>
              <p>
                Derrière chaque bouteille, il y a une rencontre, une histoire et une émotion que nous aimons transmettre.
              </p>
            </div>
          </div>

          <div className={s.item}>
            <div className={s.icon}>⭐</div>
            <div>
              <h3>Conseil & excellence</h3>
              <p>
                Notre mission : faire le lien entre la connaissance approfondie des domaines et vos envies, 
                pour toujours trouver le vin juste au bon moment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
