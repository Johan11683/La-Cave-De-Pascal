import s from './WhyUs.module.scss';

export default function WhyUs() {
  return (
    <section className={s.why} id="why" aria-labelledby="why-title">
      <div className={s.inner}>
        <h2 id="why-title" className={s.title}>Pourquoi choisir La Cave de Pascal ?</h2>

        <div className={s.grid}>
          <div className={s.item}>
            <div className={s.icon}>🍷</div>
            <div>
              <h3>Sélection Rigoureuse</h3>
              <p>Chaque vin est choisi avec soin pour sa qualité et son caractère unique.</p>
            </div>
          </div>

          <div className={s.item}>
            <div className={s.icon}>📍</div>
            <div>
              <h3>Proximité</h3>
              <p>Située au cœur du Bouscat, notre équipe connaît les goûts de nos clients locaux.</p>
            </div>
          </div>

          <div className={s.item}>
            <div className={s.icon}>❤️</div>
            <div>
              <h3>Passion</h3>
              <p>L’amour du vin guide chacune de nos sélections et de nos recommandations.</p>
            </div>
          </div>

          <div className={s.item}>
            <div className={s.icon}>⭐</div>
            <div>
              <h3>Excellence</h3>
              <p>Des conseils personnalisés et un accompagnement attentif pour chaque occasion.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
