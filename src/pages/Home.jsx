import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProductRow from '../components/ProductRow'
import Footer from '../components/Footer'
import { useProducts } from '../hooks/useProducts'

const Home = () => {
  const { products, loading } = useProducts();

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Navbar />
      
      <main className="max-w-[1500px] mx-auto relative">
        <Hero />
        
        <div className="relative -mt-20 md:-mt-60 z-20">
          <ProductRow 
            title="Today's Trending Products" 
            products={products.slice(0, 10)} 
            isLoading={loading} 
          />
          
          <ProductRow 
            title="Best Sellers in Electronics" 
            products={products.slice(10, 20)} 
            isLoading={loading} 
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home