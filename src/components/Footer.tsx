'use client';

import { MapPin, Clock, Heart } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-20">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div>
            <div className="mb-8 mt-10">
              <div className="flex items-center space-x-4 mb-4">
                <h3 className="text-4xl font-bold great-vibes-regular">Selah</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              El descanso que tu cuerpo necesita. Soy Cecilia, masajista profesional certificada, 
              especializada en tratamientos personalizados para tu bienestar y relajación.
            </p>
            <div className="flex space-x-6">
              <a 
                href="https://wa.me/5493416086817" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 p-4 rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="bg-gray-700 hover:bg-gray-600 p-4 rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="bg-gray-700 hover:bg-gray-600 p-4 rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-primary-300 mt-10">Servicios</h3>
            <ul className="space-y-4">
              <li><a href="#servicios" className="text-gray-300 hover:text-primary-300 transition-colors duration-200 text-lg">Masajes Relajantes</a></li>
              <li><a href="#servicios" className="text-gray-300 hover:text-primary-300 transition-colors duration-200 text-lg">Descontracturantes</a></li>
              <li><a href="#servicios" className="text-gray-300 hover:text-primary-300 transition-colors duration-200 text-lg">Masajes Reductores</a></li>
              <li><a href="#servicios" className="text-gray-300 hover:text-primary-300 transition-colors duration-200 text-lg">Drenaje Linfático</a></li>
              <li><a href="#servicios" className="text-gray-300 hover:text-primary-300 transition-colors duration-200 text-lg">Masaje Facial</a></li>
              <li><a href="#servicios" className="text-gray-300 hover:text-primary-300 transition-colors duration-200 text-lg">Masaje Maternal</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-primary-300 mt-10">Contacto</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FaWhatsapp className="w-6 h-6 text-primary-400 mt-1" />
                <div>
                  <p className="text-gray-300 font-medium text-lg mb-1">WhatsApp</p>
                  <a 
                    href="https://wa.me/5493416086817" 
                    className="text-primary-300 hover:text-primary-200 transition-colors duration-200 text-lg"
                  >
                    +54 9 341 608-6817
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary-400 mt-1" />
                <div>
                  <p className="text-gray-300 font-medium text-lg mb-1">Ubicación</p>
                  <p className="text-gray-400 text-lg">Rosario, Santa Fe, Argentina</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-primary-400 mt-1" />
                <div>
                  <p className="text-gray-300 font-medium text-lg mb-2">Horarios</p>
                  <p className="text-gray-400 text-base mb-1">Lun-Vie: 9-12 AM, 15-18 PM</p>
                  <p className="text-gray-400 text-base">Sáb: 9-13 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3">
              <Heart className="w-5 h-5 text-primary-400" />
              <p className="text-gray-400 text-base">
                Hecho con amor para tu bienestar
              </p>
            </div>
            <div className="flex items-center space-y-3 md:space-y-0 md:space-x-8 flex-col md:flex-row">
              <p className="text-gray-400 text-base">
                &copy; 2024 Selah. Todos los derechos reservados.
              </p>
              <div className="flex space-x-6 text-base">
                <a href="/privacidad" className="text-gray-400 hover:text-primary-300 transition-colors duration-200">Política de Privacidad</a>
                <a href="/terminos" className="text-gray-400 hover:text-primary-300 transition-colors duration-200">Términos</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
