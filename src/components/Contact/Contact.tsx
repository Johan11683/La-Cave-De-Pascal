'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import s from './Contact.module.scss';

export default function Contact() {
  const [status, setStatus] = useState<'idle'|'sending'|'ok'|'error'>('idle');
  const [msg, setMsg] = useState<string>('');

  const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'sending') return;

    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot (doit rester vide)
    if ((fd.get('website') as string)?.trim()) {
      setStatus('ok'); // bot -> on fait comme si c'était OK
      setMsg('Merci, votre message a été envoyé.');
      form.reset();
      return;
    }

    const payload = {
      fullname: (fd.get('fullname') as string)?.trim(),
      cave: (fd.get('cave') as string) || '',
      email: (fd.get('email') as string)?.trim(),
      phone: (fd.get('phone') as string)?.trim() || '',
      message: (fd.get('message') as string)?.trim(),
      // website inclus mais vide (honeypot)
      website: (fd.get('website') as string) || '',
    };

    // mini validation côté client
    if (!payload.fullname || !payload.email || !payload.message || !payload.cave) {
      setStatus('error');
      setMsg('Merci de remplir tous les champs obligatoires.');
      return;
    }

    setStatus('sending');
    setMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const json = await res.json().catch(() => ({}));
      if (!res.ok || json?.ok !== true) throw new Error(json?.error || 'SEND_FAILED');

      setStatus('ok');
      setMsg('Merci, votre message a bien été envoyé. Nous revenons vers vous rapidement.');
      form.reset();
    } catch (err) {
      setStatus('error');
      setMsg("Une erreur est survenue. Réessayez plus tard ou contactez-nous par téléphone.");
      console.error(err);
    }
  }, [status]);

  return (
    <section id="contact" className={s.contact} aria-labelledby="contact-title">
      <div className={s.header}>
        <h2 id="contact-title">Une question ?</h2>
        <p>Venez nous rendre visite ou contactez-nous pour toute question. Nous serons ravis de vous aider !</p>
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
                <p><a href="tel:0557104037">05 57 10 40 37</a></p>
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
                <p><a href="mailto:lacavedepascal@orange.fr">lacavedepascal@orange.fr</a></p>
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
                <p><a href="tel:0556878702">05 56 87 87 02</a></p>
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
                <p><a href="mailto:lacavedepascal@neuf.fr">lacavedepascal@neuf.fr</a></p>
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

          <form className={s.form} onSubmit={onSubmit} noValidate>
            {/* Honeypot (ne surtout pas afficher) */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />

            <div className={s.field}>
              <label htmlFor="fullname">Nom complet *</label>
              <input id="fullname" name="fullname" type="text" required placeholder="Votre nom" />
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
              <button type="submit" className={s.submit} disabled={status === 'sending'}>
                {status === 'sending' ? 'Envoi…' : 'Envoyer le message'}
              </button>
            </div>

            {/* zone d’annonce accessible */}
            <p aria-live="polite" style={{ textAlign: 'center', margin: '8px 0 0', minHeight: 20 }}>
              {msg}
            </p>
          </form>
        </article>
      </div>
    </section>
  );
}
