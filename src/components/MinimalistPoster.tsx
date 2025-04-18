
import { Github, Rocket, ArrowUpRight, Sparkles } from "lucide-react";
import { Card } from "./ui/card";

const MinimalistPoster = () => {
  const content = {
    heading: "VizGenie",
    tagline: "Visualize Your Data Your Way",
    description: "Intelligent tool that transforms natural language into Grafana visualizations",
    features: [
      "Natural language to visualization",
      "Grafana integration",
      "Prometheus support",
      "Extensible architecture",
      "AI-powered insights"
    ],
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
    launched: "April 18, 2025",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Product Hunt Banner */}
      <Card className="relative overflow-hidden aspect-[2/3] p-8 bg-gradient-to-br from-orange-50 to-rose-100 group hover:shadow-xl transition-all duration-500">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div className="space-y-6">
            <div className="relative inline-block">
              <img 
                src="/lovable-uploads/207d3f1c-58b3-4244-85de-55101fc15c3e.png" 
                alt="VizGenie Logo" 
                className="h-12 object-contain transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                {content.tagline}
              </h2>
              <p className="text-gray-700 text-lg">
                {content.description}
              </p>
            </div>

            <a
              href={content.platforms[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF6154] text-white px-6 py-3 rounded-full hover:bg-[#FF6154]/90 transition-colors"
            >
              <Rocket className="w-5 h-5" />
              <span>Launch on Product Hunt</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          
          <p className="text-sm text-gray-600">Available on Product Hunt {content.launched}</p>
        </div>
      </Card>

      {/* GitHub Banner */}
      <Card className="relative overflow-hidden aspect-[2/3] p-8 bg-gradient-to-br from-slate-50 to-purple-100 group hover:shadow-xl transition-all duration-500">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
        
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div className="space-y-8">
            <div className="relative">
              <img 
                src="/lovable-uploads/207d3f1c-58b3-4244-85de-55101fc15c3e.png" 
                alt="VizGenie Logo" 
                className="h-12 object-contain transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex flex-col gap-4">
                {content.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-800">
                    <Sparkles className="w-5 h-5 text-yellow-500" />
                    <span className="text-lg font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={content.platforms[1].link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#24292F] text-white px-6 py-3 rounded-full hover:bg-[#24292F]/90 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          
          <p className="text-sm text-gray-600">Open Source on GitHub</p>
        </div>
      </Card>
    </div>
  );
};

export default MinimalistPoster;
