import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE } from '../constants'; // API_BASE ইমপোর্ট করা হয়েছে
import { PortfolioProject } from '../types';

const Portfolio: React.FC = () => {
  const navigate = useNavigate();
  const [portfolio, setPortfolio] = useState<PortfolioProject[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/get-portfolio.php`) // ডাটাবেস থেকে পোর্টফোলিও ফেচ করা
      .then(res => res.json())
      .then(data => {
        setPortfolio(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  const categories = ['All', ...new Set(portfolio.map(p => p.category))];

  const filteredPortfolio = activeCategory === 'All' 
    ? portfolio 
    : portfolio.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-extrabold text-[#014034] mb-6">Our Work</h1>
          <p className="text-xl text-gray-600">Impactful projects across various industries.</p>
        </div>

        {loading ? (
          <div className="text-center py-20 text-[#014034] font-bold">Loading Portfolio...</div>
        ) : (
          <>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full font-bold transition-all ${activeCategory === cat ? 'bg-[#014034] text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {filteredPortfolio.length > 0 ? (
                filteredPortfolio.map((p) => (
                  <div 
                    key={p.id} 
                    className="group relative overflow-hidden rounded-3xl bg-gray-100 aspect-[4/3] shadow-lg cursor-pointer"
                    onClick={() => navigate(`/portfolio/${p.id}`)}
                  >
                    <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#014034] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
                      <span className="text-[#4DB6AC] font-bold text-sm uppercase mb-2">{p.category}</span>
                      <h3 className="text-3xl font-bold text-white mb-2">{p.title}</h3>
                      <p className="text-gray-200 font-medium">Client: {p.client}</p>
                      <button className="mt-6 self-start bg-white text-[#014034] px-6 py-2 rounded-lg font-bold">View Case Study</button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center col-span-full text-gray-400 py-10">No projects found in this category.</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Portfolio;