import React from 'react';
import { Target, Users, Lightbulb, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-8 pb-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">About Caltec Solar</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We are more than just a solar company. We are advocates for a sustainable, independent energy future for South Africa.
          </p>
        </div>
      </section>

      {/* Main Content with Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2916&auto=format&fit=crop" 
              alt="Solar Installation Team" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
               <div className="text-white">
                   <p className="font-bold text-lg">Professional Installation</p>
                   <p className="text-slate-200 text-sm">Our certified teams ensure safety and efficiency.</p>
               </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-solar-50 border border-solar-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-solar-700 mb-2">Our Mission</h3>
                <p className="text-slate-700">
                    We live to educate, inspire and enable South Africans to break free and be more energy efficient in their homes, businesses and communities.
                </p>
            </div>
            
            <p className="text-slate-600 leading-relaxed">
                Caltec Solar was born out of a need to change the energy status quo. With our over-reliance on fossil fuels, inconsistent power utilities and rising electricity costs, we knew a better solution was imperative.
            </p>
            <p className="text-slate-600 leading-relaxed">
                We believe that renewable energy shouldn't just be an alternative; it should be the standard. By leveraging cutting-edge technology and tailored solutions, we are helping Randburg and the greater Gauteng area move towards energy resilience.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                        <Users className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-slate-900">Expert Team</span>
                </div>
                 <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                        <Target className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-slate-900">Tailored Solutions</span>
                </div>
                 <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
                        <Lightbulb className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-slate-900">Education First</span>
                </div>
                 <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                        <Zap className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-slate-900">Reliable Power</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-900 py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-12 text-center">Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                      <h3 className="text-xl font-bold text-solar-500 mb-4">Education</h3>
                      <p className="text-slate-300">We don't just sell products; we teach our clients about energy consumption, efficiency, and how to maximize their investment.</p>
                  </div>
                   <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                      <h3 className="text-xl font-bold text-solar-500 mb-4">Innovation</h3>
                      <p className="text-slate-300">Using the latest PV technology, hybrid inverters, and lithium-ion storage to provide state-of-the-art systems.</p>
                  </div>
                   <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                      <h3 className="text-xl font-bold text-solar-500 mb-4">Integrity</h3>
                      <p className="text-slate-300">Honest advice, transparent pricing, and reliable after-sales support. We build long-term relationships.</p>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};

export default About;