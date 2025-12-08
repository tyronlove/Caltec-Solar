import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Zap } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <img 
                src="https://media.licdn.com/dms/image/v2/C4D0BAQG5-5e8RGQdzw/company-logo_200_200/company-logo_200_200/0/1661016808088/caltec_solar_logo?e=1766620800&v=beta&t=orPJjnfhAiw_HmDZ-z8AZ2a-W7KhOt0p7RUrTj7kd28" 
                alt="Caltec Solar Logo" 
                className="h-12 w-12 rounded-full object-cover border-2 border-solar-500"
              />
              <div>
                <span className="block text-2xl font-bold text-slate-900 leading-none">Caltec</span>
                <span className="block text-sm font-semibold text-solar-600 tracking-wider">SOLAR</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-solar-600 bg-solar-50'
                    : 'text-slate-600 hover:text-solar-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-solar-500 hover:bg-solar-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <Zap className="w-4 h-4" />
              Get a Quote
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'text-solar-600 bg-solar-50'
                    : 'text-slate-600 hover:text-solar-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
             <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-4 bg-solar-500 text-white px-4 py-3 rounded-lg font-bold"
              >
                Get a Quote
              </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;