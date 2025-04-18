
import { Github, Rocket } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const MinimalistPoster = ({ variant }: { variant: 1 | 2 }) => {
  const content = {
    1: {
      platform: "Product Hunt",
      heading: "VizGenie",
      tagline: "Data Visualization Made Simple",
      description: "Transform natural language to Grafana dashboards",
      color: "bg-[#FDE1D3]",
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
      color: "bg-[#E5DEFF]",
      icon: Github,
      link: "https://github.com/vizgenie",
      features: ["Prometheus Support", "Extensible Architecture", "Multi-Source"],
      launched: "April 18, 2025",
    },
  };

  const selected = content[variant];

  return (
    <Card className={`${selected.color} p-8 relative overflow-hidden min-h-[600px] flex flex-col justify-between`}>
      <div className="space-y-8">
        <div className="flex items-start justify-between">
          <img 
            src="/lovable-uploads/207d3f1c-58b3-4244-85de-55101fc15c3e.png" 
            alt="VizGenie Logo" 
            className="h-8 object-contain"
          />
          <div className="text-sm font-medium text-gray-700">
            {selected.platform}
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            {selected.tagline}
          </h2>
          <p className="text-gray-700 text-lg">{selected.description}</p>
          <ul className="space-y-2 mt-6">
            {selected.features.map((feature, index) => (
              <li key={index} className="text-gray-700 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gray-700 rounded-full" />
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
          className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900"
        >
          <selected.icon className="w-6 h-6" />
          <span className="text-sm font-medium">View on {selected.platform}</span>
        </a>
      </div>
    </Card>
  );
};

export default MinimalistPoster;
