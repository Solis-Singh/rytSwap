import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // In a real application, you would send this data to your backend
      // For now, we'll simulate a successful submission after a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitError('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10 md:p-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl mb-4 font-bungee bg-gradient-to-r from-violet-600 to-fuchsia-600 inline-block text-transparent bg-clip-text">Get in Touch</h1>
          <p className="text-gray-700 max-w-2xl mx-auto font-lilgrotesk text-lg">
            Have questions or feedback? We'd love to hear from you and help make your rental experience even better.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-900 via-fuchsia-900 to-violet-900 p-8 shadow-lg">
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,theme(colors.violet.800/30%),theme(colors.fuchsia.800/30%),theme(colors.violet.800/30%))] opacity-40"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.white/5%),transparent_70%)] backdrop-blur-xl"></div>
            
            <div className="relative">
              <h2 className="text-2xl font-bold text-white mb-6 font-bungee">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-4 text-violet-100 group cursor-pointer hover:text-white transition-colors duration-300">
                  <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-lg">+1 (555) 123-4567</p>
                    <p className="text-violet-200/80 text-sm">Mon-Fri 9am to 6pm</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-violet-100 group cursor-pointer hover:text-white transition-colors duration-300">
                  <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-lg">support@ryt.com</p>
                    <p className="text-violet-200/80 text-sm">Quick response within 24hrs</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-violet-100 group cursor-pointer hover:text-white transition-colors duration-300">
                  <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-lg">123 Market Street</p>
                    <p className="text-violet-200/80 text-sm">San Francisco, CA 94103</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex space-x-4">
                <a href="#" className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-violet-100 hover:text-white transition-all duration-300 hover:scale-110">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-violet-100 hover:text-white transition-all duration-300 hover:scale-110">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="#" className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-violet-100 hover:text-white transition-all duration-300 hover:scale-110">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur-xl border border-violet-100/50 shadow-lg transform transition-transform hover:scale-[1.01] duration-500">
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,theme(colors.violet.50/40%),theme(colors.fuchsia.50/40%),theme(colors.violet.50/40%))] opacity-30 animate-spin-slow"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.violet.50/30%),transparent_70%)] animate-pulse"></div>
            
            <form onSubmit={handleSubmit} className="relative p-8">
              <div className="space-y-8">
                <div className="group">
                  <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-2 font-lilgrotesk group-focus-within:text-violet-600 transition-colors duration-300">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl border-2 border-violet-100/50 focus:border-violet-400 focus:ring-4 focus:ring-violet-200/30 transition-all duration-300 bg-white/80 backdrop-blur-sm text-gray-900 placeholder-gray-400 outline-none"
                      placeholder="John Doe"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-2 font-lilgrotesk group-focus-within:text-violet-600 transition-colors duration-300">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl border-2 border-violet-100/50 focus:border-violet-400 focus:ring-4 focus:ring-violet-200/30 transition-all duration-300 bg-white/80 backdrop-blur-sm text-gray-900 placeholder-gray-400 outline-none"
                      placeholder="john@example.com"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="subject" className="block text-base font-medium text-gray-700 mb-2 font-lilgrotesk group-focus-within:text-violet-600 transition-colors duration-300">
                    Subject
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl border-2 border-violet-100/50 focus:border-violet-400 focus:ring-4 focus:ring-violet-200/30 transition-all duration-300 bg-white/80 backdrop-blur-sm text-gray-900 placeholder-gray-400 outline-none"
                      placeholder="How can we help?"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-base font-medium text-gray-700 mb-2 font-lilgrotesk group-focus-within:text-violet-600 transition-colors duration-300">
                    Your Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl border-2 border-violet-100/50 focus:border-violet-400 focus:ring-4 focus:ring-violet-200/30 transition-all duration-300 bg-white/80 backdrop-blur-sm text-gray-900 placeholder-gray-400 outline-none resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group/btn w-full inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-fuchsia-600 hover:to-violet-600 rounded-xl transition-all duration-300 shadow-lg shadow-violet-600/20 hover:shadow-xl hover:shadow-fuchsia-600/30 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-violet-500/50 relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.white/40%),transparent_50%)] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
                    <span className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,theme(colors.white/20%),transparent_25%,transparent_75%,theme(colors.white/20%))] opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-spin-slow"></span>
                    <span className="relative flex items-center gap-3">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span className="animate-pulse">Sending...</span>
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-6 h-6 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </div>

              {submitSuccess && (
                <div className="mt-8 relative overflow-hidden">
                  <div className="animate-slide-up">
                    <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200/50 rounded-xl shadow-lg shadow-green-600/10">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 animate-bounce-subtle">
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-green-900 font-lilgrotesk">Message Sent Successfully!</h3>
                          <p className="mt-1 text-green-700">Thank you for reaching out. We'll get back to you soon.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {submitError && (
                <div className="mt-8 relative overflow-hidden">
                  <div className="animate-slide-up">
                    <div className="p-6 bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200/50 rounded-xl shadow-lg shadow-red-600/10">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-red-600 animate-pulse">
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-red-900 font-lilgrotesk">Message Not Sent</h3>
                          <p className="mt-1 text-red-700">{submitError}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="h-96 w-full">
                <iframe
                  title="RYT Office Location"
                  className="w-full h-full"
                  frameBorder="0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0968478783277!2d-122.41941548468204!3d37.77492997975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sMarket%20St%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1621532631421!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
