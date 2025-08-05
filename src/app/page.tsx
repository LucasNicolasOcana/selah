'use client';

import { Mail, MapPin, Flower2, Sparkles, Heart } from 'lucide-react';
import { FaWhatsapp, FaSpa, FaQuestionCircle, FaEnvelope } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Home() {

  // Elimino las variables de servicios que ya no se usan


  return (
    <div className="min-h-screen bg-gradient-to-br from-spa-50 to-earth-50">
      <Navbar />

      {/* Hero Section */}
      <section id="inicio" className="pt-20 pb-1 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Image src="/LOGO.png" alt="Selah Logo" width={200} height={200} className="object-contain drop-shadow mt-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8 leading-tight">
              EL DESCANSO QUE TU <span className="text-primary-600">CUERPO</span> NECESITA
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Soy Cecilia, masajista profesional certificada. Te ofrezco tratamientos personalizados de masajes en un ambiente cálido y relajante, diseñado especialmente para tu bienestar y descanso.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <a 
                href="https://wa.me/5493416086817?text=Hola%20Cecilia,%20me%20interesa%20agendar%20un%20turno%20para%20masajes.%20¿Podrías%20contarme%20sobre%20tus%20servicios?"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block text-center"
              >
                Reservar por WhatsApp
              </a>
              <a href="/servicios" className="btn-secondary inline-block text-center">
                Ver Servicios
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Preguntas Frecuentes Generales */}
      <section id="faq" className="section-padding bg-gradient-to-r from-primary-50 to-primary-100">
        <div className="container-custom">
          <div className="text-center mb-16 mt-15">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
              <FaQuestionCircle className="text-primary-600" />
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600">Resolvemos las dudas más comunes sobre la experiencia en Selah Spa.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
                <h3 className="text-xl font-semibold text-primary-600 mb-4">¿Qué debo traer?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ropa cómoda y liviana. Te recomendamos venir con prendas que te permitan relajarte completamente durante la sesión.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
                <h3 className="text-xl font-semibold text-primary-600 mb-4">¿Cómo es el ambiente?</h3>
                <p className="text-gray-600 leading-relaxed">
                  El espacio está diseñado para que te sientas en paz, con música suave, aromas relajantes y total privacidad.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
                <h3 className="text-xl font-semibold text-primary-600 mb-4">¿Puedo consultar antes de reservar?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Por supuesto, puedes escribir por WhatsApp para resolver cualquier duda antes de agendar tu turno.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
                <h3 className="text-xl font-semibold text-primary-600 mb-4">¿Dónde están ubicados?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Selah Spa está en Rosario, Santa Fe. La dirección exacta se comparte al reservar tu turno.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">¿Tienes más preguntas?</p>
              <a 
                href="https://wa.me/5493416086817?text=Hola%20Cecilia,%20tengo%20algunas%20preguntas%20sobre%20los%20masajes.%20¿Podrías%20ayudarme?"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto directo */}
      <section id="contacto" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
              <FaEnvelope className="text-primary-600" />
              Contáctanos
            </h2>
            <p className="text-xl text-gray-600">Estamos aquí para ayudarte a encontrar tu momento de paz y relajación.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
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
            </div>
            <div>
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
