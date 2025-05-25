import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-violet-950 text-white py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,theme(colors.violet.800/5%),theme(colors.fuchsia.800/5%),theme(colors.violet.800/5%))] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.white/1%),transparent_70%)] backdrop-blur-xl"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Company Info */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-2xl font-bungee bg-gradient-to-r from-violet-400 to-fuchsia-400 inline-block text-transparent bg-clip-text mb-4">Rent Your Things</h2>
              <p className="text-[15px] text-violet-300/90 leading-relaxed text-center md:text-left">
                Rent Your Things is a peer-to-peer rental platform where you can rent or list products like bikes, books, gadgets, and more.
              </p>
            </div>
            
            {/* Social Media Links */}
            <div className="flex justify-center md:justify-start space-x-5">
              <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-violet-200/80 hover:text-violet-500 transition-all duration-300 hover:scale-110">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-violet-200/80 hover:text-violet-500 transition-all duration-300 hover:scale-110">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-violet-200/80 hover:text-violet-500 transition-all duration-300 hover:scale-110">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Quick Links */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 transform transition-transform hover:scale-[1.02] duration-300 shadow-lg shadow-violet-900/20">
                <h3 className="text-sm font-medium text-white mb-5 uppercase tracking-wider font-bungee bg-gradient-to-r from-violet-400 to-fuchsia-400 inline-block text-transparent bg-clip-text">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/" className="text-[15px] text-violet-300/90 hover:text-violet-300 hover:scale-105 transform transition-all duration-300 inline-flex items-center group">
                      <span className="absolute h-0.5 w-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 group-hover:w-full transition-all duration-300"></span>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/browse" className="text-[15px] text-violet-300/90 hover:text-violet-300 hover:scale-105 transform transition-all duration-300 inline-flex items-center group">
                      <span className="absolute h-0.5 w-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 group-hover:w-full transition-all duration-300"></span>
                      Browse Products
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-[15px] text-violet-300/90 hover:text-violet-300 hover:scale-105 transform transition-all duration-300 inline-flex items-center group">
                      <span className="absolute h-0.5 w-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 group-hover:w-full transition-all duration-300"></span>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-[15px] text-violet-300/90 hover:text-violet-300 hover:scale-105 transform transition-all duration-300 inline-flex items-center group">
                      <span className="absolute h-0.5 w-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 group-hover:w-full transition-all duration-300"></span>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Categories */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 transform transition-transform hover:scale-[1.02] duration-300 shadow-lg shadow-violet-900/20">
                <h3 className="text-sm font-medium text-white mb-5 uppercase tracking-wider font-bungee bg-gradient-to-r from-violet-400 to-fuchsia-400 inline-block text-transparent bg-clip-text">Categories</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/browse?category=bikes" className="text-[15px] text-violet-300/90 hover:text-violet-300 hover:scale-105 transform transition-all duration-300 inline-flex items-center group">
                      <span className="absolute h-0.5 w-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 group-hover:w-full transition-all duration-300"></span>
                      Bikes
                    </Link>
                  </li>
                  <li>
                    <Link to="/browse?category=books" className="text-[15px] text-violet-300/90 hover:text-violet-300 hover:scale-105 transform transition-all duration-300 inline-flex items-center group">
                      <span className="absolute h-0.5 w-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 group-hover:w-full transition-all duration-300"></span>
                      Books
                    </Link>
                  </li>
                  <li>
                    <Link to="/browse?category=gadgets" className="text-[15px] text-violet-300/90 hover:text-violet-300 hover:scale-105 transform transition-all duration-300 inline-flex items-center group">
                      <span className="absolute h-0.5 w-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 group-hover:w-full transition-all duration-300"></span>
                      Gadgets
                    </Link>
                  </li>
                  <li>
                    <Link to="/browse?category=others" className="text-[15px] text-violet-300/90 hover:text-violet-300 hover:scale-105 transform transition-all duration-300 inline-flex items-center group">
                      <span className="absolute h-0.5 w-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 group-hover:w-full transition-all duration-300"></span>
                      Others
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 transform transition-transform hover:scale-[1.02] duration-300 shadow-lg shadow-violet-900/20">
                <h3 className="text-sm font-medium text-white mb-5 uppercase tracking-wider font-bungee bg-gradient-to-r from-violet-400 to-fuchsia-400 inline-block text-transparent bg-clip-text">Legal</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/privacy" className="text-[15px] text-violet-300/90 hover:text-violet-300 hover:scale-105 transform transition-all duration-300 inline-flex items-center group">
                      <span className="absolute h-0.5 w-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 group-hover:w-full transition-all duration-300"></span>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="text-[15px] text-violet-300/90 hover:text-violet-300 hover:scale-105 transform transition-all duration-300 inline-flex items-center group">
                      <span className="absolute h-0.5 w-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 group-hover:w-full transition-all duration-300"></span>
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="text-[15px] text-violet-300/90 hover:text-violet-300 hover:scale-105 transform transition-all duration-300 inline-flex items-center group">
                      <span className="absolute h-0.5 w-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 group-hover:w-full transition-all duration-300"></span>
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter - KEPT UNCHANGED */}
        <div className="mt-16 md:mt-20">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-violet-900 via-fuchsia-900 to-violet-900 border border-violet-800/50 shadow-md">
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,theme(colors.violet.800/30%),theme(colors.fuchsia.800/30%),theme(colors.violet.800/30%))] opacity-40"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.white/5%),transparent_70%)] backdrop-blur-xl"></div>
            <div className="relative p-8 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-medium text-white mb-2">Join our newsletter</h3>
                <p className="text-[15px] text-violet-200/90">
                  Get exclusive updates and early access to new products.
                </p>
              </div>
              <form className="flex-1 flex flex-col sm:flex-row w-full md:w-auto gap-3">
                <div className="relative flex-1">
                  <input
                    type="email"
                    name="email-address"
                    id="email-address"
                    autoComplete="email"
                    required
                    className="w-full pl-4 pr-12 py-2.5 text-[15px] text-white placeholder-violet-300/70 bg-white/10 backdrop-blur-sm border border-violet-500/50 rounded-lg focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/50 transition-all duration-300 hover:border-violet-400/70 transform hover:scale-[1.02]"
                    placeholder="Enter your email"
                  />
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-violet-300/70">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-2.5 text-[15px] font-medium text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-fuchsia-600 hover:to-violet-600 rounded-lg transition-all duration-300 shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-fuchsia-500/40 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-violet-500/50 relative overflow-hidden group/btn animate-pulse-slow"
                >
                  <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.white/30%),transparent_50%)] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
                  <span className="relative flex items-center gap-2">
                    Subscribe
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-violet-800/20">
          <div className="text-center space-y-2">
            <p className="text-[14px] text-violet-200/80">&copy; {new Date().getFullYear()} Rent Your Things. All rights reserved.</p>
            <p className='text-3xl font-bonheur inline-block'>Made with ❤️ by Ryt Teams</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;