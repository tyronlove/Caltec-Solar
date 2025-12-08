import React from 'react';
import { ArrowRight, Sun, Battery, ShieldCheck, Banknote, Leaf, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SolarVisualizer from '../components/SolarVisualizer';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=3264&auto=format&fit=crop" 
            alt="Solar Panels Sunset" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Break Free from the <br/>
              <span className="text-solar-500">Energy Status Quo</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              We educate, inspire, and enable South Africans to become energy independent. 
              Say goodbye to inconsistent power and rising costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-slate-900 bg-solar-500 hover:bg-solar-400 transition-all shadow-lg hover:shadow-orange-500/25"
              >
                Get a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/about" 
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-slate-600 text-base font-medium rounded-full text-white hover:bg-slate-800 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Why Choose Caltec Solar?</h2>
                <p className="mt-4 text-xl text-slate-600">The smart choice for your home and business.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        icon: <Banknote className="w-8 h-8 text-emerald-600" />,
                        title: "Reduce Costs",
                        desc: "Drastically reduce or eliminate your electricity bill. Solar is an investment that pays for itself."
                    },
                    {
                        icon: <ShieldCheck className="w-8 h-8 text-solar-600" />,
                        title: "Energy Security",
                        desc: "Protect your family and business from load shedding and grid failures with reliable battery backup."
                    },
                    {
                        icon: <Leaf className="w-8 h-8 text-emerald-600" />,
                        title: "Eco Friendly",
                        desc: "Reduce your carbon footprint. Clean energy for a sustainable future for South Africa."
                    }
                ].map((feature, idx) => (
                    <div key={idx} className="bg-slate-50 p-8 rounded-2xl hover:shadow-xl transition-shadow border border-slate-100 group">
                        <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                        <p className="text-slate-600 leading-relaxed">
                            {feature.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* AI Visualizer Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Experience the Future</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Not sure how solar panels will look on your property? Use our AI-powered tool to generate a visualization of a modern solar installation tailored to your building style.
                    </p>
                    <ul className="space-y-4 mb-8">
                        {[
                            "Visualize different roof types",
                            "See potential panel layouts",
                            "Get inspired for your renovation"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-700">
                                <div className="w-6 h-6 rounded-full bg-solar-100 flex items-center justify-center">
                                    <Sun className="w-3.5 h-3.5 text-solar-600" />
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <SolarVisualizer />
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-800 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-solar-600 rounded-full blur-3xl opacity-20"></div>
          
          <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to switch to solar?</h2>
              <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
                  Join hundreds of satisfied customers in Randburg and beyond. Get a free assessment and quote today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                   <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-900 font-bold rounded-full hover:bg-slate-100 transition-colors shadow-lg"
                  >
                    Contact Us Now
                  </Link>
                  <a 
                    href="tel:0360040013" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-emerald-400 text-white font-bold rounded-full hover:bg-emerald-800 transition-colors"
                  >
                    Call 036 004 0013
                  </a>
              </div>
          </div>
      </section>
    </div>
  );
};

export default Home;