import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../api';
import ProductCard from '../components/ProductCard';

export default function Category() {
  const { slug } = useParams();
  const [category, setCategory] = useState(null);
  const [error, setError] = useState('');
  useEffect(() => {
    const controller = new AbortController();
    api.get(`/categories/${encodeURIComponent(slug)}`, { signal: controller.signal })
      .then(({ data }) => setCategory({ slug, value: data.category }))
      .catch((err) => { if (err.code !== 'ERR_CANCELED') setError({ slug, value: err.response?.status === 404 ? 'Catégorie introuvable.' : 'Impossible de charger cette catégorie.' }); });
    return () => controller.abort();
  }, [slug]);
  const current = category?.slug === slug ? category.value : null;
  return <main className="mx-auto max-w-7xl px-5 py-10 min-h-[60vh]">
    {error?.slug === slug ? <p role="alert">{error.value}</p> : !current ? <p>Chargement de la catégorie…</p> : <>
      <h1 className="mb-2 text-4xl font-extrabold text-[var(--color-brand-purple-dark)]">{current.name}</h1>
      {current.description && <p className="mb-8 text-gray-700">{current.description}</p>}
      {current.products?.length ? <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">{current.products.map(product => <ProductCard key={product.id} product={product} />)}</div> : <p>Aucun produit disponible dans cette catégorie.</p>}
    </>}
  </main>;
}
