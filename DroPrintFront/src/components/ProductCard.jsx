import { Link } from 'react-router-dom';
import { imageUrl } from '../api';

export default function ProductCard({ product }) {
  return <Link to={`/products/${product.slug}`} className="block rounded-2xl border border-gray-100 bg-white p-4 shadow-md transition hover:border-[var(--color-brand-purple)] hover:shadow-xl">
    {product.image_path && <div className="flex h-48 items-center justify-center overflow-hidden rounded-xl bg-gray-100"><img src={imageUrl(product.image_path)} alt={product.name} className="max-h-full max-w-full object-contain" /></div>}
    <h2 className="mt-4 text-lg font-semibold text-[var(--color-brand-purple-dark)]">{product.name}</h2>
    {product.description && <p className="mt-2 line-clamp-3 text-sm text-gray-600">{product.description}</p>}
  </Link>;
}
