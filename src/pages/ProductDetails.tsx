import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products';

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((item) => item.id === Number(id));

  useEffect(() => {
    document.title = product
      ? `${product.name} | Field & Form`
      : 'Product not found | Field & Form';
  }, [product]);

  return (
    <main className="page-shell detail-shell">
      <header className="site-header">
        <Link className="brand" to="/products">
          <span className="brand-mark">f.</span> field & form
        </Link>
        <span className="header-note">Considered goods for everyday living</span>
      </header>
      <Link className="back-link" to="/products">
        ← Back to the collection
      </Link>
      {product ? (
        <article className="detail-card">
          <div className="detail-art" aria-hidden="true">
            <span>{product.icon}</span>
          </div>
          <div className="detail-copy">
            <p className="eyebrow">{product.category}</p>
            <h1>{product.name}</h1>
            <p className="detail-description">{product.description}</p>
            <p className="detail-price">${product.price.toFixed(2)}</p>
            <Link className="button-link" to="/products">
              Explore the collection
            </Link>
          </div>
        </article>
      ) : (
        <section className="not-found">
          <span aria-hidden="true">✳</span>
          <p className="eyebrow">A LITTLE MISSING</p>
          <h1>We couldn't find that one.</h1>
          <p>This product may have moved on to a new home.</p>
          <Link className="button-link" to="/products">
            Browse all products
          </Link>
        </section>
      )}
      <footer className="site-footer">
        <span>FIELD & FORM</span>
        <span>Useful things. Made to last.</span>
      </footer>
    </main>
  );
}
