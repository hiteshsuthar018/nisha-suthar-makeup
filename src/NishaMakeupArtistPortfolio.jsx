import React from 'react';

const NishaMakeupArtistPortfolio = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      text: "Nisha did my wedding makeup and I felt like a princess! Her attention to detail is incredible.",
      role: "Bride",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Ananya Patel",
      text: "Professional, talented, and uses high-quality products. My engagement makeup was flawless!",
      role: "Client",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Rohini Mehta",
      text: "The best makeup artist I've worked with. Her bridal packages are worth every penny.",
      role: "Mother of the Bride",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w-200&h=200&fit=crop&crop=face"
    }
  ];

  const priceList = [
    {
      title: "Bridal Makeup - ₹10,000",
      type: "Premium Package",
      features: [
        "Full HD / Waterproof Makeup",
        "Natural Bridal Look",
        "Hairstyle Design",
        "Jewelry Setting",
        "Dupatta / Saree Draping",
        "Lenses & Laser"
      ],
      image: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?w=400&h=300&fit=crop&crop=face"
    },
    {
      title: "Bridal Makeup - ₹20,000",
      type: "Luxury Package",
      features: [
        "High-End Luxury Brands",
        "Deep Skin Preparation",
        "HD Professional Base",
        "Royal Bridal Hairstyle",
        "Complete Outfit Draping",
        "Lenses & Laser Application"
      ],
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&h=300&fit=crop&crop=face"
    },
    {
      title: "Bridal Makeup - ₹50,000",
      type: "Ultra Luxury Package",
      features: [
        "Ultra-Premium Airbrush / HD Makeup",
        "Only High-End Luxury Brands",
        "4-Step Luxury Skin Prep",
        "Flawless 24-Hour Stay Base",
        "Royal Hairstyle (Premium Kit)",
        "Full Bridal Outfit Setting",
        "Complete Jewelry Setting",
        "Exclusive Skin & Face Pampering"
      ],
      image: "https://images.unsplash.com/photo-1530639860211-6a2d6c57fd5d?w=400&h=300&fit=crop&crop=face"
    },
    {
      title: "Special Makeup - ₹2,000",
      type: "Basic Package",
      features: [
        "Basic Party / HD Makeup",
        "Light Skin Preparation",
        "Basic Hairstyle",
        "Basic Saree / Dupatta Setting"
      ],
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop&crop=face"
    }
  ];

  const services = [
    { name: "Bridal Makeup", icon: "👰", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=200&h=150&fit=crop" },
    { name: "Party Makeup", icon: "🎉", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=200&h=150&fit=crop" },
    { name: "Engagement", icon: "💍", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=200&h=150&fit=crop" },
    { name: "Haldi Ceremony", icon: "🌼", image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=200&h=150&fit=crop" },
    { name: "Saree Draping", icon: "👘", image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=200&h=150&fit=crop" },
    { name: "Hairstyling", icon: "💇", image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=200&h=150&fit=crop" }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h-500&fit=crop",
    "https://images.unsplash.com/photo-1596703923338-48f1c07e4f2e?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=500&fit=crop"
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-rose-50 to-white font-sans">
      {/* Hero Section with Makeup Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1920&h=1080&fit=crop")'
          }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-rose-900/70 to-pink-900/50"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-block bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full mb-6">
              <span className="text-rose-400 font-semibold">Professional Makeup Artist</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              Nisha Suthar
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Enhancing natural beauty with precision, artistry, and luxury products
            </p>
          </div>
          <div className="space-x-4">
            <button className="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-8 py-3 rounded-full transition duration-300 transform hover:scale-105 shadow-lg">
              Book Appointment
            </button>
            <button className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white/30 font-semibold px-8 py-3 rounded-full transition duration-300">
              View Portfolio
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent"></div>
      </section>

      {/* Services Section with Images */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-rose-900 mb-4">My Services</h2>
          <p className="text-rose-600 text-lg">Comprehensive beauty services for every occasion</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-rose-100"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6 text-center">
                <div className="text-3xl mb-3 transform group-hover:scale-110 transition duration-300 inline-block">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-rose-800 group-hover:text-rose-600 transition text-xl">
                  {service.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Makeup Gallery */}
      <section className="py-16 bg-rose-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-rose-900 mb-4">Makeup Portfolio</h2>
            <p className="text-rose-600 text-lg">A glimpse of my recent work</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl group">
                <img 
                  src={image} 
                  alt={`Makeup work ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-rose-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price List Section */}
      <section className="py-20 bg-linear-to-b from-white to-rose-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-px bg-amber-500"></div>
              <span className="text-amber-600 font-semibold">Premium Packages</span>
              <div className="w-8 h-px bg-amber-500"></div>
            </div>
            <h2 className="text-4xl font-bold text-rose-900 mb-4">Makeup Price List</h2>
            <p className="text-rose-600 text-lg max-w-2xl mx-auto">
              Tailored packages to make you feel beautiful on your special day
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bridal Packages */}
            <div className="space-y-6">
              {priceList.slice(0, 3).map((packageItem, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl border border-rose-100 relative group hover:shadow-2xl transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={packageItem.image} 
                      alt={packageItem.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-rose-800 mb-2">{packageItem.title}</h3>
                        <span className="inline-block px-4 py-1 bg-amber-50 text-amber-600 rounded-full text-sm font-semibold border border-amber-200">
                          {packageItem.type}
                        </span>
                      </div>
                      <div className="text-3xl text-amber-500">✨</div>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {packageItem.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>
                          <span className="text-rose-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-linear-to-r from-rose-500 to-pink-500 text-white font-semibold py-3 rounded-xl hover:from-rose-600 hover:to-pink-600 transition duration-300 transform hover:scale-[1.02] shadow-md">
                      Book This Package
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Special Makeup Card */}
              <div className="bg-linear-to-br from-rose-50 to-white rounded-2xl overflow-hidden shadow-xl border border-rose-100">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={priceList[3].image} 
                    alt={priceList[3].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-rose-800 mb-2">{priceList[3].title}</h3>
                      <span className="inline-block px-4 py-1 bg-rose-50 text-rose-600 rounded-full text-sm font-semibold border border-rose-200">
                        {priceList[3].type}
                      </span>
                    </div>
                    <div className="text-3xl text-rose-400">💄</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {priceList[3].features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                        <span className="text-rose-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-rose-400 hover:bg-rose-500 text-white font-semibold py-3 rounded-xl transition duration-300 transform hover:scale-[1.02]">
                    Book Party Makeup
                  </button>
                </div>
              </div>

              {/* Makeup Tools Showcase */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-rose-100">
                <h3 className="text-2xl font-bold text-rose-800 mb-6 text-center">Premium Brands I Use</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 mx-auto mb-3 bg-linear-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">💎</span>
                    </div>
                    <h4 className="font-semibold text-rose-700">Chanel</h4>
                    <p className="text-sm text-rose-500 mt-1">Luxury</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-16 h-16 mx-auto mb-3 bg-linear-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🌟</span>
                    </div>
                    <h4 className="font-semibold text-rose-700">MAC</h4>
                    <p className="text-sm text-rose-500 mt-1">Professional</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-16 h-16 mx-auto mb-3 bg-linear-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">✨</span>
                    </div>
                    <h4 className="font-semibold text-rose-700">Dior</h4>
                    <p className="text-sm text-rose-500 mt-1">High-End</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-16 h-16 mx-auto mb-3 bg-linear-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🎨</span>
                    </div>
                    <h4 className="font-semibold text-rose-700">Huda</h4>
                    <p className="text-sm text-rose-500 mt-1">Beauty</p>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="bg-linear-to-br from-amber-50 to-white rounded-2xl p-8 shadow-xl border border-amber-100">
                <h3 className="text-2xl font-bold text-rose-800 mb-6 text-center">Client Love</h3>
                <div className="space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl border border-amber-100">
                      <div className="flex items-center mb-3">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-amber-200"
                        />
                        <div className="ml-3">
                          <h4 className="font-semibold text-rose-800">{testimonial.name}</h4>
                          <p className="text-sm text-amber-600">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-rose-700 italic">"{testimonial.text}"</p>
                      <div className="flex mt-2">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-amber-400">★</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Makeup Background */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1920&h=1080&fit=crop")'
          }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-rose-900/80 to-pink-900/70"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Look?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Contact me for consultations, bookings, or any questions about my services
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-10 py-4 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
              <span className="mr-2">📞</span> Call Now: +91 98765 43210
            </button>
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-10 py-4 rounded-full text-lg border-2 border-white transition duration-300 transform hover:scale-105 flex items-center justify-center">
              <span className="mr-2">💌</span> Email: nisha@makeupartist.com
            </button>
          </div>
          
          {/* Makeup Tools Icons */}
          <div className="mt-16 flex justify-center space-x-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-2xl">💄</span>
              </div>
              <p className="text-white text-sm">Airbrush</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <p className="text-white text-sm">HD Makeup</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-2xl">💎</span>
              </div>
              <p className="text-white text-sm">Luxury Brands</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rose-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Nisha Suthar</h3>
              <p className="text-rose-200">Professional Makeup Artist</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="w-10 h-10 bg-rose-800 hover:bg-rose-700 rounded-full flex items-center justify-center transition">
                📸
              </a>
              <a href="#" className="w-10 h-10 bg-rose-800 hover:bg-rose-700 rounded-full flex items-center justify-center transition">
                📘
              </a>
              <a href="#" className="w-10 h-10 bg-rose-800 hover:bg-rose-700 rounded-full flex items-center justify-center transition">
                ▶️
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-rose-800 text-center">
            <p className="text-rose-300">© {new Date().getFullYear()} Nisha Suthar - Professional Makeup Artist. All rights reserved.</p>
            <p className="text-rose-400 mt-2">Creating beauty, one face at a time 💖</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NishaMakeupArtistPortfolio;