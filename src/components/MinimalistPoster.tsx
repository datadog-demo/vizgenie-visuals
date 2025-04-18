
import { Github, Rocket, ArrowUpRight } from "lucide-react";
import { Card } from "./ui/card";

const MinimalistPoster = () => {
  const content = {
    heading: "VizGenie",
    tagline: "Data Visualization Made Simple",
    description: "Transform natural language to Grafana dashboards",
    color: "bg-gradient-to-br from-[#8B5CF6] via-[#D946EF] to-[#F97316]",
    platforms: [
      {
        name: "Product Hunt",
        icon: Rocket,
        link: "https://www.producthunt.com/vizgenie",
      },
      {
        name: "GitHub",
        icon: Github,
        link: "https://github.com/vizgenie",
      }
    ],
    features: ["Natural Language Input", "Auto Dashboard Creation", "AI-Powered", "Prometheus Support"],
    launched: "April 18, 2025",
  };

  return (
    <Card className={`${content.color} p-8 relative overflow-hidden min-h-[400px] flex flex-col justify-between group hover:shadow-xl transition-all duration-500`}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      
      <div className="space-y-8 relative z-10">
        <div className="flex items-start justify-between">
          <div className="relative">
            <img 
              src="/lovable-uploads/207d3f1c-58b3-4244-85de-55101fc15c3e.png" 
              alt="VizGenie Logo" 
              className="h-12 object-contain transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />
          </div>
          <div className="flex gap-3">
            {content.platforms.map((platform, index) => (
              <a
                key={index}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/90 hover:text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
              >
                <platform.icon className="w-5 h-5" />
                <span className="text-sm font-medium">
                  {platform.name}
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="space-y-4 max-w-2xl">
          <h2 className="text-5xl font-bold text-white leading-tight tracking-tight">
            {content.tagline}
          </h2>
          <p className="text-white/90 text-xl font-medium">
            {content.description}
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {content.features.map((feature, index) => (
              <div
                key={index}
                className="text-white/90 text-sm px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="relative z-10">
        <p className="text-sm text-white/70">Published on {content.launched}</p>
      </div>
    </Card>
  );
};

export default MinimalistPoster;
