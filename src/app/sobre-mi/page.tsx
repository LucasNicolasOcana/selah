"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Heart, 
  Award, 
  Star, 
  MapPin, 
  Clock, 
  Sparkles,
  Users,
  Calendar,
  CheckCircle
} from 'lucide-react';
import { FaWhatsapp, FaSpa, FaUserMd } from 'react-icons/fa';

export default function SobreMi() {
  const certificaciones = [
    {
      title: "Título de Masajista Profesional",
      institution: "Instituto Isem",
      year: "2023",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Drenaje Linfático Manual",
      institution: "Escuela de Terapias Manuales",
      year: "2023",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      title: "Masaje Prenatal",
      institution: "Centro de Formación en Masajes",
      year: "2024",
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      title: "Terapias Alternativas",
      institution: "Instituto Holístico de Bienestar",
      year: "2024",
      icon: <Star className="w-6 h-6" />,
    },
  ];

  const estadisticas = [
    {
      number: "500+",
      label: "Clientes Satisfechos",
      icon: <Users className="w-8 h-8" />,
    },
    {
      number: "3",
      label: "Años de Experiencia",
      icon: <Calendar className="w-8 h-8" />,
    },
    {
      number: "4",
      label: "Certificaciones",
      icon: <Award className="w-8 h-8" />,
    },
    {
      number: "100%",
      label: "Compromiso",
      icon: <Heart className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary-light text-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center mt-10">
              <div>
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8">
                  <FaUserMd className="w-10 h-10" />
                </div>
                <h1 className="text-5xl font-bold mb-6">Sobre Mí</h1>
                <p className="text-xl mb-8 leading-relaxed">
                  Soy Cecilia, masajista profesional certificada con 3 años de
                  experiencia en prestigiosos spas de Rosario, ayudando a
                  personas a encontrar su bienestar físico y mental.
                </p>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>Rosario, Santa Fe</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5" />
                    <span>3 años de experiencia</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <FaSpa className="w-16 h-16" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Mi Filosofía</h3>
                    <p className="text-lg leading-relaxed">
                      &quot;Cada persona es única y merece atención personalizada. Mi objetivo es crear un espacio seguro donde puedas desconectar, relajarte y reconectar con tu bienestar interior.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Historia */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Mi Historia
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Mi pasión por el masaje comenzó hace más de 5 años cuando
                    experimenté por primera vez los beneficios terapéuticos de
                    un masaje profesional. Ese momento cambió mi vida y decidí
                    dedicarme a ayudar a otros.
                  </p>
                  <p>
                    Mi trayectoria profesional incluye experiencia en
                    prestigiosos centros de bienestar:
                  </p>
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Espacio Upalu <span className='text-sm text-gray-500 font-normal'>(2023)</span></h4>
                        <p className="text-gray-600">Centro de bienestar especializado en terapias alternativas y masajes terapéuticos.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Spa del Casino City Center Rosario <span className='text-sm text-gray-500 font-normal'>(2023-2024)</span></h4>
                        <p className="text-gray-600">Spa de lujo ubicado dentro del hotel 5 estrellas del casino, reconocido por su excelencia en servicios de bienestar, masajes y tratamientos premium en un entorno exclusivo.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Spa Mudra <span className='text-sm text-gray-500 font-normal'>(2024-2025)</span></h4>
                        <p className="text-gray-600">Centro de estética y spa ubicado en 9 de Julio 195, Rosario. Especializado en bienestar integral, masajes y tratamientos estéticos con enfoque holístico.</p>
                      </div>
                    </div>
                  </div>
                  <p>
                    Esta experiencia en diferentes entornos me permitió
                    perfeccionar mis técnicas y desarrollar un estilo único que
                    combina lo mejor de cada tradición terapéutica.
                  </p>
                  <p>
                    En 2025, decidí abrir Selah Spa para ofrecer un servicio más
                    personalizado y crear un espacio donde cada cliente se
                    sienta verdaderamente cuidado y valorado, aplicando toda la
                    experiencia adquirida en estos prestigiosos centros.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-spa-50 to-earth-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  ¿Por qué elegir mis servicios?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Atención Personalizada
                      </h4>
                      <p className="text-gray-600">
                        Cada sesión se adapta a tus necesidades específicas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Técnicas Profesionales
                      </h4>
                      <p className="text-gray-600">
                        Utilizo métodos certificados y probados
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Ambiente Relajante
                      </h4>
                      <p className="text-gray-600">
                        Espacio diseñado para tu máxima comodidad
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Compromiso con la Calidad
                      </h4>
                      <p className="text-gray-600">
                        Tu satisfacción es mi prioridad
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certificaciones */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Certificaciones y Formación
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Mi formación continua me permite ofrecerte los mejores
                tratamientos con las técnicas más actualizadas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certificaciones.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {cert.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{cert.institution}</p>
                  <span className="text-sm text-primary font-semibold">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Estadísticas */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Mi Trayectoria</h2>
              <p className="text-xl opacity-90">
                Números que respaldan mi compromiso con tu bienestar
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {estadisticas.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galería */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Mi Espacio
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Un ambiente diseñado para tu máxima relajación y comodidad
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-spa-50 to-earth-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaSpa className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Ambiente Relajante
                </h3>
                <p className="text-gray-600">
                  Espacio tranquilo con música suave y aromas relajantes para
                  crear la atmósfera perfecta
                </p>
              </div>

              <div className="bg-gradient-to-br from-spa-50 to-earth-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Equipamiento Profesional
                </h3>
                <p className="text-gray-600">
                  Camilla ergonómica y productos de alta calidad para garantizar
                  tu comodidad
                </p>
              </div>

              <div className="bg-gradient-to-br from-spa-50 to-earth-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Atención Personalizada
                </h3>
                <p className="text-gray-600">
                  Cada detalle está pensado para que tengas una experiencia
                  única y memorable
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              ¿Listo para tu experiencia de bienestar?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Agenda tu cita y descubre por qué tantos clientes confían en mis
              servicios
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

              <a
                href="/servicios"
                className="inline-flex items-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                <span>Ver Servicios</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
