
import { Github, Rocket } from "lucide-react";
import { Card } from "./ui/card";

const MinimalistPoster = ({ variant }: { variant: 1 | 2 }) => {
  const content = {
    1: {
      platform: "Product Hunt",
      heading: "VizGenie",
      tagline: "Data Visualization Made Simple",
      description: "Transform natural language to Grafana dashboards",
      color: "bg-[#FDE1D3]",
      icon: Rocket,
    },
    2: {
      platform: "GitHub",
      heading: "VizGenie",
      tagline: "Open Source Intelligence",
      description: "AI-powered Grafana visualization tool",
      color: "bg-[#E5DEFF]",
      icon: Github,
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
        </div>
      </div>
      <selected.icon className="w-12 h-12 text-gray-700 opacity-80" />
    </Card>
  );
};

export default MinimalistPoster;
