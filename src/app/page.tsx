'use client';

import { Mail, MapPin, Clock, Calendar } from 'lucide-react';
import { FaWhatsapp, FaQuestionCircle, FaEnvelope } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-spa-50 to-earth-50">
      <Navbar />

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-primary to-primary-light text-white py-20">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="flex justify-center mb-6 relative z-10 mt-10" variants={fadeInUp}></motion.div>
            <motion.h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight" variants={fadeInUp}>
              EL DESCANSO QUE TU <span className="text-primary-100">CUERPO</span> NECESITA
            </motion.h1>
            <motion.p className="text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto" variants={fadeInUp}>
              Soy Cecilia, masajista profesional certificada. Te ofrezco tratamientos personalizados de masajes en un ambiente cálido y relajante, diseñado especialmente para tu bienestar y descanso.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-2 justify-center" variants={containerVariants}>
              <motion.a
                href="https://wa.me/5493416086817?text=Hola%20Cecilia,%20me%20interesa%20agendar%20un%20turno%20para%20masajes.%20¿Podrías%20contarme%20sobre%20tus%20servicios?"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Reservar por WhatsApp
              </motion.a>
              <motion.a
                href="/servicios"
                className="btn-secondary inline-block text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Servicios
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Preguntas Frecuentes Generales */}
      <section id="faq" className="section-padding bg-gradient-to-r from-primary-50 to-primary-100">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16 mt-15"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3" variants={fadeInUp}>
              <FaQuestionCircle className="text-primary-600" />
              Preguntas Frecuentes
            </motion.h2>
            <motion.p className="text-xl text-gray-600" variants={fadeInUp}>
              Resolvemos las dudas más comunes sobre la experiencia en Selah Spa.
            </motion.p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="grid md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {[{
                title: '¿Qué debo traer?',
                text: 'Ropa cómoda y liviana. Te recomendamos venir con prendas que te permitan relajarte completamente durante la sesión.'
              }, {
                title: '¿Cómo es el ambiente?',
                text: 'El espacio está diseñado para que te sientas en paz, con música suave, aromas relajantes y total privacidad.'
              }, {
                title: '¿Puedo consultar antes de reservar?',
                text: 'Por supuesto, puedes escribir por WhatsApp para resolver cualquier duda antes de agendar tu turno.'
              }, {
                title: '¿Dónde están ubicados?',
                text: 'Selah Spa está en Rosario, Santa Fe. La dirección exacta se comparte al reservar tu turno.'
              }].map((faq, idx) => (
                <motion.div key={idx} className="bg-white rounded-xl p-8 shadow-lg card-hover" variants={itemVariants} whileHover="hover">
                  <h3 className="text-xl font-semibold text-primary-600 mb-4">{faq.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.text}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div className="text-center mt-12" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <motion.p className="text-lg text-gray-600 mb-6" variants={fadeInUp}>¿Tienes más preguntas?</motion.p>
              <motion.a
                href="https://wa.me/5493416086817?text=Hola%20Cecilia,%20tengo%20algunas%20preguntas%20sobre%20los%20masajes.%20¿Podrías%20ayudarme?"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Consultar por WhatsApp
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contacto directo */}
      <section id="contacto" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3" variants={fadeInUp}>
              <FaEnvelope className="text-primary-600" />
              Contáctanos
            </motion.h2>
            <motion.p className="text-xl text-gray-600" variants={fadeInUp}>
              Estamos aquí para ayudarte a encontrar tu momento de paz y relajación.
            </motion.p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <FaWhatsapp className="w-6 h-6 text-spa-600" />
                  <div>
                    <p className="font-semibold text-gray-800">WhatsApp</p>
                    <p className="text-gray-600">+54 9 341 608-6817</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-spa-600" />
                  <div>
                    <p className="font-semibold text-gray-800">Masajista</p>
                    <p className="text-gray-600">Cecilia - Profesional certificada</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-spa-600" />
                  <div>
                    <p className="font-semibold text-gray-800">Ubicación</p>
                    <p className="text-gray-600">Rosario, Santa Fe, Argentina</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">Envíanos un Mensaje</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spa-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spa-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spa-500 focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">Enviar Mensaje</button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Horarios de Trabajo */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3" variants={fadeInUp}>
              <Clock className="w-8 h-8 text-primary" />
              Horarios de Atención
            </motion.h2>
            <motion.p className="text-xl text-gray-600 max-w-2xl mx-auto" variants={fadeInUp}>
              Agenda tu cita en los horarios que mejor se adapten a tu rutina
            </motion.p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Lunes a Viernes */}
              <motion.div
                className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-primary"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-gray-800">Lunes a Viernes</h3>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {['9:00', '10:00', '11:00', '12:00', '15:00', '16:00', '17:00', '18:00'].map((time, idx) => (
                    <motion.div
                      key={idx}
                      className="bg-primary/10 text-primary font-semibold py-3 px-4 rounded-lg text-center hover:bg-primary/20 transition-colors duration-200"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      {time}
                    </motion.div>
                  ))}
                </div>
                <p className="text-gray-600 mt-4 text-sm italic">
                  Turnos de 60 minutos disponibles
                </p>
              </motion.div>

              {/* Sábados */}
              <motion.div
                className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-8 h-8 text-green-500" />
                  <h3 className="text-2xl font-bold text-gray-800">Sábados</h3>
                </div>
                <div className="grid grid-cols-3 gap-3 justify-items-center">
                  {['9:00', '10:00', '11:00', '12:00', '13:00'].map((time, idx) => (
                    <motion.div
                      key={idx}
                      className="bg-green-500/10 text-green-600 font-semibold py-3 px-4 rounded-lg text-center hover:bg-green-500/20 transition-colors duration-200 w-full max-w-[120px]"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      {time}
                    </motion.div>
                  ))}
                </div>
                <p className="text-gray-600 mt-4 text-sm italic">
                  Turnos de 60 minutos disponibles
                </p>
              </motion.div>
            </div>

            <motion.div
              className="text-center mt-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.p className="text-lg text-gray-600 mb-6" variants={fadeInUp}>
                ¿Necesitas un horario especial? ¡Consúltanos!
              </motion.p>
              <motion.a
                href="https://wa.me/5493416086817?text=Hola%20Cecilia,%20me%20interesa%20agendar%20un%20turno.%20¿Podrías%20contarme%20sobre%20los%20horarios%20disponibles?"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Consultar Disponibilidad
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
