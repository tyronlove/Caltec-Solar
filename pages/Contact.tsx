import React, { useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'Residential Solar System',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // SIMULATION: In a real environment, this code runs the fetch request to your PHP script.
    // For this client demo, we simulate a network delay and a success response.
    try {
      /* 
      // UNCOMMENT THIS BLOCK FOR PRODUCTION WITH PHP
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.message || 'Something went wrong');
      */

      // Simulated Delay for Demo
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: 'Residential Solar System',
        message: ''
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
    }
  };

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
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 h-full relative overflow-hidden">
                {status === 'success' ? (
                  <div className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center p-8 text-center animate-fade-in">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-600 mb-8 max-w-md">
                      Thank you for contacting Caltec Solar. One of our energy experts will review your details and get back to you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="bg-solar-600 hover:bg-solar-700 text-white font-semibold py-3 px-8 rounded-full transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
                    {status === 'error' && (
                       <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-lg flex items-start gap-3 text-red-700">
                          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                          <p className="text-sm">{errorMessage}</p>
                       </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">First Name <span className="text-red-500">*</span></label>
                                <input 
                                    type="text" 
                                    id="firstName" 
                                    required
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-solar-500 focus:border-solar-500 outline-none transition-all"
                                    placeholder="John"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                                <input 
                                    type="text" 
                                    id="lastName" 
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-solar-500 focus:border-solar-500 outline-none transition-all"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-solar-500 focus:border-solar-500 outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-solar-500 focus:border-solar-500 outline-none transition-all"
                                    placeholder="082 123 4567"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Interested In</label>
                            <select 
                                id="service" 
                                value={formData.service}
                                onChange={handleChange}
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
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message <span className="text-red-500">*</span></label>
                            <textarea 
                                id="message" 
                                rows={4} 
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-solar-500 focus:border-solar-500 outline-none transition-all"
                                placeholder="Tell us about your energy needs..."
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            disabled={status === 'submitting'}
                            className="w-full bg-solar-600 hover:bg-solar-700 disabled:bg-slate-400 text-white font-bold py-4 rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                        >
                            {status === 'submitting' ? (
                              <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Sending...
                              </>
                            ) : (
                              'Send Message'
                            )}
                        </button>
                    </form>
                  </>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;