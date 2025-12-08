import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to start your solar journey? Have questions about battery backup? 
            Contact us for a free consultation and quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <div className="flex items-start gap-4">
                    <div className="bg-solar-100 p-3 rounded-full">
                        <Phone className="w-6 h-6 text-solar-600" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">Call Us</h3>
                        <p className="text-slate-600">036 004 0013</p>
                        <p className="text-slate-400 text-sm mt-1">Mon-Fri 8am-5pm</p>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 p-3 rounded-full">
                        <Mail className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">Email Us</h3>
                        <p className="text-slate-600">info@caltecsolar.co.za</p>
                        <p className="text-slate-400 text-sm mt-1">We reply within 24 hours</p>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                        <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">Visit Us</h3>
                        <p className="text-slate-600">35 Enkeldoring St</p>
                        <p className="text-slate-600">Randpark Ridge, Randburg</p>
                        <p className="text-slate-600">2169</p>
                    </div>
                </div>
            </div>
             
             {/* Map Placeholder */}
             <div className="bg-slate-200 h-64 rounded-2xl overflow-hidden relative">
                 <img 
                    src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=3131&auto=format&fit=crop" 
                    alt="Map Background" 
                    className="w-full h-full object-cover opacity-50 grayscale"
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                     <div className="bg-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                        <MapPin className="text-red-500 w-5 h-5" />
                        <span className="font-bold text-slate-800">Randburg</span>
                     </div>
                 </div>
             </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                            <input 
                                type="text" 
                                id="firstName" 
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-solar-500 focus:border-solar-500 outline-none transition-all"
                                placeholder="John"
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                            <input 
                                type="text" 
                                id="lastName" 
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-solar-500 focus:border-solar-500 outline-none transition-all"
                                placeholder="Doe"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                            <input 
                                type="email" 
                                id="email" 
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-solar-500 focus:border-solar-500 outline-none transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-solar-500 focus:border-solar-500 outline-none transition-all"
                                placeholder="082 123 4567"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Interested In</label>
                        <select 
                            id="service" 
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-solar-500 focus:border-solar-500 outline-none transition-all bg-white"
                        >
                            <option>Residential Solar System</option>
                            <option>Commercial Solar System</option>
                            <option>Battery Backup Only</option>
                            <option>Maintenance & Repairs</option>
                            <option>General Inquiry</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                        <textarea 
                            id="message" 
                            rows={4} 
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-solar-500 focus:border-solar-500 outline-none transition-all"
                            placeholder="Tell us about your energy needs..."
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-solar-600 hover:bg-solar-700 text-white font-bold py-4 rounded-lg transition-colors shadow-md hover:shadow-lg"
                    >
                        Send Message
                    </button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;