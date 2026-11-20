import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export function ProductList() {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All categories');

  useEffect(() => {
    document.title = 'Products | Field & Form';
  }, []);

  const categories = useMemo(
    () => ['All categories', ...Array.from(new Set(products.map((product) => product.category)))],
    [],
  );
  const filteredProducts = useMemo(() => {
    const query = searchText.trim().toLowerCase();
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) &&
        (selectedCategory === 'All categories' || product.category === selectedCategory),
    );
  }, [searchText, selectedCategory]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => setSearchText(event.target.value);
  const handleCategory = (event: ChangeEvent<HTMLSelectElement>) =>
    setSelectedCategory(event.target.value);

  return (
    <main className="page-shell">
      <header className="site-header">
        <Link className="brand" to="/products">
          <span className="brand-mark">f.</span> field & form
        </Link>
        <span className="header-note">Considered goods for everyday living</span>
      </header>
      <section className="hero">
        <p className="eyebrow">THE EVERYDAY EDIT</p>
        <h1>
          Good things,
          <br />
          <em>well chosen.</em>
        </h1>
        <p className="hero-copy">
          A collection of useful, beautiful things made to make the everyday a little better.
        </p>
      </section>
      <section className="catalog" aria-labelledby="catalog-heading">
        <div className="catalog-heading">
          <div>
            <p className="eyebrow">THE COLLECTION</p>
            <h2 id="catalog-heading">Find your next favorite</h2>
          </div>
          <span className="result-count">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
          </span>
        </div>
        <div className="filters">
          <label className="search-field">
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              value={searchText}
              onChange={handleSearch}
              placeholder="Search products..."
              aria-label="Search products by name"
            />
          </label>
          <label className="category-field">
            <span className="sr-only">Filter by category</span>
            <select value={selectedCategory} onChange={handleCategory}>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
        </div>
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span aria-hidden="true">⌕</span>
            <h3>No products found</h3>
            <p>Try another search or choose a different category.</p>
          </div>
        )}
      </section>
      <footer className="site-footer">
        <span>FIELD & FORM</span>
        <span>Useful things. Made to last.</span>
      </footer>
    </main>
  );
}
