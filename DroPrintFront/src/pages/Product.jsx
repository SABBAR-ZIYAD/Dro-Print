import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api, imageUrl } from '../api';
import ProductCard from '../components/ProductCard';

export default function Product() {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  useEffect(() => {
    const controller = new AbortController();
    api.get(`/products/${encodeURIComponent(slug)}`, { signal: controller.signal })
      .then(({ data: response }) => setData({ slug, value: response }))
      .catch((err) => { if (err.code !== 'ERR_CANCELED') setError({ slug, value: err.response?.status === 404 ? 'Produit introuvable.' : 'Impossible de charger ce produit.' }); });
    return () => controller.abort();
  }, [slug]);
  if (error?.slug === slug) return <main className="mx-auto max-w-7xl px-5 py-12 min-h-[60vh]"><p role="alert">{error.value}</p></main>;
  if (data?.slug !== slug) return <main className="mx-auto max-w-7xl px-5 py-12 min-h-[60vh]">Chargement du produit…</main>;
  const { product, relatedProducts = [] } = data.value;
  let specs = product.specs_json;
  if (typeof specs === 'string') { try { specs = JSON.parse(specs); } catch { specs = null; } }
  return <main>
    <section className="mx-auto max-w-7xl px-5 py-12">
      <h1 className="mb-2 text-4xl font-extrabold text-[var(--color-brand-purple-dark)]">{product.name}</h1>
      <p className="mb-10 text-lg text-gray-600">Mettez en valeur votre image professionnelle avec nos impressions de qualité.</p>
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
        {product.image_path ? <img src={imageUrl(product.image_path)} alt={product.name} className="w-full max-h-[500px] rounded-2xl object-contain shadow-lg" /> : <div className="rounded-2xl bg-gray-100 p-12 text-center text-gray-500">Image à venir</div>}
        <div>
          {product.description && <p className="mb-6 whitespace-pre-line text-lg leading-relaxed text-gray-700">{product.description}</p>}
          {specs && typeof specs === 'object' && Object.keys(specs).length > 0 && <div className="mb-6 rounded-xl bg-gray-50 p-6 shadow-sm"><h2 className="mb-3 text-xl font-bold text-[var(--color-brand-purple-dark)]">Caractéristiques</h2><ul className="list-disc space-y-2 pl-5 text-gray-700">{Object.entries(specs).map(([key, value]) => <li key={key}><strong>{key} :</strong> {String(value)}</li>)}</ul></div>}
          <Link to={`/devis?product=${encodeURIComponent(product.name)}`} className="inline-block rounded-xl bg-[var(--color-brand-purple-dark)] px-6 py-3 text-white shadow hover:opacity-90">Demander un devis</Link>
        </div>
      </div>
    </section>
    <section className="bg-gray-50 py-12"><div className="mx-auto max-w-7xl px-5"><h2 className="mb-8 text-2xl font-bold text-[var(--color-brand-purple-dark)]">Produits similaires</h2>{relatedProducts.length ? <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">{relatedProducts.map(item => <ProductCard key={item.id} product={item} />)}</div> : <p>Aucun produit similaire trouvé.</p>}</div></section>
  </main>;
}
