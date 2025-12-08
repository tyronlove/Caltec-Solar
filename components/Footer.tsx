import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
               <img 
                src="https://media.licdn.com/dms/image/v2/C4D0BAQG5-5e8RGQdzw/company-logo_200_200/company-logo_200_200/0/1661016808088/caltec_solar_logo?e=1766620800&v=beta&t=orPJjnfhAiw_HmDZ-z8AZ2a-W7KhOt0p7RUrTj7kd28" 
                alt="Caltec Solar" 
                className="h-10 w-10 rounded-full border border-slate-600"
              />
              <span className="text-xl font-bold">Caltec Solar</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering South African homes and businesses to break free from the energy status quo. Clean, reliable, and efficient solar solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-solar-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-solar-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-solar-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-solar-500 transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-solar-500">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Residential Solar</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Commercial Solutions</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Battery Backup</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Maintenance</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Financing</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-solar-500">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-300 text-sm">
                <MapPin className="w-5 h-5 text-solar-500 shrink-0" />
                <span>35 Enkeldoring St,<br/>Randpark Ridge,<br/>Randburg, 2169</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300 text-sm">
                <Phone className="w-5 h-5 text-solar-500 shrink-0" />
                <span>036 004 0013</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300 text-sm">
                <Mail className="w-5 h-5 text-solar-500 shrink-0" />
                <span>info@caltecsolar.co.za</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-solar-500">Newsletter</h3>
            <p className="text-slate-400 text-sm mb-4">Subscribe to get the latest news on solar energy and tax incentives.</p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-solar-500 text-sm"
              />
              <button 
                type="button"
                className="w-full bg-solar-600 hover:bg-solar-500 text-white py-2 rounded-md text-sm font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Caltec Solar. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-500 text-xs">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;