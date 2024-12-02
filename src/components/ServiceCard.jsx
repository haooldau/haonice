import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-black rounded-xl p-8 border border-white/5 hover:border-white/10 transition-all group">
      <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-white text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400 mb-6 leading-relaxed">
        {description}
      </p>
      <button className="flex items-center text-white group-hover:text-red-500 transition-colors">
        Browse our services
        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default ServiceCard; 