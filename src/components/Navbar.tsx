'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-lg fixed w-full z-50 shadow-lg border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Image 
                src="/LOGO.png" 
                alt="Selah Logo" 
                width={56}
                height={56}
                className="object-contain drop-shadow-sm"
              />
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-800 tracking-tight">Selah</span>
              <span className="text-xs text-gray-500 block -mt-0.5 font-light italic">El descanso que tu cuerpo se merece</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#inicio" 
              className="relative text-gray-700 hover:text-primary transition-all duration-300 font-medium group"
            >
              Inicio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#servicios" 
              className="relative text-gray-700 hover:text-primary transition-all duration-300 font-medium group"
            >
              Servicios
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#faq" 
              className="relative text-gray-700 hover:text-primary transition-all duration-300 font-medium group"
            >
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#contacto" 
              className="relative text-gray-700 hover:text-primary transition-all duration-300 font-medium group"
            >
              Contacto
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="https://wa.me/5493416086817?text=Hola%20Cecilia,%20me%20interesa%20agendar%20un%20turno%20para%20masajes.%20¿Podrías%20contarme%20sobre%20tus%20servicios?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 hover:from-primary-dark hover:to-primary inline-block"
            >
              Reservar por WhatsApp
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 
              <X className="w-6 h-6 text-gray-700" /> : 
              <Menu className="w-6 h-6 text-gray-700" />
            }
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a 
                href="#inicio" 
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium py-2 px-4 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
              <a 
                href="#servicios" 
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium py-2 px-4 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </a>
              <a 
                href="#faq" 
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium py-2 px-4 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <a 
                href="#contacto" 
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium py-2 px-4 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <a 
                href="https://wa.me/5493416086817?text=Hola%20Cecilia,%20me%20interesa%20agendar%20un%20turno%20para%20masajes.%20¿Podrías%20contarme%20sobre%20tus%20servicios?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-full font-semibold shadow-lg mt-2 inline-block text-center"
              >
                Reservar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
