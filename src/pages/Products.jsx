import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Filters from '../components/Filters'
import ProductGrid from '../components/ProductGrid'
import { useProducts } from '../hooks/useProducts'
import { useLocation } from 'react-router-dom'

const Products = () => {
  const { products, categories, loading } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange, setPriceRange] = useState('all');

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';

  useEffect(() => {
    let result = products;

    if (searchQuery) {
      result = result.filter(p => p.title.toLowerCase().includes(searchQuery));
    }

    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      if (max) {
        result = result.filter(p => p.price >= min && p.price <= max);
      } else {
        result = result.filter(p => p.price >= min);
      }
    }

    setFilteredProducts(result);
  }, [products, selectedCategory, priceRange, searchQuery]);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="max-w-[1500px] mx-auto p-4 flex gap-8">
        <aside className="w-64 hidden md:block flex-shrink-0">
          <Filters 
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            priceRange={priceRange}
            onPriceChange={setPriceRange}
          />
        </aside>
        <section className="flex-1">
          <div className="mb-4 text-sm font-medium">
            {filteredProducts.length} results found {searchQuery && `for "${searchQuery}"`}
          </div>
          {loading ? <div>Loading products...</div> : <ProductGrid products={filteredProducts} />}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Products