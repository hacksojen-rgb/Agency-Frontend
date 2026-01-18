
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Quote, Megaphone, Code2, Search, PenTool, Smartphone, BarChart3, Video, Target, Zap, TrendingUp, ShieldCheck, Plus, Minus, Check } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import { CLIENT_LOGOS, TESTIMONIALS, SERVICES, PORTFOLIO } from '../constants';

const IconMap: Record<string, any> = { Megaphone, Code2, Search, PenTool, Smartphone, BarChart3, Video, Target };

const ServiceCard: React.FC<{ service: any }> = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = IconMap[service.icon] || Target;
  const initialFeatures = service.features?.slice(0, 3) || [];
  const extraFeatures = service.features?.slice(3) || [];

  return (
    <div className="group p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full">
      <div className="flex items-center space-x-6 mb-8">
        <div className="w-14 h-14 bg-[#014034]/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#014034] transition-all duration-300">
          <Icon className="text-[#014034] group-hover:text-white w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold text-[#014034] transition-colors leading-tight">{service.title}</h3>
      </div>
      <div className="flex-grow">
        <ul className="space-y-3 mb-6">
          {initialFeatures.map((f: string, i: number) => (
            <li key={i} className="flex items-start space-x-3 text-gray-600">
              <Check className="text-[#00695c] w-4 h-4 mt-0.5" />
              <span className="text-sm font-medium">{f}</span>
            </li>
          ))}
          {isExpanded && extraFeatures.map((f: string, i: number) => (
            <li key={i} className="flex items-start space-x-3 text-gray-600">
              <Check className="text-[#00695c] w-4 h-4 mt-0.5" />
              <span className="text-sm font-medium">{f}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto space-y-6">
        {service.features && service.features.length > 3 && (
          <button onClick={() => setIsExpanded(!isExpanded)} className="flex items-center space-x-2 text-xs font-bold text-[#00695c] uppercase tracking-widest hover:text-[#014034]">
            <span>{isExpanded ? 'Show Less' : 'Show All Features'}</span>
            {isExpanded ? <Minus size={14} /> : <Plus size={14} />}
          </button>
        )}
        <div className="pt-6 border-t border-gray-100">
          <Link to="/get-quote" className="inline-flex items-center text-[#00695c] font-bold text-base hover:gap-3 transition-all">
            Book Service <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden">
      <HeroSlider />

      <section className="py-20 bg-white border-b border-gray-100 overflow-hidden">
        <div className="container mx-auto px-6 mb-12">
          <p className="text-center text-gray-400 font-bold uppercase tracking-[0.2em] text-xs">Trusted by Growing Businesses Worldwide</p>
        </div>
        <div className="relative flex whitespace-nowrap overflow-hidden">
          <div className="flex animate-marquee items-center space-x-24 md:space-x-32 py-4">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
              <img key={idx} src={logo} alt="Client" className="h-8 md:h-12 w-auto opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all shrink-0" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#00695c] font-bold text-sm uppercase tracking-widest mb-4 block">Our Solutions</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#014034] mb-6">Engineered for Business Outcomes</h2>
            <p className="text-gray-600 text-xl leading-relaxed">We focus on metrics that matter. Tangible growth over vanity metrics.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s) => <ServiceCard key={s.id} service={s} />)}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1470" alt="Meeting" className="rounded-[3rem] shadow-2xl z-10 relative" />
              <div className="absolute -bottom-8 -right-8 bg-[#014034] p-10 rounded-3xl text-white shadow-xl z-20 hidden md:block border-4 border-white">
                <div className="flex items-center space-x-4">
                  <TrendingUp className="text-[#4DB6AC]" size={40} />
                  <div>
                    <h4 className="text-3xl font-bold">140%</h4>
                    <p className="text-teal-100 text-sm">Average Growth Increase</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="text-[#00695c] font-bold text-sm uppercase tracking-widest mb-4 block">The Build to Grow Advantage</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#014034] mb-8">Strategy-First Execution</h2>
              <div className="space-y-8">
                {[
                  { title: "Strategy-First Approach", desc: "Every pixel aligned with your bottom line.", icon: Target },
                  { title: "Everything Under One Roof", desc: "Unified design, dev, and growth team.", icon: Zap },
                  { title: "Business Results Over Vanity", desc: "Leds and sales over likes and clicks.", icon: TrendingUp }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-5">
                    <div className="bg-[#014034]/5 p-2 rounded-lg text-[#014034]"><item.icon size={24} /></div>
                    <div><h4 className="text-xl font-bold text-[#014034]">{item.title}</h4><p className="text-gray-600">{item.desc}</p></div>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <Link to="/get-quote" className="bg-[#014034] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#00332a] transition-all inline-flex items-center shadow-lg group">
                  Get Your Free Growth Plan <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6 mb-16 text-center">
          <h2 className="text-4xl font-extrabold text-[#014034]">Real Results for Ambitious Brands</h2>
        </div>
        <div className="relative flex whitespace-nowrap">
          <div className="flex animate-marquee-slow space-x-8 px-8">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
              <div key={idx} className="inline-block w-[450px] whitespace-normal p-12 bg-white rounded-[2.5rem] shadow-sm border border-gray-100 shrink-0">
                <Quote className="text-[#014034]/5 absolute top-10 right-10" size={60} />
                <p className="text-gray-600 mb-10 italic text-xl min-h-[120px]">"{t.content}"</p>
                <div className="flex items-center space-x-5">
                  <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full" />
                  <div><h4 className="font-bold text-[#014034] text-lg">{t.name}</h4><p className="text-sm text-[#00695c] font-bold uppercase">{t.role}, {t.company}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end">
          <div><span className="text-[#00695c] font-bold text-sm uppercase mb-4 block">Case Studies</span><h2 className="text-4xl font-extrabold text-[#014034]">Featured Success Stories</h2></div>
          <Link to="/portfolio" className="text-[#00695c] font-bold hover:underline flex items-center">View All Work <ArrowRight className="ml-2 w-4 h-4" /></Link>
        </div>
        <div className="relative flex whitespace-nowrap overflow-hidden py-10">
          <div className="flex animate-marquee space-x-12 px-12">
            {[...PORTFOLIO, ...PORTFOLIO].map((p, idx) => (
              <div key={idx} onClick={() => navigate(`/portfolio/${p.id}`)} className="group relative inline-block w-[400px] aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-lg cursor-pointer shrink-0">
                <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#014034] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                  <span className="text-[#4DB6AC] font-bold text-xs uppercase mb-2">{p.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-gray-200 text-sm">Client: {p.client}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="deep-green-gradient rounded-[4rem] p-12 md:p-24 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8">Ready to Grow Your Business?</h2>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/get-quote" className="bg-white text-[#014034] px-12 py-5 rounded-2xl font-extrabold text-xl shadow-xl hover:scale-105 transition-all">Get a Free Growth Plan</Link>
                <Link to="/contact" className="border-2 border-white/40 text-white px-12 py-5 rounded-2xl font-extrabold text-xl hover:bg-white/10 transition-all">Book a Consultation</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
