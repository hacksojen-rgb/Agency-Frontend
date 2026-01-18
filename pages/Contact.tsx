
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { SITE_SETTINGS } from '../constants';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Thank you! Your message has been sent.');
    e.currentTarget.reset();
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl font-extrabold text-[#014034] mb-8">Let's Talk</h1>
            <p className="text-xl text-gray-600 mb-12">Question or project? We're here to help you grow. 24-hour response time.</p>
            <div className="space-y-8">
              {[
                { icon: MapPin, title: "Our Office", detail: SITE_SETTINGS.address },
                { icon: Phone, title: "Call Us", detail: SITE_SETTINGS.phone },
                { icon: Mail, title: "Email Us", detail: SITE_SETTINGS.email }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-[#014034]/5 rounded-xl flex items-center justify-center text-[#014034] shrink-0"><item.icon size={24} /></div>
                  <div><h4 className="text-lg font-bold text-[#014034]">{item.title}</h4><p className="text-gray-600">{item.detail}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-[#014034] mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input required name="name" type="text" className="px-5 py-3 rounded-xl border focus:border-[#014034] outline-none" placeholder="Name" />
                <input required name="email" type="email" className="px-5 py-3 rounded-xl border focus:border-[#014034] outline-none" placeholder="Email" />
              </div>
              <input required name="subject" type="text" className="w-full px-5 py-3 rounded-xl border focus:border-[#014034] outline-none" placeholder="Subject" />
              <textarea required name="message" rows={5} className="w-full px-5 py-3 rounded-xl border focus:border-[#014034] outline-none" placeholder="Message" />
              <button type="submit" className="w-full bg-[#014034] text-white py-4 rounded-xl font-bold hover:bg-[#00332a] flex items-center justify-center space-x-2">
                <span>Send Message</span><Send size={18} />
              </button>
              {status && <p className="text-green-600 font-medium text-center">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
