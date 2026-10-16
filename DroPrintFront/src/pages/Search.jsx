import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { api } from '../api';
import ProductCard from '../components/ProductCard';

export default function Search() {
  const [params] = useSearchParams();
  const q = (params.get('q') || '').trim();
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');
  useEffect(() => {
    if (q.length < 2) return;
    const controller = new AbortController();
    api.get('/search', { params: { q }, signal: controller.signal })
      .then(({ data }) => setResults({ q, value: data }))
      .catch((err) => { if (err.code !== 'ERR_CANCELED') setError({ q, value: 'Impossible de lancer la recherche.' }); });
    return () => controller.abort();
  }, [q]);
  const current = results?.q === q ? results.value : null;
  return <main className="mx-auto max-w-7xl px-5 py-10 min-h-[60vh]">
    <h1 className="mb-8 text-3xl font-bold">Résultats de recherche pour « {q} »</h1>
    {q.length < 2 ? <p>Entrez au moins deux caractères.</p> : error?.q === q ? <p role="alert">{error.value}</p> : !current ? <p>Recherche en cours…</p> : <>
      <section className="mb-10"><h2 className="mb-4 text-2xl font-semibold">Produits</h2>{current.products.length ? <div className="grid grid-cols-1 gap-6 md:grid-cols-3">{current.products.map(product => <ProductCard key={product.id} product={product} />)}</div> : <p>Aucun produit trouvé.</p>}</section>
      <section><h2 className="mb-4 text-2xl font-semibold">Catégories</h2>{current.categories.length ? <ul className="list-disc space-y-2 pl-5">{current.categories.map(category => <li key={category.id}><Link to={`/categories/${category.slug}`} className="font-semibold text-[var(--color-brand-purple)] hover:underline">{category.name}</Link></li>)}</ul> : <p>Aucune catégorie trouvée.</p>}</section>
    </>}
  </main>;
}
