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
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="product-card-content">
        <span className="eyebrow">{product.category}</span>
        <h2>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h2>
        <strong>${product.price.toFixed(2)}</strong>
      </div>
    </article>
  );
}
