import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api';
import ProductCard from '../components/ProductCard';
import Testimonials from '../components/Testimonials';

const highlights = [
  { value: '24h', label: 'pour recevoir votre devis' },
  { value: '100%', label: 'créé selon votre image' },
  { value: 'Maroc', label: 'livraison nationale' },
];

const services = [
  { number: '01', title: 'Petit format', text: 'Cartes, flyers, brochures et supports commerciaux qui donnent du relief à votre marque.' },
  { number: '02', title: 'Grand format', text: 'Bâches, affiches, signalétique et habillage pour faire voir votre message de loin.' },
  { number: '03', title: 'Packaging', text: 'Étiquettes, boîtes et sacs personnalisés pour une expérience de marque cohérente.' },
];

const steps = [
  ['01', 'Partagez votre idée', 'Choisissez un produit ou décrivez-nous votre projet.'],
  ['02', 'Recevez votre devis', 'Nous précisons les matières, les finitions et les délais.'],
  ['03', 'Nous imprimons', 'Votre commande est contrôlée, produite puis livrée.'],
];

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    api.get('/home')
      .then(({ data }) => {
        if (data.success) setFeaturedProducts(data.featuredProducts || []);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="overflow-hidden bg-[#fbfaf8] text-[#241b24]">
      <section className="relative isolate min-h-[650px] overflow-hidden bg-[#35152f] lg:min-h-[720px]">
        <img src="/images/portfolio/print-studio-hero.png" alt="Collection de supports imprimés personnalisés" className="absolute inset-0 h-full w-full object-cover object-[62%_center]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(39,13,34,.97)_0%,rgba(55,21,49,.9)_34%,rgba(55,21,49,.35)_62%,rgba(55,21,49,.08)_100%)]" />
        <div className="absolute -left-28 top-24 h-80 w-80 rounded-full border border-white/10" />
        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-20 lg:min-h-[720px] lg:px-10">
          <div className="max-w-2xl text-white">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[var(--color-brand-yellow)]" />
              Imprimerie créative à Marrakech
            </div>
            <h1 className="text-4xl font-black leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Vos idées méritent une
              <span className="mt-2 block text-[var(--color-brand-yellow)]">belle impression.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/80 sm:text-xl">De la carte de visite à la signalétique, nous transformons votre identité en supports qui se voient, se touchent et se retiennent.</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/devis" className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-brand-yellow)] px-6 py-4 font-extrabold text-[#32132d] shadow-[0_14px_35px_rgba(253,199,2,.22)] transition hover:-translate-y-1 hover:bg-white sm:px-7">Démarrer mon projet <span aria-hidden="true">→</span></Link>
              <Link to="/categories/flyers" className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/5 px-7 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#35152f]">Explorer le catalogue</Link>
            </div>
          </div>
        </div>
        <div className="relative mx-auto -mt-24 grid max-w-5xl grid-cols-1 overflow-hidden rounded-3xl border border-white/20 bg-white/95 shadow-2xl backdrop-blur md:grid-cols-3">
          {highlights.map((item, index) => (
            <div key={item.value} className={`px-8 py-7 text-center ${index < 2 ? 'md:border-r md:border-[#eadfe7]' : ''}`}>
              <strong className="block text-3xl font-black text-[var(--color-brand-purple-dark)]">{item.value}</strong>
              <span className="mt-1 block text-sm text-gray-600">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24 pt-36 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-[#a16f00]">Notre savoir-faire</p>
              <h2 className="max-w-2xl text-4xl font-black tracking-[-0.035em] text-[var(--color-brand-purple-dark)] sm:text-5xl">Tout ce qu’il faut pour rendre votre marque visible.</h2>
            </div>
            <p className="max-w-md text-lg leading-8 text-gray-600">Un seul partenaire pour concevoir et produire vos supports, du quotidien aux campagnes grand format.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map(service => (
              <article key={service.number} className="group relative overflow-hidden rounded-[2rem] border border-[#eadfe7] bg-white p-8 shadow-[0_18px_50px_rgba(70,30,61,.07)] transition duration-300 hover:-translate-y-2 hover:bg-[var(--color-brand-purple-dark)]">
                <span className="text-sm font-black tracking-[.2em] text-[#a16f00] group-hover:text-[var(--color-brand-yellow)]">{service.number}</span>
                <h3 className="mt-16 text-2xl font-black text-[var(--color-brand-purple-dark)] group-hover:text-white">{service.title}</h3>
                <p className="mt-3 leading-7 text-gray-600 group-hover:text-white/75">{service.text}</p>
                <div className="absolute right-7 top-7 flex h-11 w-11 items-center justify-center rounded-full bg-[#f6edf3] text-xl text-[var(--color-brand-purple-dark)] transition group-hover:rotate-45 group-hover:bg-[var(--color-brand-yellow)]">↗</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-[#a16f00]">Les essentiels</p>
              <h2 className="text-4xl font-black tracking-[-0.035em] text-[var(--color-brand-purple-dark)] sm:text-5xl">Nos produits phares</h2>
            </div>
            <Link to="/search?q=impression" className="hidden font-bold text-[var(--color-brand-purple)] underline decoration-[var(--color-brand-yellow)] decoration-4 underline-offset-8 sm:block">Voir tous les produits</Link>
          </div>
          {loading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{[0, 1, 2, 3].map(i => <div key={i} className="h-80 animate-pulse rounded-3xl bg-gray-100" />)}</div>
          ) : error ? (
            <p role="alert" className="rounded-2xl bg-red-50 p-6 text-center text-red-700">Impossible de charger les produits pour le moment.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{featuredProducts.slice(0, 4).map(product => <ProductCard key={product.id} product={product} />)}</div>
          )}
        </div>
      </section>

      <section className="bg-[#35152f] px-6 py-24 text-white lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-[var(--color-brand-yellow)]">Simple et accompagné</p>
            <h2 className="text-4xl font-black tracking-[-0.035em] sm:text-5xl">De l’idée au produit fini.</h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-white/65">Vous gardez la vision. Notre équipe s’occupe des détails techniques, de la préparation à la livraison.</p>
          </div>
          <div className="space-y-3">
            {steps.map(([number, title, text]) => (
              <div key={number} className="grid grid-cols-[auto_1fr] gap-5 rounded-2xl border border-white/10 bg-white/[.06] p-6 transition hover:border-[var(--color-brand-yellow)]/60 hover:bg-white/[.1] sm:grid-cols-[70px_1fr]">
                <span className="text-2xl font-black text-[var(--color-brand-yellow)]">{number}</span>
                <div><h3 className="text-xl font-extrabold">{title}</h3><p className="mt-1 text-white/60">{text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="bg-[var(--color-brand-yellow)] px-6 py-20 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-bold uppercase tracking-[.2em] text-[#5b1b43]/70">Un projet en tête ?</p>
            <h2 className="mt-2 max-w-3xl text-4xl font-black tracking-[-.04em] text-[#35152f] sm:text-5xl">Faisons bonne impression, ensemble.</h2>
          </div>
          <Link to="/devis" className="shrink-0 rounded-full bg-[#35152f] px-8 py-4 font-extrabold text-white shadow-xl transition hover:-translate-y-1 hover:bg-white hover:text-[#35152f]">Demander un devis →</Link>
        </div>
      </section>
    </main>
  );
}
