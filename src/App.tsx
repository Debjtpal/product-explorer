import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ProductDetails } from './pages/ProductDetails';
import { ProductList } from './pages/ProductList';
import './App.css';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<Navigate to="/products" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
