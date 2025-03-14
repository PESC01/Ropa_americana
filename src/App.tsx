import React, { useState } from 'react';
import { Phone, Clock, MapPin, Facebook, Instagram, ShoppingBag } from 'lucide-react';
import { GoogleMap } from './components/GoogleMap';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  const handleWhatsAppClick = (product?: any) => {
    const message = product
      ? `Hola, me interesa el producto: ${product.title} - ${product.price} Bs`
      : 'Hola, me gustaría obtener más información sobre sus productos';
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  const categories = [
    {
      title: "Ropa Casual",
      description: "Prendas cómodas para el día a día",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105",
      products: [
        { title: "Jeans Vintage Azul", price: "45", image: "https://images.unsplash.com/photo-1542272604-787c3835535d" },
        { title: "Camiseta Retro", price: "25", image: "https://images.unsplash.com/photo-1503341960582-b45751874cf0" },
        { title: "Chaqueta Denim", price: "65", image: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef" },
      ]
    },
    {
      title: "Ropa Deportiva",
      description: "Para un estilo de vida activo",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
      products: [
        { title: "Sudadera Vintage", price: "35", image: "https://images.unsplash.com/photo-1556906781-9a412961c28c" },
        { title: "Shorts Retro", price: "28", image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f" },
        { title: "Camiseta Deportiva", price: "22", image: "https://images.unsplash.com/photo-1556906781-9a412961c28c" },
      ]
    },
    {
      title: "Accesorios",
      description: "Complementa tu estilo",
      image: "https://thumbs.dreamstime.com/b/ropa-de-los-accesorios-de-vestir-del-viaje-adelante-para-las-mujeres-en-la-madera-90439809.jpg",
      products: [
        { title: "Gorra Vintage", price: "20", image: "https://images.unsplash.com/photo-1521369909029-2afed882baee" },
        { title: "Cinturón Cuero", price: "30", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62" },
        { title: "Bolso Retro", price: "40", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7" },
      ]
    },
    {
      title: "Calzado",
      description: "Zapatos y tenis de marca",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
      products: [
        { title: "Tenis Clásicos", price: "55", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a" },
        { title: "Botas Vintage", price: "75", image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f" },
        { title: "Zapatos Casuales", price: "60", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77" },
      ]
    }
  ];

  const renderContent = () => {
    if (selectedProduct) {
      return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <div className="relative">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-96 object-cover rounded-lg"
              />
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-lg"
              >
                ×
              </button>
            </div>
            <h3 className="text-2xl font-bold mt-4">{selectedProduct.title}</h3>
            <p className="text-xl text-gray-600 mt-2">{selectedProduct.price} Bs</p>
            <button
              onClick={() => handleWhatsAppClick(selectedProduct)}
              className="mt-4 w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-all"
            >
              Realizar Pedido por WhatsApp
            </button>
          </div>
        </div>
      );
    }

    if (selectedCategory) {
      const category = categories.find(c => c.title === selectedCategory);
      return (
        <div className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <button
              onClick={() => setSelectedCategory(null)}
              className="mb-8 flex items-center text-gray-600 hover:text-gray-900"
            >
              ← Volver a Categorías
            </button>
            <h2 className="text-3xl font-bold mb-8">{selectedCategory}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category?.products.map((product, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all hover:scale-105"
                  onClick={() => setSelectedProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                    <h3 className="text-xl font-semibold">{product.title}</h3>
                    <p className="text-lg">{product.price} Bs</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <>
        {/* Hero Section */}
        <div className="relative h-screen">
          <img
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Tienda de Ropa Vintage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Vintage American Style
              </h1>
              <p className="text-xl text-white mb-8">
                Ropa Americana de Segunda Mano de Calidad
              </p>
              <button
                onClick={() => document.getElementById('categorias')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Ver Categorías
              </button>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div id="categorias" className="py-16 px-4 md:px-8 bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-12">Categorías</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg transform transition-all hover:scale-105 cursor-pointer"
                onClick={() => setSelectedCategory(category.title)}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 hover:bg-opacity-30 transition-all">
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  <p className="text-white text-sm mt-2">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location & Contact */}
        <div className="bg-gray-100 py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Encuéntranos</h2>
              <div className="flex items-center mb-4">
                <MapPin className="mr-2" />
                <p>Calle de la Moda 123, Nueva York, NY 10001</p>
              </div>
              <div className="flex items-center mb-4">
                <Clock className="mr-2" />
                <p>Lun-Sáb: 10:00 - 20:00</p>
              </div>
              <div className="flex items-center mb-4">
                <Phone className="mr-2" />
                <p>+1 (123) 456-7890</p>
              </div>
              <div className="flex space-x-4 mt-6">
                <Facebook className="cursor-pointer hover:text-blue-600" />
                <Instagram className="cursor-pointer hover:text-pink-600" />
                <ShoppingBag className="cursor-pointer hover:text-green-600" />
              </div>
            </div>
            <GoogleMap
              center={{ lat: 40.7128, lng: -74.0060 }}
              zoom={15}
            />
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {renderContent()}

      {/* WhatsApp Button */}
      <button
        onClick={() => handleWhatsAppClick()}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 z-40"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.4 3.6C18.2 1.4 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.8.9 3.8 1.4 5.8 1.4 6.6 0 12-5.4 12-12 0-3.2-1.4-6.2-3.6-8.4zM12 22c-1.8 0-3.6-.5-5.2-1.4l-.4-.2-3.8 1 1-3.8-.2-.4C2.5 15.6 2 13.8 2 12 2 6.5 6.5 2 12 2c2.6 0 5 1 6.8 2.8C20.6 6.6 21.6 9 21.6 12c0 5.5-4.5 10-9.6 10zm5.2-7.4c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.1-.2.2-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.4.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5C9.4 9.1 8.8 7.6 8.6 7c-.2-.6-.4-.5-.5-.5h-.6c-.2 0-.5.1-.8.3-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4z" />
        </svg>
      </button>
    </div>
  );
}

export default App;