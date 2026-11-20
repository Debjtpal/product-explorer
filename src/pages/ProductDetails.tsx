import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products';

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((item) => item.id === Number(id));

  useEffect(() => {
    document.title = product ? product.name : 'Product not found';
  }, [product]);

  return (
    <main className="page-shell detail-shell">
      <header className="site-header">
        <Link className="brand" to="/products">
          Products
        </Link>
      </header>
      <Link className="back-link" to="/products">
        Back to products
      </Link>
      {product ? (
        <article className="detail-card">
          <div className="detail-art">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="detail-copy">
            <p className="eyebrow">{product.category}</p>
            <h1>{product.name}</h1>
            <p className="detail-description">{product.description}</p>
            <p className="detail-price">${product.price.toFixed(2)}</p>
            <Link className="button-link" to="/products">
              Back to products
            </Link>
          </div>
        </article>
      ) : (
        <section className="not-found">
          <h1>Product not found</h1>
          <Link className="button-link" to="/products">
            View products
          </Link>
        </section>
      )}
    </main>
  );
}
