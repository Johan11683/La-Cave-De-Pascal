import s from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={s.hero} id="home">
      <div className={s.overlay}></div>

      <div className={s.content}>
        <h1 className={s.title}>La Cave de Pascal</h1>
        <p className={s.subtitle}>Votre caviste de confiance au Bouscat</p>
        <p className={s.lead}>
          Sélection minutieuse, connaissance approfondie de la gamme et conseils parfaits
          pour sublimer vos moments de dégustation.
        </p>

        <div className={s.actions}>
          <a className={s.secondary} href="#contact">Nous contacter</a>
        </div>

        <div className={s.ribbon}>
          <div className={s.pill}>
            <strong>Sélection Premium</strong>
            <span>Vins choisis avec expertise</span>
          </div>
          <div className={s.pill}>
            <strong>Expertise Reconnue</strong>
            <span>Connaissance approfondie</span>
          </div>
          <div className={s.pill}>
            <strong>Conseils Personnalisés</strong>
            <span>Accompagnement sur mesure</span>
          </div>
        </div>
      </div>
    </section>
  );
}
