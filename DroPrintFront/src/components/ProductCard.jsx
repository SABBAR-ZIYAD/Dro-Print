import { Link } from 'react-router-dom';
import { imageUrl } from '../api';

export default function ProductCard({ product }) {
  return <Link to={`/products/${product.slug}`} className="group block overflow-hidden rounded-[1.75rem] border border-[#eee6eb] bg-[#fbfaf8] p-3 transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_50px_rgba(70,30,61,.14)]">
    {product.image_path && <div className="flex h-52 items-center justify-center overflow-hidden rounded-[1.3rem] bg-[#f0ecef]"><img src={imageUrl(product.image_path)} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>}
    <div className="p-3 pb-4">
      <div className="flex items-start justify-between gap-3">
        <h2 className="mt-2 text-lg font-extrabold text-[var(--color-brand-purple-dark)]">{product.name}</h2>
        <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[var(--color-brand-purple)] shadow-sm transition group-hover:bg-[var(--color-brand-yellow)]">↗</span>
      </div>
      {product.description && <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">{product.description}</p>}
    </div>
  </Link>;
}
