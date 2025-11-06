import Image from 'next/image';
import s from './About.module.scss';

export default function About() {
  return (
    <section className={s.about} id="about" aria-labelledby="about-title">
      <div className={s.inner}>
        {/* Colonne texte */}
        <div className={s.textBlock}>
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

        {/* Colonne images */}
        <div className={s.images}>
          <div className={s.row}>
            <div className={s.card}>
              <Image src="/about-wines.jpg" alt="Bouteilles de vin sur étagère" fill className={s.photo} sizes="(max-width: 1024px) 90vw, 20vw" />
            </div>
            <div className={s.card}>
              <Image src="/about-cave.jpg" alt="Vieille cave à vin en pierre" fill className={s.photo} sizes="(max-width: 1024px) 90vw, 20vw" />
            </div>
          </div>

          <div className={s.row}>
            <div className={s.card}>
              <Image src="/about-services.png" alt="Service du vin à table" fill className={s.photo} sizes="(max-width: 1024px) 90vw, 20vw" />
            </div>
            <div className={s.card}>
              <Image src="/about-glasses.jpg" alt="Verres à vin" fill className={s.photo} sizes="(max-width: 1024px) 90vw, 20vw" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
