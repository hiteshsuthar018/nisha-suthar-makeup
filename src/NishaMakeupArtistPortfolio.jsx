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
      image: "https://media6.ppl-media.com/mediafiles/blogs/shutterstock_1805797540_a5cdc3576e.jpg"
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
    "data:image/jpeg;base64,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",
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
            <button className="bg-rose-500 hover:bg-rose-600 my-2 text-white font-semibold px-8 py-3 rounded-full transition duration-300 transform hover:scale-105 shadow-lg">
              Book Appointment
            </button>
            <button className="bg-white/20 backdrop-blur-sm border-2 my-2 border-white text-white hover:bg-white/30 font-semibold px-8 py-3 rounded-full transition duration-300">
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
              {/* <div className="bg-linear-to-br from-amber-50 to-white rounded-2xl p-8 shadow-xl border border-amber-100">
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
              </div> */}
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
              <span className="mr-2">📞</span> Call Now: +91 9352273378
            </button>
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-10 py-4 rounded-full text-lg border-2 border-white transition duration-300 transform hover:scale-105 flex items-center justify-center">
              <span className="mr-2">💌</span> Email: nishasuthar201@gmail.com
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