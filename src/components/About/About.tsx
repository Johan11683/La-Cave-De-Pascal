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
              <strong>Pascal</strong>, c’est trente ans d’expérience, de passion et d’efforts.
              Il a bâti son parcours <strong>bouteille après bouteille</strong>, avec exigence et sincérité.
              Après avoir fondé <strong>La Cave de Villenave d’Ornon</strong> au début des années 2000,
              il ouvre en 2017 celle du <strong>Bouscat</strong> avec la même ambition :
              proposer des vins qui ont une âme.
            </p>

            <p>
              Ici, on privilégie les <strong>vignerons indépendants</strong> aux grandes marques,
              les <strong>rencontres humaines</strong> aux catalogues impersonnels.
              Chaque cuvée est choisie <strong>directement chez le producteur</strong>,
              après dégustation, échange et conviction. On sélectionne avec soin, on conseille avec cœur.
            </p>

            <p>
              Que tu sois <strong>curieux pressé</strong> ou <strong>amateur éclairé</strong>, on s’adapte à ton envie du moment :
              une <strong>bouteille pour l’apéro</strong>, un <strong>cadeau d’entreprise</strong> ou un
              <strong> grand cru pour une grande occasion</strong>. Ici, chacun trouve le vin qui lui ressemble.
            </p>

            <p>
              <strong>La Cave de Pascal</strong>, c’est un lieu de <strong>partage</strong>,
              de <strong>confiance</strong> et de <strong>transmission</strong> où chaque conseil reflète le plaisir simple d’un vin bien choisi.
            </p>
          </div>
        </div>

        {/* Colonne images */}
        <div className={s.media}>
          <div className={s.images}>
            <div className={s.card}>
              <Image
                src="/about-wines.jpg"
                alt="Bouteilles de vin sur étagère"
                fill
                className={s.photo}
                sizes="(min-width:1024px) 45vw, 90vw"
                priority
              />
            </div>
            <div className={s.card}>
              <Image
                src="/about-cave.jpg"
                alt="Vieille cave à vin en pierre"
                fill
                className={s.photo}
                sizes="(min-width:1024px) 45vw, 90vw"
              />
            </div>
            <div className={s.card}>
              <Image
                src="/about-services.png"
                alt="Service du vin à table"
                fill
                className={s.photo}
                sizes="(min-width:1024px) 45vw, 90vw"
              />
            </div>
            <div className={s.card}>
              <Image
                src="/about-glasses.jpg"
                alt="Verres à vin"
                fill
                className={s.photo}
                sizes="(min-width:1024px) 45vw, 90vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
