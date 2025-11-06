import s from './Header.module.scss';

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.inner}>
        <div className={s.brand}>
          🍷 <span>La Cave de Pascal</span>
        </div>

        <nav className={s.nav} aria-label="Navigation principale">
          <a href="#home">Accueil</a>
          <a href="#about">Qui sommes-nous</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className={s.actions}>
          <a className={s.cta} href="#contact">Nous contacter</a>
        </div>
      </div>
    </header>
  );
}
