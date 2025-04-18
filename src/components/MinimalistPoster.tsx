
import { Github, Rocket } from "lucide-react";
import { Card } from "./ui/card";

const MinimalistPoster = ({ variant }: { variant: 1 | 2 }) => {
  const content = {
    1: {
      platform: "Product Hunt",
      heading: "VizGenie",
      tagline: "Data Visualization Made Simple",
      description: "Transform natural language to Grafana dashboards",
      color: "bg-gradient-to-br from-[#FDE1D3] to-[#FFE29F]",
      icon: Rocket,
      link: "https://www.producthunt.com/vizgenie",
      features: ["Natural Language Input", "Auto Dashboard Creation", "AI-Powered"],
      launched: "April 18, 2025",
    },
    2: {
      platform: "GitHub",
      heading: "VizGenie",
      tagline: "Open Source Intelligence",
      description: "AI-powered Grafana visualization tool",
      color: "bg-gradient-to-br from-[#E5DEFF] to-[#D6BCFA]",
      icon: Github,
      link: "https://github.com/vizgenie",
      features: ["Prometheus Support", "Extensible Architecture", "Multi-Source"],
      launched: "April 18, 2025",
    },
  };

  const selected = content[variant];

  return (
    <Card className={`${selected.color} p-8 relative overflow-hidden min-h-[600px] flex flex-col justify-between group hover:shadow-lg transition-shadow duration-300`}>
      <div className="space-y-8">
        <div className="flex items-start justify-between">
          <div className="relative">
            <img 
              src="/lovable-uploads/207d3f1c-58b3-4244-85de-55101fc15c3e.png" 
              alt="VizGenie Logo" 
              className="h-10 object-contain transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-20" />
          </div>
          <div className="text-sm font-medium text-gray-700 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
            {selected.platform}
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight tracking-tight">
            {selected.tagline}
          </h2>
          <p className="text-gray-700 text-lg font-medium">{selected.description}</p>
          <ul className="space-y-2 mt-6">
            {selected.features.map((feature, index) => (
              <li key={index} className="text-gray-700 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gradient-to-br from-gray-700 to-gray-500 rounded-full" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-sm text-gray-700">Published on {selected.launched}</p>
        <a 
          href={selected.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors duration-300"
        >
          <selected.icon className="w-6 h-6" />
          <span className="text-sm font-medium">View on {selected.platform}</span>
        </a>
      </div>
    </Card>
  );
};

export default MinimalistPoster;
