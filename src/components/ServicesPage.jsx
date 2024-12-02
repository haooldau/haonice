import React from 'react';
import ServiceCard from './ServiceCard';
import { Zap, Users, PenTool } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Zap,
      title: 'SEO',
      description: 'Optimize your website to boost its search engine visibility. Our SEO services include keyword research, on-page optimization, and link-building, all designed to strengthen your online presence and increase organic traffic.'
    },
    {
      icon: Users,
      title: 'Social Media',
      description: 'Enhance your brand\'s visibility with our social media management. We create and manage engaging content, handle your accounts, and interact with your audience on all platforms to improve your online presence.'
    },
    {
      icon: PenTool,
      title: 'Content Creation',
      description: 'Elevate your website\'s performance with custom content designed for your audience. Our services include blog posts, articles, and copywriting crafted to engage readers and enhance your site\'s overall impact.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-red-500">•</span>
          <span className="text-gray-400">Tailored Digital Solutions</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">
          Services to Enhance<br />
          Your Online Presence
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage; 