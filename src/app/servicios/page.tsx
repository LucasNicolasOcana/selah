'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Flower2, 
  Heart, 
  Sparkles, 
  Clock, 
  Star, 
  CheckCircle, 
  ArrowRight,
  MapPin,
  Phone
} from 'lucide-react';
import { FaWhatsapp, FaSpa, FaUserMd } from 'react-icons/fa';

export default function Servicios() {
  const servicios = [
    {
      name: "Masaje Relajante",
      description: "Técnica suave que alivia el estrés y la tensión muscular, ideal para desconectar completamente",
      duration: "60 min",
      price: "$15.000",
      benefits: [
        "Reduce el estrés y la ansiedad",
        "Mejora la calidad del sueño",
        "Alivia la tensión muscular",
        "Promueve la relajación profunda"
      ],
      icon: <Flower2 className="w-8 h-8" />,
      color: "from-blue-50 to-blue-100",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      name: "Masaje Descontracturante",
      description: "Tratamiento profundo para aliviar contracturas y dolores musculares específicos",
      duration: "60-90 min",
      price: "$18.000",
      benefits: [
        "Elimina contracturas musculares",
        "Alivia dolores de espalda y cuello",
        "Mejora la movilidad articular",
        "Reduce la tensión acumulada"
      ],
      icon: <Heart className="w-8 h-8" />,
      color: "from-green-50 to-green-100",
      iconColor: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      name: "Masaje Reductor",
      description: "Técnica especializada para mejorar la circulación y reducir medidas localizadas",
      duration: "60 min",
      price: "$16.000",
      benefits: [
        "Mejora la circulación sanguínea",
        "Reduce la celulitis",
        "Tonifica los músculos",
        "Elimina toxinas del cuerpo"
      ],
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-purple-50 to-purple-100",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      name: "Drenaje Linfático Manual",
      description: "Técnica terapéutica que estimula el sistema linfático y reduce la retención de líquidos",
      duration: "60 min",
      price: "$17.000",
      benefits: [
        "Reduce la retención de líquidos",
        "Elimina toxinas del organismo",
        "Mejora el sistema inmunológico",
        "Alivia la hinchazón"
      ],
      icon: <Flower2 className="w-8 h-8" />,
      color: "from-teal-50 to-teal-100",
      iconColor: "text-teal-600",
      bgColor: "bg-teal-100"
    },
    {
      name: "Masaje Facial",
      description: "Tratamiento relajante y rejuvenecedor para el rostro y cuello",
      duration: "45 min",
      price: "$12.000",
      benefits: [
        "Rejuvenece la piel del rostro",
        "Reduce las líneas de expresión",
        "Mejora la circulación facial",
        "Relaja la tensión del cuello"
      ],
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-50 to-pink-100",
      iconColor: "text-pink-600",
      bgColor: "bg-pink-100"
    },
    {
      name: "Masaje Maternal",
      description: "Masaje especializado para futuras mamás, alivia molestias del embarazo",
      duration: "60 min",
      price: "$16.000",
      benefits: [
        "Alivia dolores de espalda",
        "Reduce la hinchazón en piernas",
        "Mejora la circulación",
        "Promueve la relajación"
      ],
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-orange-50 to-orange-100",
      iconColor: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      name: "Maderoterapia",
      description: "Técnica de masaje con instrumentos de madera especialmente diseñados para moldear, tonificar y relajar el cuerpo. Ideal para reducir celulitis, mejorar la circulación y promover el bienestar integral.",
      duration: "60 min",
      price: "Próximamente",
      benefits: [
        "Reduce la celulitis y la grasa localizada",
        "Mejora la circulación sanguínea y linfática",
        "Tonifica y moldea la silueta",
        "Alivia el estrés y la tensión muscular",
        "Promueve la eliminación de toxinas",
        "Relaja cuerpo y mente"
      ],
      icon: <Sparkles className="w-8 h-8" />, // Puedes cambiar el ícono si tienes uno más representativo
      color: "from-yellow-50 to-yellow-100",
      iconColor: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    {
      name: "Masaje con Piedras Calientes",
      description: "Masaje terapéutico que utiliza piedras volcánicas calientes para relajar profundamente los músculos, aliviar dolores y mejorar la circulación. Ideal para quienes buscan una experiencia de relajación intensa y restauradora.",
      duration: "60 min",
      price: "Próximamente",
      benefits: [
        "Alivia la tensión y el dolor muscular",
        "Reduce el estrés y la ansiedad",
        "Mejora la calidad del sueño",
        "Favorece la circulación sanguínea",
        "Promueve la desintoxicación del organismo",
        "Aumenta la flexibilidad y movilidad"
      ],
      icon: <Flower2 className="w-8 h-8" />, // Puedes cambiar el ícono si tienes uno más representativo
      color: "from-gray-50 to-gray-100",
      iconColor: "text-gray-600",
      bgColor: "bg-gray-100"
    }
  ];

  const paquetes = [
    {
      name: "Paquete Bienestar",
      description: "3 sesiones de masaje relajante",
      price: "$40.000",
      savings: "Ahorras $5.000",
      popular: false
    },
    {
      name: "Paquete Premium",
      description: "5 sesiones combinadas (relajante + descontracturante)",
      price: "$75.000",
      savings: "Ahorras $15.000",
      popular: true
    },
    {
      name: "Paquete Especial",
      description: "10 sesiones de cualquier masaje",
      price: "$140.000",
      savings: "Ahorras $30.000",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <main className="flex-grow">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary-light text-white py-20">
          <div className="container mx-auto px-4 text-center mt-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8">
              <FaSpa className="w-10 h-10" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Nuestros Servicios</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Descubre nuestra amplia gama de masajes terapéuticos diseñados para restaurar tu bienestar físico y mental
            </p>
            <div className="flex items-center justify-center space-x-8 text-lg">
              <div className="flex items-center space-x-2">
                <FaUserMd className="w-5 h-5" />
                <span>Profesional Certificada</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5" />
                <span>Experiencia Garantizada</span>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios Individuales */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Servicios Disponibles</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Cada masaje está diseñado para satisfacer necesidades específicas y promover tu bienestar integral
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {servicios.map((servicio, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className={`p-8 ${servicio.color} bg-gradient-to-br`}>
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 ${servicio.bgColor} rounded-xl flex items-center justify-center ${servicio.iconColor}`}>
                        {servicio.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-gray-800">{servicio.price}</div>
                        <div className="text-sm text-gray-600">{servicio.duration}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{servicio.name}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{servicio.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Beneficios:</h4>
                      <ul className="space-y-2">
                        {servicio.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <a 
                      href={
                        servicio.name === "Maderoterapia" || servicio.name === "Masaje con Piedras Calientes"
                          ? undefined
                          : `https://wa.me/5493416086817?text=Hola%20Cecilia,%20me%20interesa%20agendar%20un%20turno%20para%20${encodeURIComponent(servicio.name)}.%20¿Podrías%20contarme%20más%20detalles?`
                      }
                      target={
                        servicio.name === "Maderoterapia" || servicio.name === "Masaje con Piedras Calientes"
                          ? undefined
                          : "_blank"
                      }
                      rel={
                        servicio.name === "Maderoterapia" || servicio.name === "Masaje con Piedras Calientes"
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold w-full justify-center transition-colors duration-300
                        ${servicio.name === "Maderoterapia" || servicio.name === "Masaje con Piedras Calientes"
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-70"
                          : "bg-green-500 hover:bg-green-600 text-white"}
                      `}
                      style={
                        servicio.name === "Maderoterapia" || servicio.name === "Masaje con Piedras Calientes"
                          ? { pointerEvents: 'none' }
                          : {}
                      }
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      <span>{servicio.name === "Maderoterapia" || servicio.name === "Masaje con Piedras Calientes" ? "Próximamente" : "Reservar por WhatsApp"}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Paquetes */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Paquetes Especiales</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ahorra dinero y disfruta de múltiples sesiones con nuestros paquetes especiales
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {paquetes.map((paquete, index) => (
                <div key={index} className={`relative bg-white rounded-2xl shadow-xl p-8 border-2 ${paquete.popular ? 'border-primary' : 'border-gray-200'}`}>
                  {paquete.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Más Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{paquete.name}</h3>
                    <p className="text-gray-600 mb-6">{paquete.description}</p>
                    
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-primary mb-2">{paquete.price}</div>
                      <div className="text-sm text-green-600 font-semibold">{paquete.savings}</div>
                    </div>
                    
                    <a 
                      href={`https://wa.me/5493416086817?text=Hola%20Cecilia,%20me%20interesa%20el%20${paquete.name}.%20¿Podrías%20contarme%20más%20detalles?`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      <span>Consultar Disponibilidad</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">¿Listo para tu sesión de bienestar?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Agenda tu cita hoy mismo y comienza tu camino hacia la relajación y el bienestar
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="https://wa.me/5493416086817?text=Hola%20Cecilia,%20me%20interesa%20agendar%20un%20turno%20para%20masajes.%20¿Podrías%20contarme%20sobre%20tus%20servicios?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
              >
                <FaWhatsapp className="w-6 h-6" />
                <span>Reservar por WhatsApp</span>
              </a>
              
              <div className="flex items-center space-x-4 text-lg">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Rosario, Santa Fe</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>+54 9 341 608-6817</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 