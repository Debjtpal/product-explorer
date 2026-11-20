import { Link } from 'react-router-dom';
import { Product } from '../data/products';

type ProductCardProps = { product: Product };

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <Link
        className="product-art"
        to={`/products/${product.id}`}
        aria-label={`View ${product.name}`}
      >
        <span aria-hidden="true">{product.icon}</span>
      </Link>
      <div className="product-card-content">
        <span className="eyebrow">{product.category}</span>
        <h2>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h2>
        <div className="product-card-footer">
          <strong>${product.price.toFixed(2)}</strong>
          <Link className="text-link" to={`/products/${product.id}`}>
            View details <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
