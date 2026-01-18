
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import * as LucideIcons from 'lucide-react';
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = (LucideIcons as any)[service.icon] || LucideIcons.Target;
  
  const initialCount = 6;
  const features = service.features || [];
  const visibleFeatures = isExpanded ? features : features.slice(0, initialCount);
  const hasMore = features.length > initialCount;

  return (
    <div className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-500 group">
      <div className="w-20 h-20 bg-[#014034] text-white rounded-[2rem] flex items-center justify-center shrink-0 shadow-xl group-hover:scale-110 transition-transform mb-8">
        <Icon size={40} />
      </div>
      <div className="flex-grow">
        <h3 className="text-3xl font-bold text-[#014034] mb-6">{service.title}</h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.description}</p>
        <div className="grid grid-cols-1 gap-y-4 mb-8">
          {visibleFeatures.map((f, i) => (
            <div key={i} className="flex items-start text-[#014034] font-semibold text-sm">
              <CheckCircle2 className="text-[#4DB6AC] mr-2 mt-0.5 shrink-0" size={18} />
              <span className="leading-tight">{f}</span>
            </div>
          ))}
        </div>
        {hasMore && (
          <button onClick={() => setIsExpanded(!isExpanded)} className="flex items-center space-x-2 text-[#00695c] font-bold text-sm mb-10 hover:text-[#014034]">
            <span>{isExpanded ? 'Show Less' : `View All ${features.length} Features`}</span>
            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        )}
        <div className="pt-6 border-t border-gray-100">
          <Link to="/get-quote" className="inline-flex items-center bg-[#014034] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#00332a] transition-all">
            Discuss This Service <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#00695c] font-bold text-sm uppercase tracking-widest mb-4 block">Engineered for Results</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#014034] mb-8 leading-tight">Our Growth Ecosystem</h1>
          <p className="text-xl text-gray-600 leading-relaxed">Systems over services. Every offering removes bottlenecks and accelerates growth.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {SERVICES.map((s) => <ServiceCard key={s.id} service={s} />)}
        </div>
        <div className="mt-24 bg-gray-50 p-12 md:p-20 rounded-[4rem] text-center border border-gray-100">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#014034] mb-6">Need a custom growth bundle?</h2>
          <Link to="/get-quote" className="bg-[#00695c] text-white px-12 py-5 rounded-2xl font-extrabold text-xl hover:bg-[#014034] transition-all shadow-xl inline-flex items-center">
            Start Your Custom Project <ArrowRight className="ml-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
