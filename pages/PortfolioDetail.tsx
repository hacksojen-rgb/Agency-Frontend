import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, User, Tag } from 'lucide-react';
import { API_BASE } from '../constants';

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/get-portfolio-item.php?id=${id}`)
      .then(res => res.json())
      .then(data => {
        if (!data.error) setProject(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="pt-32 text-center text-[#014034] font-bold">Loading Project Details...</div>;
  if (!project) return <div className="pt-32 text-center text-red-600 font-bold">Project Not Found</div>;

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        <Link to="/portfolio" className="inline-flex items-center text-[#00695c] font-bold mb-12 hover:gap-2 transition-all">
          <ArrowLeft className="mr-2 w-5 h-5" /> Back to Portfolio
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl">
            <img src={project.imageUrl} alt={project.title} className="w-full h-auto" />
          </div>
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <span className="bg-[#014034]/5 text-[#014034] px-4 py-1 rounded-full text-sm font-bold border border-[#014034]/10">{project.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#014034] mb-8 leading-tight">{project.title}</h1>
            <div className="grid grid-cols-2 gap-8 mb-12 border-y border-gray-100 py-8">
              <div className="flex items-center space-x-4"><User className="text-[#00695c]" /><div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Client</div><div className="font-bold text-[#014034]">{project.client}</div></div>
            </div>
            <div className="prose prose-lg text-gray-600 mb-12">{project.content}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;