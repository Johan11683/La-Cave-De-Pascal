import s from './Products.module.scss';

export default function Products() {
  return (
    <section className={s.products} id="products" aria-labelledby="products-title">
      <div className={s.inner}>
        <header className={s.header}>
          <h2 id="products-title" className={s.title}>
            Notre gamme
          </h2>
          <p className={s.subtitle}>
            Une sélection large et exigeante, pensée pour accompagner tous les moments.
          </p>
        </header>

        <div className={s.grid}>
          <article className={s.item}>
            <h3>Vins</h3>
            <p>
              Vins français de toutes les régions, sélectionnés pour leur équilibre,
              leur typicité et le travail des domaines.
            </p>
          </article>

          <article className={s.item}>
            <h3>Champagnes</h3>
            <p>
              Grandes maisons et champagnes de récoltant,
              pour des cuvées de caractère comme pour les grandes occasions.
            </p>
          </article>

          <article className={s.item}>
            <h3>Vins étrangers</h3>
            <p>
              Une ouverture sur le monde avec des vins de diverses origines,
              choisis pour leur identité et leur singularité.
            </p>
          </article>

          <article className={s.item}>
            <h3>Bières</h3>
            <p>
              Bières classiques, crafts et locales,
              avec une attention particulière portée aux brasseries artisanales.
            </p>
          </article>

          <article className={s.item}>
            <h3>Spiritueux</h3>
            <p>
              Rhum, whisky, vodka, tequila, armagnac, cognac,
              eaux-de-vie et autres spiritueux de qualité.
            </p>
          </article>

          <article className={s.item}>
            <h3>Apéritifs & divers</h3>
            <p>
              Apéritifs, liqueurs et spécialités,
              pour compléter votre cave et vos moments de partage.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
