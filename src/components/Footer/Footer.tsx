import s from './Footer.module.scss';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        {/* Colonne gauche : nom */}
        <div className={s.col}>
          <p className={s.brand}>🍷 La Cave de Pascal</p>
        </div>

        {/* Colonne centrale : adresse */}
        <div className={s.col}>
          <p>15 Rue Pablo Neruda - 33140 Villenave d’Ornon</p>
          <p>
            <a href="tel:0556878702">05 56 87 87 02</a>
            </p>
        </div>

        {/* Colonne droite : mentions */}
        <div className={s.col}>
          <p>© {year} La Cave de Pascal. Tous droits réservés.</p>
          <p>L’abus d’alcool est dangereux pour la santé.</p>
        </div>
      </div>
    </footer>
  );
}
