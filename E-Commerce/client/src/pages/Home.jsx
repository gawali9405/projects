import React, { useState, useEffect } from "react";

const sliderImages = [
  "https://picsum.photos/800/300?random=1",
  "https://picsum.photos/800/300?random=2",
  "https://picsum.photos/800/300?random=3",
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-15">
      {/* Slider */}
      <div className="w-full h-[300px] overflow-hidden relative">
        <img
          src={sliderImages[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>

      {/* About Section */}
      <section className="p-8 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          We are a leading company committed to delivering high-quality services
          and solutions to our clients worldwide. Our mission is to bring
          innovation and excellence to every project.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
          <p className="text-lg mb-8">
            We provide a variety of products to meet your needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="service-card bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Product Customization</h3>
              <p>
                Choose from a wide range of customizations to personalize your
                products. We offer various options to make your purchase truly
                unique.
              </p>
            </div>

            <div className="service-card bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Fast Shipping</h3>
              <p>
                Enjoy fast and reliable shipping, ensuring that your product
                reaches you as quickly as possible.
              </p>
            </div>

            <div className="service-card bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Secure Payment</h3>
              <p>
                We offer secure and flexible payment options to make your buying
                experience safe and hassle-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="p-8 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-2">Email: info@example.com</p>
        <p className="text-gray-700">Phone: +91-9876543210</p>
      </section>
    </section>
  );
};

export default Home;
