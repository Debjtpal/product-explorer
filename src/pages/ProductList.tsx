import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export function ProductList() {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All categories');

  useEffect(() => {
    document.title = 'Products';
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
          Products
        </Link>
      </header>
      <section className="catalog" aria-labelledby="catalog-heading">
        <div className="catalog-heading">
          <h1 id="catalog-heading">Product catalog</h1>
          <span className="result-count">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
          </span>
        </div>
        <div className="filters">
          <label className="search-field">
            <input
              type="search"
              value={searchText}
              onChange={handleSearch}
              placeholder="Search products"
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
            <h3>No products found</h3>
          </div>
        )}
      </section>
    </main>
  );
}
