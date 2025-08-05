'use client';

import { Mail, MapPin, Clock, Flower2, Sparkles, Heart } from 'lucide-react';
import { FaWhatsapp, FaUserMd, FaSpa, FaQuestionCircle, FaEnvelope } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {

  const services = [
    {
      name: "Relajantes",
      description: "Técnica suave que alivia el estrés y la tensión muscular, ideal para desconectar",
      duration: "60 min",
      icon: <Flower2 className="w-8 h-8" />
    },
    {
      name: "Descontracturantes",
      description: "Tratamiento profundo para aliviar contracturas y dolores musculares",
      duration: "60-90 min",
      icon: <Heart className="w-8 h-8" />
    },
    {
      name: "Reductores",
      description: "Técnica especializada para mejorar la circulación y reducir medidas",
      duration: "60 min",
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      name: "Drenaje Linfático Manual",
      description: "Técnica terapéutica que estimula el sistema linfático y reduce la retención de líquidos",
      duration: "60 min",
      icon: <Flower2 className="w-8 h-8" />
    },
    {
      name: "Facial",
      description: "Tratamiento relajante y rejuvenecedor para el rostro y cuello",
      duration: "45 min",
      icon: <Heart className="w-8 h-8" />
    },
    {
      name: "Maternal",
      description: "Masaje especializado para futuras mamás, alivia molestias del embarazo",
      duration: "60 min",
      icon: <Sparkles className="w-8 h-8" />
    }
  ];

  const upcomingServices = [
    {
      name: "Maderoterapia",
      description: "Próximamente: Técnica con elementos de madera para modelar y tonificar",
      status: "Próximamente"
    },
    {
      name: "Piedras Calientes",
      description: "Próximamente: Relajación profunda con piedras volcánicas calientes",
      status: "Próximamente"
    }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-spa-50 to-earth-50">
      <Navbar />

      {/* Hero Section */}
      <section id="inicio" className="pt-20 pb-1 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8 leading-tight mt-10">
              EL DESCANSO QUE TU <span className="text-primary-600">CUERPO</span> SE <span className="text-primary-600">MERECE</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Soy Cecilia, masajista profesional certificada. Te ofrezco tratamientos personalizados de masajes 
              en un ambiente cálido y relajante, diseñado especialmente para tu bienestar y descanso.
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
              <a href="#servicios" className="btn-secondary inline-block text-center">
                Ver Servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Cecilia Section */}
      <section className="pt-8 pb-12 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                <div className="w-24 h-24 bg-primary-200 rounded-full flex items-center justify-center">
                  <Heart className="w-12 h-12 text-primary-600" />
                </div>
              </div>
              <h3 className="text-4xl font-semibold text-gray-800 mb-6 flex items-center justify-center gap-3">
                <FaUserMd className="text-primary-600" />
                Masajista Profesional Certificada
              </h3>
              <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
                <h4 className="text-lg font-semibold text-primary-600 mb-2">Formación Profesional</h4>
                <p className="text-gray-700 mb-1">Título de Masajista Profesional</p>
                <p className="text-gray-600 text-sm">Instituto Isem</p>
              </div>
              <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
                <h4 className="text-lg font-semibold text-primary-600 mb-3">Mi Filosofía de Trabajo</h4>
                <p className="text-lg text-gray-600 leading-relaxed italic">
                  &ldquo;Llevar descanso desde que el paciente entra hasta que sale del gabinete. 
                  Que en el lugar se sienta plena comodidad y brindar lo mejor de mis conocimientos 
                  para que la persona pueda llevarse lo mejor del masaje.&rdquo;
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <Sparkles className="w-10 h-10 text-primary-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">3 Años de Experiencia</h4>
                  <p className="text-sm text-gray-600">Especializada en masoterapia profesional</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <Heart className="w-10 h-10 text-primary-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">Tratamientos Personalizados</h4>
                  <p className="text-sm text-gray-600">Adaptados a las necesidades de cada cliente</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <Flower2 className="w-10 h-10 text-primary-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">Ambiente de Bienestar</h4>
                  <p className="text-sm text-gray-600">Espacio diseñado para tu máxima comodidad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
              <FaSpa className="text-primary-600" />
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experimenta nuestros tratamientos de masajes diseñados para restaurar tu bienestar físico y mental.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-spa-50 to-earth-50 rounded-xl p-8 card-hover">
                <div className="text-spa-600 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm text-gray-500">{service.duration}</span>
                </div>
                <a 
                  href={`https://wa.me/5493416086817?text=Hola%20Cecilia,%20me%20interesa%20agendar%20un%20turno%20para%20${service.name}.%20¿Podrías%20contarme%20más%20detalles?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full inline-block text-center"
                >
                  Reservar por WhatsApp
                </a>
              </div>
            ))}
          </div>
          
          {/* Upcoming Services */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Próximamente</h3>
              <p className="text-xl text-gray-600">Nuevos servicios que estarán disponibles pronto</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {upcomingServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center border-2 border-dashed border-primary-200">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                    <Sparkles className="w-8 h-8 text-primary-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">{service.name}</h4>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                    {service.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-gradient-to-r from-primary-50 to-primary-100">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
              <FaQuestionCircle className="text-primary-600" />
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600">Resolvemos las dudas más comunes sobre nuestros servicios de masajes.</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
                <h3 className="text-xl font-semibold text-primary-600 mb-4">¿Cuánto dura cada sesión?</h3>
                <p className="text-gray-600 leading-relaxed">
                  La sesión varía según el masaje a realizar. Puede ser cuerpo completo o solo una zona específica según tus necesidades.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
                <h3 className="text-xl font-semibold text-primary-600 mb-4">¿Qué debo traer?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ropa cómoda y liviana. Te recomendamos venir con prendas que te permitan relajarte completamente durante la sesión.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
                <h3 className="text-xl font-semibold text-primary-600 mb-4">¿Cómo me preparo para el masaje?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ya sea la primera sesión o no, se recomienda haber comido liviano o 2 horas antes del masaje para que el cuerpo se encuentre apto para recibir la sesión.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
                <h3 className="text-xl font-semibold text-primary-600 mb-4">¿Cada cuánto se recomienda?</h3>
                <p className="text-gray-600 leading-relaxed">
                  El masaje se recomienda 1 vez por semana o cada 15 días, dependiendo de tus necesidades específicas y el tipo de tratamiento.
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

      {/* Contact Section */}
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
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-spa-600" />
                  <div>
                    <p className="font-semibold text-gray-800">Horarios</p>
                    <p className="text-gray-600">Lun-Vie: 9, 10, 11, 12 AM - 15, 16, 17, 18 PM</p>
                    <p className="text-gray-600">Sábados: 9, 10, 11, 12 AM - 13 PM</p>
                    <p className="text-gray-600 text-sm mt-1">Turnos por WhatsApp</p>
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
