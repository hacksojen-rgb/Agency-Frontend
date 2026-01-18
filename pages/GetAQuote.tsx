
import React, { useState } from 'react';
import { Rocket, ShieldCheck, CheckCircle2 } from 'lucide-react';

const GetAQuote: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-40 pb-24 container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl border border-gray-100">
          <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-10">
            <CheckCircle2 size={56} />
          </div>
          <h2 className="text-4xl font-extrabold text-[#014034] mb-6">Discovery Call Requested!</h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">Response within 24 hours.</p>
          <button onClick={() => setSubmitted(false)} className="bg-[#014034] text-white px-12 py-5 rounded-2xl font-extrabold text-lg hover:bg-[#00332a] transition-all shadow-xl">Back to Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-[#014034] mb-6">Tell us about your business</h1>
            <p className="text-xl text-gray-600">Tailored strategy within 24 hours.</p>
          </div>
          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl border border-gray-100">
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#014034] mb-8 flex items-center"><span className="w-8 h-8 rounded-full bg-[#014034] text-white text-sm flex items-center justify-center mr-3">1</span>Contact Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input required name="firstName" type="text" className="px-6 py-4 rounded-2xl border outline-none" placeholder="First Name" />
                <input required name="lastName" type="text" className="px-6 py-4 rounded-2xl border outline-none" placeholder="Last Name" />
                <input required name="email" type="email" className="px-6 py-4 rounded-2xl border outline-none" placeholder="Work Email" />
                <input required name="phone" type="tel" className="px-6 py-4 rounded-2xl border outline-none" placeholder="Phone Number" />
              </div>
            </div>
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#014034] mb-8 flex items-center"><span className="w-8 h-8 rounded-full bg-[#014034] text-white text-sm flex items-center justify-center mr-3">2</span>Business Profiling</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <input required name="company" type="text" className="px-6 py-4 rounded-2xl border outline-none" placeholder="Company Name" />
                <input name="website" type="url" className="px-6 py-4 rounded-2xl border outline-none" placeholder="Website URL" />
                <select required name="budget" className="px-6 py-4 rounded-2xl border outline-none bg-white">
                  <option value="">Monthly Budget Range</option>
                  <option value="5k-10k">$5k - $10k</option>
                  <option value="10k-25k">$10k - $25k</option>
                  <option value="25k-plus">$25k+</option>
                </select>
              </div>
              <textarea required name="growthChallenge" rows={3} className="w-full px-6 py-4 rounded-2xl border outline-none mb-8" placeholder="Biggest growth challenge?" />
            </div>
            <button type="submit" className="w-full bg-[#014034] text-white py-6 rounded-2xl font-extrabold text-2xl hover:bg-[#00332a] flex items-center justify-center space-x-4 shadow-2xl group">
              <span>Generate My Growth Plan</span><Rocket size={28} />
            </button>
            <p className="mt-6 text-gray-400 font-medium flex items-center justify-center"><ShieldCheck size={18} className="mr-2 text-green-600" />Data is secure.</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetAQuote;
