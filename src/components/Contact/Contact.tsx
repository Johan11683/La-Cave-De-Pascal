import s from './Contact.module.scss';

export default function Contact() {
  return (
    <section id="contact" className={s.contact} aria-labelledby="contact-title">
      <div className={s.header}>
        <h2 id="contact-title">Une question ?</h2>
        <p>Venez nous rendre visite ou contactez-nous pour toute question. Nous serons ravis de vous aider !</p>
      </div>

      <div className={s.grid}>
        {/* 1) Coordonnées */}
        <article className={s.card} aria-labelledby="coords-title">
          <h3 id="coords-title" className={s.cardTitle}>Nos coordonnées</h3>

          <ul className={s.list}>
            <li>
              <span className={s.icon} aria-hidden>📍</span>
              <div>
                <strong>Adresse</strong>
                <p>68 Avenue Alsace-Lorraine<br/>33200 Bordeaux<br/>France</p>
              </div>
            </li>

            <li>
              <span className={s.icon} aria-hidden>📞</span>
              <div>
                <strong>Téléphone</strong>
                <p>05 56 67 78 89</p>
              </div>
            </li>

            <li>
              <span className={s.icon} aria-hidden>✉️</span>
              <div>
                <strong>Email</strong>
                <p><a href="mailto:contact@lacavedepascal.fr">contact@lacavedepascal.fr</a></p>
              </div>
            </li>

            <li>
              <span className={s.icon} aria-hidden>🕒</span>
              <div>
                <strong>Horaires d’ouverture</strong>
                <p>
                  Mardi – Samedi : 10h00 – 19h30<br/>
                  Dimanche : 10h00 – 13h00<br/>
                  Lundi : Fermé
                </p>
              </div>
            </li>
          </ul>
        </article>

        {/* 2) Formulaire (branché plus tard à Nodemailer) */}
        <article className={`${s.card} ${s.formCard}`} aria-labelledby="form-title">
          <h3 id="form-title" className={s.cardTitle}>Envoyez-nous un message</h3>

          {/* Pas de JS ici, on branchera plus tard */}
          <form className={s.form} method="post" action="#">
            <div className={s.field}>
              <label htmlFor="fullname">Nom complet *</label>
              <input id="fullname" name="fullname" type="text" required placeholder="Votre nom" />
            </div>

            <div className={s.field}>
              <label htmlFor="email">Email *</label>
              <input id="email" name="email" type="email" required placeholder="votre@email.fr" />
            </div>

            <div className={s.field}>
              <label htmlFor="phone">Téléphone</label>
              <input id="phone" name="phone" type="tel" placeholder="06 XX XX XX XX" />
            </div>

            <div className={s.field}>
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" required rows={5} placeholder="Parlez-nous de vos besoins ou posez-nous vos questions..." />
            </div>

            <div className={s.actions}>
              <button type="submit" className={s.submit}>Envoyer le message</button>
            </div>
          </form>
        </article>

        {/* 3) Carte / Google Maps (go to) */}
        <article className={s.card} aria-labelledby="map-title">
          <h3 id="map-title" className={s.cardTitle} hidden>Localisation</h3>
          <div className={s.mapMock}>
            <div className={s.pin} aria-hidden>📍</div>
            <p>Le Bouscat, près de Bordeaux</p>
            <a
              className={s.mapBtn}
              href="https://www.google.com/maps/search/?api=1&query=68+Avenue+Alsace-Lorraine,+33200+Bordeaux"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ouvrir dans Google Maps
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
