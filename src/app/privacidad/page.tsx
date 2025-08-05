'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Eye, UserCheck, Lock, Mail, Phone } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12 mt-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
            <Shield className="w-8 h-8 text-primary-600" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Política de Privacidad</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tu privacidad es importante para nosotros. Conoce cómo protegemos y utilizamos tu información personal.
          </p>
          <div className="mt-6 inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
            <Eye className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-700 font-medium">
              Última actualización: 5 de agosto de 2024
            </span>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Content Sections */}
          <div className="p-8 space-y-12">
            
            <section className="group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                  <UserCheck className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    1. Información que Recopilamos
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    En Selah Spa, recopilamos información personal como nombre, correo electrónico, teléfono, 
                    preferencias de servicios y datos de salud relevantes para la prestación de nuestros servicios de masajes.
                  </p>
                </div>
              </div>
            </section>

            <section className="group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                    2. Uso de la Información
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Utilizamos su información para gestionar citas, proporcionar servicios personalizados, 
                    mejorar la experiencia del cliente y cumplir con obligaciones legales.
                  </p>
                </div>
              </div>
            </section>

            <section className="group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                  <Lock className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                    3. Protección de Datos
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Implementamos medidas de seguridad para proteger su información personal contra acceso no autorizado o divulgación.
                  </p>
                </div>
              </div>
            </section>

            <section className="group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                    4. Sus Derechos
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Usted tiene derecho a acceder, corregir o eliminar su información personal en cualquier momento. 
                    Contáctenos para ejercer estos derechos.
                  </p>
                </div>
              </div>
            </section>

            <section className="group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                    5. Contacto
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    Para preguntas sobre esta política de privacidad, contáctenos a través de:
                  </p>
                  <div className="flex items-center space-x-4">
                    <a 
                      href="https://wa.me/5493416086817" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                    >
                      <Phone className="w-4 h-4" />
                      <span>WhatsApp: +54 9 341 608-6817</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
