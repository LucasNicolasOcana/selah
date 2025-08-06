'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText, Calendar, Clock, Heart, Shield, CreditCard, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TermsOfService() {
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16 max-w-4xl">
        {/* Header Section */}
        <motion.div className="text-center mb-12 mt-12" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6" variants={scaleIn}>
            <FileText className="w-8 h-8 text-primary-600" />
          </motion.div>
          <motion.h1 className="text-4xl font-bold mb-4 text-gray-800" variants={fadeInUp}>
            Términos y Condiciones
          </motion.h1>
          <motion.p className="text-lg text-gray-600 max-w-2xl mx-auto" variants={fadeInUp}>
            Conoce nuestras políticas y condiciones para garantizar una experiencia de bienestar excepcional.
          </motion.p>
          <motion.div className="mt-6 inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full" variants={itemVariants}>
            <Calendar className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-700 font-medium">
              Última actualización: 5 de agosto de 2024
            </span>
          </motion.div>
        </motion.div>
        <motion.div className="bg-white rounded-2xl shadow-xl overflow-hidden" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {/* Content Sections */}
          <motion.div className="p-8 space-y-12" variants={containerVariants}>
            {[
              {
                icon: <Calendar className="w-6 h-6 text-blue-600" />,
                iconBg: 'bg-blue-100 group-hover:bg-blue-200',
                title: '1. Reservas y Cancelaciones',
                titleColor: 'text-gray-800 group-hover:text-blue-600',
                text: 'Las citas pueden reservarse a través de nuestro sitio web, WhatsApp o por teléfono. Se requiere un aviso de al menos 24 horas para cancelaciones o reprogramaciones sin cargo.'
              },
              {
                icon: <Clock className="w-6 h-6 text-orange-600" />,
                iconBg: 'bg-orange-100 group-hover:bg-orange-200',
                title: '2. Llegada Tardía',
                titleColor: 'text-gray-800 group-hover:text-orange-600',
                text: 'La sesión finalizará a la hora programada para respetar las citas posteriores. Los retrasos superiores a 15 minutos podrían resultar en la cancelación de la cita.'
              },
              {
                icon: <Heart className="w-6 h-6 text-green-600" />,
                iconBg: 'bg-green-100 group-hover:bg-green-200',
                title: '3. Política de Salud',
                titleColor: 'text-gray-800 group-hover:text-green-600',
                text: 'Los clientes deben informar sobre cualquier condición médica, lesión o alergia antes del servicio. Selah Spa se reserva el derecho de denegar el servicio por razones de salud o seguridad.'
              },
              {
                icon: <Shield className="w-6 h-6 text-purple-600" />,
                iconBg: 'bg-purple-100 group-hover:bg-purple-200',
                title: '4. Comportamiento Apropiado',
                titleColor: 'text-gray-800 group-hover:text-purple-600',
                text: 'Selah Spa es un espacio de bienestar profesional. Cualquier comportamiento inapropiado resultará en la terminación inmediata de la sesión sin reembolso.'
              },
              {
                icon: <CreditCard className="w-6 h-6 text-indigo-600" />,
                iconBg: 'bg-indigo-100 group-hover:bg-indigo-200',
                title: '5. Pagos',
                titleColor: 'text-gray-800 group-hover:text-indigo-600',
                text: 'Se aceptan efectivo y transferencias bancarias. Los paquetes y promociones no son reembolsables y deben usarse dentro del período establecido.'
              },
              {
                icon: <Phone className="w-6 h-6 text-red-600" />,
                iconBg: 'bg-red-100 group-hover:bg-red-200',
                title: '6. Contacto',
                titleColor: 'text-gray-800 group-hover:text-red-600',
                text: 'Para cualquier consulta sobre estos términos, contáctenos a través de:',
                isContact: true
              }
            ].map((section, idx) => (
              <motion.section className="group" key={idx} variants={itemVariants}>
                <div className="flex items-start space-x-4">
                  <motion.div className={`flex-shrink-0 w-12 h-12 ${section.iconBg} rounded-lg flex items-center justify-center`} variants={scaleIn} whileHover="hover">
                    {section.icon}
                  </motion.div>
                  <div className="flex-1">
                    <motion.h2 className={`text-2xl font-semibold mb-4 ${section.titleColor} transition-colors duration-300`} variants={fadeInUp}>
                      {section.title}
                    </motion.h2>
                    <motion.p className="text-gray-700 leading-relaxed text-lg" variants={fadeInUp}>
                      {section.text}
                    </motion.p>
                    {section.isContact && (
                      <motion.div className="flex items-center space-x-4 mt-4" variants={itemVariants}>
                        <a 
                          href="https://wa.me/5493416086817" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                        >
                          <Phone className="w-4 h-4" />
                          <span>WhatsApp: +54 9 341 608-6817</span>
                        </a>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.section>
            ))}
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
