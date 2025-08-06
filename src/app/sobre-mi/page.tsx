"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
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

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const cardHover = {
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  const iconHover = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary-light text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="grid lg:grid-cols-2 gap-12 items-center mt-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <motion.div 
                  className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8"
                  variants={iconHover}
                  whileHover="hover"
                >
                  <FaUserMd className="w-10 h-10" />
                </motion.div>
                <motion.h1 
                  className="text-5xl font-bold mb-6"
                  variants={fadeInUp}
                >
                  Sobre Mí
                </motion.h1>
                <motion.p 
                  className="text-xl mb-8 leading-relaxed"
                  variants={fadeInUp}
                >
                  Soy Cecilia, masajista profesional certificada con 3 años de
                  experiencia en prestigiosos spas de Rosario, ayudando a
                  personas a encontrar su bienestar físico y mental.
                </motion.p>
                <motion.div 
                  className="flex items-center space-x-6"
                  variants={fadeInUp}
                >
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>Rosario, Santa Fe</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5" />
                    <span>3 años de experiencia</span>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div 
                className="relative"
                variants={slideInRight}
              >
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
                  variants={scaleIn}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center">
                    <motion.div 
                      className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center"
                      variants={iconHover}
                      whileHover="hover"
                    >
                      <FaSpa className="w-16 h-16" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4">Mi Filosofía</h3>
                    <p className="text-lg leading-relaxed">
                      &quot;Cada persona es única y merece atención personalizada. Mi objetivo es crear un espacio seguro donde puedas desconectar, relajarte y reconectar con tu bienestar interior.&quot;
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Historia */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="grid lg:grid-cols-2 gap-12 items-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div variants={slideInLeft}>
                <motion.h2 
                  className="text-4xl font-bold text-gray-800 mb-6 flex items-center gap-3"
                  variants={fadeInUp}
                >
                  <Calendar className="w-8 h-8 text-primary" />
                  Mi Historia
                </motion.h2>
                <motion.div 
                  className="space-y-6 text-lg text-gray-700 leading-relaxed"
                  variants={containerVariants}
                >
                  <motion.p variants={itemVariants}>
                    Mi pasión por el masaje comenzó hace más de 5 años cuando
                    experimenté por primera vez los beneficios terapéuticos de
                    un masaje profesional. Ese momento cambió mi vida y decidí
                    dedicarme a ayudar a otros.
                  </motion.p>
                  <motion.p variants={itemVariants}>
                    Mi trayectoria profesional incluye experiencia en
                    prestigiosos centros de bienestar:
                  </motion.p>
                  <motion.div 
                    className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 space-y-4"
                    variants={scaleIn}
                  >
                    <motion.div 
                      className="flex items-start space-x-3"
                      variants={itemVariants}
                    >
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Espacio Upalu <span className='text-sm text-gray-500 font-normal'>(2023)</span></h4>
                        <p className="text-gray-600">Centro de bienestar especializado en terapias alternativas y masajes terapéuticos.</p>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="flex items-start space-x-3"
                      variants={itemVariants}
                    >
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Spa del Casino City Center Rosario <span className='text-sm text-gray-500 font-normal'>(2023-2024)</span></h4>
                        <p className="text-gray-600">Spa de lujo ubicado dentro del hotel 5 estrellas del casino, reconocido por su excelencia en servicios de bienestar, masajes y tratamientos premium en un entorno exclusivo.</p>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="flex items-start space-x-3"
                      variants={itemVariants}
                    >
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Spa Mudra <span className='text-sm text-gray-500 font-normal'>(2024-2025)</span></h4>
                        <p className="text-gray-600">Centro de estética y spa ubicado en 9 de Julio 195, Rosario. Especializado en bienestar integral, masajes y tratamientos estéticos con enfoque holístico.</p>
                      </div>
                    </motion.div>
                  </motion.div>
                  <motion.p variants={itemVariants}>
                    Esta experiencia en diferentes entornos me permitió
                    perfeccionar mis técnicas y desarrollar un estilo único que
                    combina lo mejor de cada tradición terapéutica.
                  </motion.p>
                  <motion.p variants={itemVariants}>
                    En 2025, decidí abrir Selah Spa para ofrecer un servicio más
                    personalizado y crear un espacio donde cada cliente se
                    sienta verdaderamente cuidado y valorado, aplicando toda la
                    experiencia adquirida en estos prestigiosos centros.
                  </motion.p>
                </motion.div>
              </motion.div>
              <motion.div 
                className="bg-gradient-to-br from-spa-50 to-earth-50 rounded-2xl p-8"
                variants={slideInRight}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3 
                  className="text-2xl font-bold text-gray-800 mb-6"
                  variants={fadeInUp}
                >
                  ¿Por qué elegir mis servicios?
                </motion.h3>
                <motion.div 
                  className="space-y-4"
                  variants={containerVariants}
                >
                  <motion.div 
                    className="flex items-start space-x-3"
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Atención Personalizada
                      </h4>
                      <p className="text-gray-600">
                        Cada sesión se adapta a tus necesidades específicas
                      </p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-start space-x-3"
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Técnicas Profesionales
                      </h4>
                      <p className="text-gray-600">
                        Utilizo métodos certificados y probados
                      </p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-start space-x-3"
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Ambiente Relajante
                      </h4>
                      <p className="text-gray-600">
                        Espacio diseñado para tu máxima comodidad
                      </p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-start space-x-3"
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Compromiso con la Calidad
                      </h4>
                      <p className="text-gray-600">
                        Tu satisfacción es mi prioridad
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Certificaciones */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex justify-center">
                <motion.h2 
                  className="text-4xl font-bold text-gray-800 mb-4 flex items-center gap-3"
                  variants={fadeInUp}
                >
                  <Award className="w-8 h-8 text-primary" />
                  Certificaciones y Formación
                </motion.h2>
              </div>
              <motion.p 
                className="text-xl text-gray-600 max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                Mi formación continua me permite ofrecerte los mejores
                tratamientos con las técnicas más actualizadas
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {certificaciones.map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center"
                  variants={cardHover}
                  whileHover="hover"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary"
                    variants={iconHover}
                    whileHover="hover"
                  >
                    {cert.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{cert.institution}</p>
                  <span className="text-sm text-primary font-semibold">
                    {cert.year}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Estadísticas */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex justify-center">
                <motion.h2 
                  className="text-4xl font-bold mb-4 flex items-center gap-3"
                  variants={fadeInUp}
                >
                  <Star className="w-8 h-8 text-white" />
                  Mi Trayectoria
                </motion.h2>
              </div>
              <motion.p 
                className="text-xl opacity-90"
                variants={fadeInUp}
              >
                Números que respaldan mi compromiso con tu bienestar
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {estadisticas.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                    variants={iconHover}
                    whileHover="hover"
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div 
                    className="text-4xl font-bold mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Galería */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex justify-center">
                <motion.h2 
                  className="text-4xl font-bold text-gray-800 mb-4 flex items-center gap-3"
                  variants={fadeInUp}
                >
                  <FaSpa className="w-8 h-8 text-primary" />
                  Mi Espacio
                </motion.h2>
              </div>
              <motion.p 
                className="text-xl text-gray-600 max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                Un ambiente diseñado para tu máxima relajación y comodidad
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div 
                className="bg-gradient-to-br from-spa-50 to-earth-50 rounded-2xl p-8 text-center"
                variants={cardHover}
                whileHover="hover"
              >
                <motion.div 
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  variants={iconHover}
                  whileHover="hover"
                >
                  <FaSpa className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Ambiente Relajante
                </h3>
                <p className="text-gray-600">
                  Espacio tranquilo con música suave y aromas relajantes para
                  crear la atmósfera perfecta
                </p>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-spa-50 to-earth-50 rounded-2xl p-8 text-center"
                variants={cardHover}
                whileHover="hover"
              >
                <motion.div 
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  variants={iconHover}
                  whileHover="hover"
                >
                  <Heart className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Equipamiento Profesional
                </h3>
                <p className="text-gray-600">
                  Camilla ergonómica y productos de alta calidad para garantizar
                  tu comodidad
                </p>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-spa-50 to-earth-50 rounded-2xl p-8 text-center"
                variants={cardHover}
                whileHover="hover"
              >
                <motion.div 
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  variants={iconHover}
                  whileHover="hover"
                >
                  <Sparkles className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Atención Personalizada
                </h3>
                <p className="text-gray-600">
                  Cada detalle está pensado para que tengas una experiencia
                  única y memorable
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2 
                className="text-4xl font-bold mb-6"
                variants={fadeInUp}
              >
                ¿Listo para tu experiencia de bienestar?
              </motion.h2>
              <motion.p 
                className="text-xl mb-8 max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                Agenda tu cita y descubre por qué tantos clientes confían en mis
                servicios
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                variants={containerVariants}
              >
                <motion.a
                  href="https://wa.me/5493416086817?text=Hola%20Cecilia,%20me%20interesa%20agendar%20un%20turno%20para%20masajes.%20¿Podrías%20contarme%20sobre%20tus%20servicios?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp className="w-6 h-6" />
                  <span>Reservar por WhatsApp</span>
                </motion.a>

                <motion.a
                  href="/servicios"
                  className="inline-flex items-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Ver Servicios</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
