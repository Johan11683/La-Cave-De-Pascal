import Image from 'next/image';
import s from './Contact.module.scss';

export default function Contact() {
  return (
    <section id="contact" className={s.contact} aria-labelledby="contact-title">
      <div className={s.header}>
        <h2 id="contact-title">Une question ?</h2>
        <p>
          Venez nous rendre visite ou contactez-nous pour toute question. Nous serons ravis de vous aider !
        </p>
      </div>

      <div className={s.grid}>
        {/* === Coordonnées Le Bouscat === */}
        <article className={`${s.card} ${s.coords1}`} aria-labelledby="coords-title-1">
          <h3 id="coords-title-1" className={s.cardTitle}>Nos coordonnées — Le Bouscat</h3>
          <ul className={s.list}>
            <li>
              <span className={s.icon} aria-hidden>📍</span>
              <div>
                <strong>Adresse</strong>
                <p>305 avenue d’Eysines<br />33110 Le Bouscat</p>
              </div>
            </li>
            <li>
              <span className={s.icon} aria-hidden>📞</span>
              <div>
                <strong>Téléphone</strong>
                <p>
                  <a href="tel:0557104037">05 57 10 40 37</a>
                </p>
              </div>
            </li>
            <li>
              <span className={s.icon} aria-hidden>🕒</span>
              <div>
                <strong>Horaires</strong>
                <p>Lun : fermé<br />Mar–Sam : 9h30–13h00 / 15h–19h30<br />Dim : 9h30–13h00</p>
              </div>
            </li>
            <li>
              <span className={s.icon} aria-hidden>✉️</span>
              <div>
                <strong>Email</strong>
                <p>
                  <a href="mailto:monard.johan@yahoo.fr">lacavedepascal@orange.fr</a>
                </p>
              </div>
            </li>
          </ul>
        </article>

        {/* === Coordonnées Villenave === */}
        <article className={`${s.card} ${s.coords2}`} aria-labelledby="coords-title-2">
          <h3 id="coords-title-2" className={s.cardTitle}>Nos coordonnées — Villenave d’Ornon</h3>
          <ul className={s.list}>
            <li>
              <span className={s.icon} aria-hidden>📍</span>
              <div>
                <strong>Adresse</strong>
                <p>15 Rue Pablo Neruda<br />33140 Villenave d’Ornon</p>
              </div>
            </li>
            <li>
              <span className={s.icon} aria-hidden>📞</span>
              <div>
                <strong>Téléphone</strong>
                <p>
                  <a href="tel:0556878702">05 56 87 87 02</a>
                </p>
              </div>
            </li>
            <li>
              <span className={s.icon} aria-hidden>🕒</span>
              <div>
                <strong>Horaires</strong>
                <p>Lun–Sam : 9h30–13h00 / 15h–19h30<br />Dim : fermé</p>
              </div>
            </li>
            <li>
              <span className={s.icon} aria-hidden>✉️</span>
              <div>
                <strong>Email</strong>
                <p>
                  <a href="mailto:monard.johan@yahoo.fr">lacavedepascal@neuf.fr</a>
                </p>
              </div>
            </li>
          </ul>
        </article>

        {/* === Carte Le Bouscat === */}
        <article className={`${s.card} ${s.map1}`} aria-labelledby="map-title-1">
          <div className={s.mapStatic}>
            <Image
              src="/map-bouscat.webp"
              alt="Localisation de la Cave de Pascal — Le Bouscat"
              width={600}
              height={300}
              className={s.mapImg}
            />
            <a
              className={s.mapBtn}
              href="https://maps.app.goo.gl/mbP8ey9skZvyM4Zj9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ouvrir dans Google Maps
            </a>
          </div>
        </article>

        {/* === Carte Villenave === */}
        <article className={`${s.card} ${s.map2}`} aria-labelledby="map-title-2">
          <div className={s.mapStatic}>
            <Image
              src="/map-villenave.webp"
              alt="Localisation de la Cave de Pascal — Villenave d’Ornon"
              width={600}
              height={300}
              className={s.mapImg}
            />
            <a
              className={s.mapBtn}
              href="https://maps.app.goo.gl/bomkQD1KpPSBjtoc9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ouvrir dans Google Maps
            </a>
          </div>
        </article>

        {/* === Formulaire === */}
        <article className={`${s.card} ${s.formCard}`} aria-labelledby="form-title">
          <h3 id="form-title" className={s.cardTitle}>Envoyez-nous un message</h3>

          <form className={s.form} method="post" action="#">
            <div className={s.field}>
              <label htmlFor="fullname">Nom complet *</label>
              <input
                id="fullname"
                name="fullname"
                type="text"
                required
                placeholder="Votre nom"
              />
            </div>

            <div className={s.field}>
              <label htmlFor="cave">Votre Cave *</label>
              <select id="cave" name="cave" required defaultValue="">
                <option value="" disabled>Choisissez votre cave</option>
                <option value="bouscat">Le Bouscat</option>
                <option value="villenave">Villenave d’Ornon</option>
              </select>
            </div>

            <div className={s.field}>
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="votre@email.fr"
              />
            </div>

            <div className={s.field}>
              <label htmlFor="phone">Téléphone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="06 XX XX XX XX"
              />
            </div>

            <div className={s.field}>
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Parlez-nous de vos besoins ou posez-nous vos questions..."
              />
            </div>

            <div className={s.actions}>
              <button type="submit" className={s.submit}>
                Envoyer le message
              </button>
            </div>
          </form>
        </article>
      </div>
    </section>
  );
}
