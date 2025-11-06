import s from './About.module.scss';

export default function About() {
  return (
    <section className={s.about} id="about" aria-labelledby="about-title">
      <div className={s.inner}>
        <h2 id="about-title" className={s.title}>Qui sommes-nous</h2>

        <div className={s.content}>
          <p>
            Située au cœur du Bouscat, aux portes de Bordeaux, <strong>La Cave de Pascal</strong> est bien plus
            qu’une simple cave à vin. C’est un lieu de passion, de partage et d’expertise où chaque bouteille
            raconte une histoire.
          </p>
          <p>
            Depuis notre ouverture, nous nous sommes engagés à proposer une <strong>sélection minutieuse</strong> de vins
            d’exception, issus des meilleurs terroirs français et internationaux. Notre connaissance approfondie de
            chaque cuvée nous permet de vous offrir des <strong>conseils parfaitement adaptés</strong> à vos goûts et à vos
            occasions.
          </p>
          <p>
            Que vous soyez amateur éclairé ou simple curieux, nous vous accueillons avec le même enthousiasme pour
            vous faire découvrir des <strong>pépites viticoles</strong> et vous accompagner dans vos choix.
          </p>
        </div>
      </div>
    </section>
  );
}
