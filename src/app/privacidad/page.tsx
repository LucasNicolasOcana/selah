'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Eye, UserCheck, Lock, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
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
            <Shield className="w-8 h-8 text-primary-600" />
          </motion.div>
          <motion.h1 className="text-4xl font-bold mb-4 text-gray-800" variants={fadeInUp}>
            Política de Privacidad
          </motion.h1>
          <motion.p className="text-lg text-gray-600 max-w-2xl mx-auto" variants={fadeInUp}>
            Tu privacidad es importante para nosotros. Conoce cómo protegemos y utilizamos tu información personal.
          </motion.p>
          <motion.div className="mt-6 inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full" variants={itemVariants}>
            <Eye className="w-4 h-4 text-blue-600" />
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
                icon: <UserCheck className="w-6 h-6 text-blue-600" />,
                iconBg: 'bg-blue-100 group-hover:bg-blue-200',
                title: '1. Información que Recopilamos',
                titleColor: 'text-gray-800 group-hover:text-blue-600',
                text: 'En Selah Spa, recopilamos información personal como nombre, correo electrónico, teléfono, preferencias de servicios y datos de salud relevantes para la prestación de nuestros servicios de masajes.'
              },
              {
                icon: <Eye className="w-6 h-6 text-green-600" />,
                iconBg: 'bg-green-100 group-hover:bg-green-200',
                title: '2. Uso de la Información',
                titleColor: 'text-gray-800 group-hover:text-green-600',
                text: 'Utilizamos su información para gestionar citas, proporcionar servicios personalizados, mejorar la experiencia del cliente y cumplir con obligaciones legales.'
              },
              {
                icon: <Lock className="w-6 h-6 text-purple-600" />,
                iconBg: 'bg-purple-100 group-hover:bg-purple-200',
                title: '3. Protección de Datos',
                titleColor: 'text-gray-800 group-hover:text-purple-600',
                text: 'Implementamos medidas de seguridad para proteger su información personal contra acceso no autorizado o divulgación.'
              },
              {
                icon: <Shield className="w-6 h-6 text-orange-600" />,
                iconBg: 'bg-orange-100 group-hover:bg-orange-200',
                title: '4. Sus Derechos',
                titleColor: 'text-gray-800 group-hover:text-orange-600',
                text: 'Usted tiene derecho a acceder, corregir o eliminar su información personal en cualquier momento. Contáctenos para ejercer estos derechos.'
              },
              {
                icon: <Mail className="w-6 h-6 text-red-600" />,
                iconBg: 'bg-red-100 group-hover:bg-red-200',
                title: '5. Contacto',
                titleColor: 'text-gray-800 group-hover:text-red-600',
                text: 'Para preguntas sobre esta política de privacidad, contáctenos a través de:',
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
