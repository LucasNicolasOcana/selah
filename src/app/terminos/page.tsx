'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText, Calendar, Clock, Heart, Shield, CreditCard, Phone } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12 mt-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
            <FileText className="w-8 h-8 text-primary-600" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Términos y Condiciones</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conoce nuestras políticas y condiciones para garantizar una experiencia de bienestar excepcional.
          </p>
          <div className="mt-6 inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
            <Calendar className="w-4 h-4 text-blue-600" />
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
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    1. Reservas y Cancelaciones
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Las citas pueden reservarse a través de nuestro sitio web, WhatsApp o por teléfono. 
                    Se requiere un aviso de al menos 24 horas para cancelaciones o reprogramaciones sin cargo.
                  </p>
                </div>
              </div>
            </section>

            <section className="group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                    2. Llegada Tardía
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    La sesión finalizará a la hora programada para respetar las citas posteriores. 
                    Los retrasos superiores a 15 minutos podrían resultar en la cancelación de la cita.
                  </p>
                </div>
              </div>
            </section>

            <section className="group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                    3. Política de Salud
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Los clientes deben informar sobre cualquier condición médica, lesión o alergia antes del servicio. 
                    Selah Spa se reserva el derecho de denegar el servicio por razones de salud o seguridad.
                  </p>
                </div>
              </div>
            </section>

            <section className="group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                    4. Comportamiento Apropiado
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Selah Spa es un espacio de bienestar profesional. Cualquier comportamiento inapropiado resultará 
                    en la terminación inmediata de la sesión sin reembolso.
                  </p>
                </div>
              </div>
            </section>

            <section className="group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-300">
                  <CreditCard className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                    5. Pagos
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Se aceptan efectivo y transferencias bancarias. Los paquetes y promociones no son reembolsables 
                    y deben usarse dentro del período establecido.
                  </p>
                </div>
              </div>
            </section>

            <section className="group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                    6. Contacto
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    Para cualquier consulta sobre estos términos, contáctenos a través de:
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
