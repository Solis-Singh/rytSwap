import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productsAPI } from '../utils/api';

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingProducts = async () => {
      try {
        const response = await productsAPI.getAllProducts({ limit: 6, sort: '-createdAt' });
        setTrendingProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching trending products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingProducts();
  }, []);

  const categories = [
    {
      id: 1,
      name: 'Electronics',
      icon: '📱',
      description: 'Rent the latest gadgets and electronics',
    },
    {
      id: 2,
      name: 'Books',
      icon: '📚',
      description: 'Access a wide range of books and literature',
    },
    {
      id: 3,
      name: 'Cycles',
      icon: '🚲',
      description: 'Rent bicycles for your commute or adventure',
    },
    {
      id: 4,
      name: 'Gadgets',
      icon: '⌚',
      description: 'Try out the newest tech gadgets',
    },
    {
      id: 5,
      name: 'Furniture',
      icon: '🪑',
      description: 'Furnish your space without the commitment',
    },
    {
      id: 6,
      name: 'Tools',
      icon: '🔧',
      description: 'Get the right tools for any job',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Student',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      quote:
        'RYT helped me save so much money on textbooks! I can now rent them for the semester instead of buying them.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Photographer',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      quote:
        'As a freelance photographer, I can now rent high-end equipment for specific shoots without breaking the bank.',
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Home DIYer',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      quote:
        'I love being able to rent power tools for my home projects. No more buying expensive tools I\'ll only use once!',
    },
  ];

  return (
    <div className="pt-2">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-900 to-violet-950 text-white py-12 relative overflow-hidden">
        {/* Background image with blur effect */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
            className="w-full h-full object-cover filter blur-[4px] scale-110 transform"
          />
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,theme(colors.violet.800/5%),theme(colors.fuchsia.800/5%),theme(colors.violet.800/5%))] opacity-30 z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.white/1%),transparent_70%)] backdrop-blur-xl z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-20">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-2/3 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-bungee bg-gradient-to-r from-violet-400 to-fuchsia-400 inline-block text-transparent bg-clip-text">RENT YOUR THINGS</h1>
              <p className="text-3xl md:text-3xl font-bold leading-tight text-violet-200 font-bonheur">
                If You Want To Use 'Right' Things Then You Can Rent On RYT-App.
              </p>
              <p className="text-2xl md:text-4xl leading-tight font-bonheur text-violet-300/90">
                Why Buy When You Can Rent?
              </p>
              <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/browse"
                  className="inline-flex items-center justify-center px-6 py-3 text-[15px] font-medium text-white bg-white/10 backdrop-blur-sm border border-violet-500/50 rounded-lg hover:bg-white/15 transition-all duration-300 hover:border-violet-400/70 transform hover:scale-[1.02]"
                >
                  Browse Products
                </Link>
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center px-6 py-3 text-[15px] font-medium text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-fuchsia-600 hover:to-violet-600 rounded-lg transition-all duration-300 shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-fuchsia-500/40 hover:-translate-y-0.5 relative overflow-hidden group/btn"
                >
                  <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.white/30%),transparent_50%)] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
                  <span className="relative flex items-center gap-2">
                    Join Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2 mt-8 md:mt-0">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="People sharing items"
                  className="relative w-full h-auto rounded-lg shadow-xl transform transition-transform hover:scale-[1.02] duration-300 shadow-lg shadow-violet-900/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-900 to-violet-950 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,theme(colors.violet.800/5%),theme(colors.fuchsia.800/5%),theme(colors.violet.800/5%))] opacity-30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.white/1%),transparent_70%)] backdrop-blur-xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-3xl font-bungee bg-gradient-to-r from-violet-400 to-fuchsia-400 inline-block text-transparent bg-clip-text">Browse by Category</h2>
            <p className="mt-4 text-lg text-violet-300/90 max-w-2xl mx-auto">
              Find exactly what you need from our wide range of categories
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/browse?category=${category.name}`}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 transform transition-transform hover:scale-[1.02] duration-300 shadow-lg shadow-violet-900/20 border border-violet-800/20"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 rounded-full mb-4">
                    <span className="text-4xl">{category.icon}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-white font-bungee bg-gradient-to-r from-violet-400 to-fuchsia-400 inline-block text-transparent bg-clip-text">{category.name}</h3>
                  <p className="mt-2 text-violet-300/90">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-900 to-violet-950 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,theme(colors.violet.800/5%),theme(colors.fuchsia.800/5%),theme(colors.violet.800/5%))] opacity-30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.white/1%),transparent_70%)] backdrop-blur-xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-3xl font-bungee bg-gradient-to-r from-violet-400 to-fuchsia-400 inline-block text-transparent bg-clip-text">Trending Products</h2>
            <p className="mt-4 text-lg text-violet-300/90 max-w-2xl mx-auto">
              Check out what others are renting right now
            </p>
          </div>

          <div className="mt-12">
            {loading ? (
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-violet-400"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {trendingProducts.map((product) => (
                  <div key={product._id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden transform transition-transform hover:scale-[1.02] duration-300 shadow-lg shadow-violet-900/20 border border-violet-800/20">
                    <div className="relative overflow-hidden group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-t-lg blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
                      <img
                        src={product.images[0]?.url || 'https://via.placeholder.com/300x200?text=No+Image'}
                        alt={product.title}
                        className="relative w-full h-48 object-cover rounded-t-lg transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-medium text-white">{product.title}</h3>
                      <p className="mt-1 text-violet-300/90 truncate">{product.description}</p>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-lg font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 inline-block text-transparent bg-clip-text">${product.pricePerDay}/day</span>
                        <Link
                          to={`/products/${product._id}`}
                          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-fuchsia-600 hover:to-violet-600 rounded-lg transition-all duration-300 shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-fuchsia-500/40 hover:-translate-y-0.5 relative overflow-hidden group/btn"
                        >
                          <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.white/30%),transparent_50%)] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
                          <span className="relative">View Details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-12 text-center">
              <Link
                to="/browse"
                className="inline-flex items-center justify-center px-6 py-3 text-[15px] font-medium text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-fuchsia-600 hover:to-violet-600 rounded-lg transition-all duration-300 shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-fuchsia-500/40 hover:-translate-y-0.5 relative overflow-hidden group/btn"
              >
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.white/30%),transparent_50%)] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
                <span className="relative flex items-center gap-2">
                  View All Products
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-900 to-violet-950 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,theme(colors.violet.800/5%),theme(colors.fuchsia.800/5%),theme(colors.violet.800/5%))] opacity-30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.white/1%),transparent_70%)] backdrop-blur-xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-3xl font-bungee bg-gradient-to-r from-violet-400 to-fuchsia-400 inline-block text-transparent bg-clip-text">How It Works</h2>
            <p className="mt-4 text-lg text-violet-300/90 max-w-2xl mx-auto">
              Renting has never been easier
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 transform transition-transform hover:scale-[1.02] duration-300 shadow-lg shadow-violet-900/20 border border-violet-800/20 text-center">
              <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white font-bungee bg-gradient-to-r from-violet-400 to-fuchsia-400 inline-block text-transparent bg-clip-text">1. Find What You Need</h3>
              <p className="mt-4 text-violet-300/90">
                Browse our extensive catalog of products available for rent
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 transform transition-transform hover:scale-[1.02] duration-300 shadow-lg shadow-violet-900/20 border border-violet-800/20 text-center">
              <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white font-bungee bg-gradient-to-r from-violet-400 to-fuchsia-400 inline-block text-transparent bg-clip-text">2. Book Your Rental</h3>
              <p className="mt-4 text-violet-300/90">
                Select your rental period and make a secure payment
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 transform transition-transform hover:scale-[1.02] duration-300 shadow-lg shadow-violet-900/20 border border-violet-800/20 text-center">
              <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white font-bungee bg-gradient-to-r from-violet-400 to-fuchsia-400 inline-block text-transparent bg-clip-text">3. Enjoy & Return</h3>
              <p className="mt-4 text-violet-300/90">
                Use the item during your rental period and return it when you're done
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-900 to-violet-950 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,theme(colors.violet.800/5%),theme(colors.fuchsia.800/5%),theme(colors.violet.800/5%))] opacity-30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.white/1%),transparent_70%)] backdrop-blur-xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-3xl font-bungee bg-gradient-to-r from-violet-400 to-fuchsia-400 inline-block text-transparent bg-clip-text">What Our Users Say</h2>
            <p className="mt-4 text-lg text-violet-300/90 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied users
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 transform transition-transform hover:scale-[1.02] duration-300 shadow-lg shadow-violet-900/20 border border-violet-800/20">
                <div className="flex items-center">
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full blur opacity-75"></div>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="relative h-14 w-14 rounded-full object-cover border-2 border-violet-500/50"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">{testimonial.name}</h3>
                    <p className="text-violet-300/90">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-6 text-violet-200/90 italic leading-relaxed">"<span className="text-white">{testimonial.quote}</span>"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-900 to-violet-950 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,theme(colors.violet.800/10%),theme(colors.fuchsia.800/10%),theme(colors.violet.800/10%))] opacity-40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.white/5%),transparent_70%)] backdrop-blur-xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-violet-900 via-fuchsia-900 to-violet-900 border border-violet-800/50 shadow-md p-12">
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,theme(colors.violet.800/30%),theme(colors.fuchsia.800/30%),theme(colors.violet.800/30%))] opacity-40"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.white/5%),transparent_70%)] backdrop-blur-xl"></div>
            
            <div className="text-center relative">
              <h2 className="text-3xl font-bungee bg-gradient-to-r from-violet-400 to-fuchsia-400 inline-block text-transparent bg-clip-text">Ready to Start Renting?</h2>
              <p className="mt-4 text-lg text-violet-200/90 max-w-2xl mx-auto">
                Join thousands of users who are already saving money and reducing waste through renting.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center px-6 py-3 text-[15px] font-medium text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-fuchsia-600 hover:to-violet-600 rounded-lg transition-all duration-300 shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-fuchsia-500/40 hover:-translate-y-0.5 relative overflow-hidden group/btn"
                >
                  <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.white/30%),transparent_50%)] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
                  <span className="relative flex items-center gap-2">
                    Sign Up Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Link>
                <Link
                  to="/browse"
                  className="inline-flex items-center justify-center px-6 py-3 text-[15px] font-medium text-white bg-white/10 backdrop-blur-sm border border-violet-500/50 rounded-lg hover:bg-white/15 transition-all duration-300 hover:border-violet-400/70 transform hover:scale-[1.02]"
                >
                  Browse Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
