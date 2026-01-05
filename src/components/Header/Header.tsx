'use client';

import { useEffect, useState } from 'react';
import s from './Header.module.scss';

export default function Header() {
  const [open, setOpen] = useState(false);

  // Ferme le menu si on repasse au-dessus de 1024
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={s.header}>
      <div className={s.inner}>
        <div className={s.brand}>
          <span>La Cave de Pascal</span>
        </div>

        {/* Desktop nav (inchangé) */}
        <nav className={s.nav} aria-label="Navigation principale">
          <a href="#home">Accueil</a>
          <a href="#about">Les Caves</a>
          <a href="#services">Services</a>
          <a href="#why">Expertise</a>
        </nav>

        <div className={s.actions}>
          {/* Burger visible uniquement <1024px */}
          <button
            type="button"
            className={s.burger}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={s.burgerBar} />
            <span className={s.burgerBar} />
            <span className={s.burgerBar} />
          </button>

          <a className={s.cta} href="#contact" onClick={close}>
            Nous contacter
          </a>
        </div>
      </div>

      {/* Overlay (mobile uniquement) */}
      <button
        type="button"
        className={`${s.backdrop} ${open ? s.backdropOpen : ''}`}
        aria-hidden={!open}
        tabIndex={open ? 0 : -1}
        onClick={close}
      />

      {/* Menu mobile */}
      <nav
        id="mobile-nav"
        className={`${s.mobileNav} ${open ? s.mobileNavOpen : ''}`}
        aria-label="Navigation mobile"
      >
        <a href="#home" onClick={close}>Accueil</a>
        <a href="#about" onClick={close}>Les Caves</a>
        <a href="#services" onClick={close}>Services</a>
        <a href="#why" onClick={close}>Expertise</a>
        <a href="#contact" onClick={close}>Nous contacter</a>
      </nav>
    </header>
  );
}
