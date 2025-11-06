import s from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <small>© {new Date().getFullYear()} La Cave de Pascal — Bordeaux</small>
        <a href="mailto:contact@lacave.example">contact@lacave.example</a>
      </div>
    </footer>
  );
}
