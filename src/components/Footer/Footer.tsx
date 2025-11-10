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
          <p>123 Avenue de Bordeaux, 33110 Le Bouscat</p>
          <p>
            05 56 67 78 89 |{' '}
            <a href="mailto:contact@lacavedepascal.fr">contact@lacavedepascal.fr</a>
          </p>
        </div>

        {/* Colonne droite : mentions */}
        <div className={s.col}>
          <p>© {year} La Cave de Pascal. Tous droits réservés.</p>
          <p>L'abus d'alcool est dangereux pour la santé.</p>
        </div>
      </div>
    </footer>
  );
}
