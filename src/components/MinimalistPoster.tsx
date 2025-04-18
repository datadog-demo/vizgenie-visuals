
import { ArrowRight, Search, Database } from "lucide-react";
import { Card } from "./ui/card";

const MinimalistPoster = ({ variant }: { variant: 1 | 2 }) => {
  const content = {
    1: {
      heading: "VizGenie",
      subheading: "Visualize Data Your Way",
      description: "Natural language to Grafana visualizations",
      color: "bg-[#E5DEFF]",
      icon: Search,
    },
    2: {
      heading: "VizGenie",
      subheading: "AI-Powered Insights",
      description: "From words to dashboards, instantly",
      color: "bg-[#FDE1D3]",
      icon: Database,
    },
  };

  const selected = content[variant];

  return (
    <Card className={`${selected.color} p-8 relative overflow-hidden min-h-[400px] flex flex-col justify-between`}>
      <div className="space-y-6">
        <div className="text-sm font-medium tracking-wider text-gray-700">
          {selected.heading}
        </div>
        <h2 className="text-3xl font-bold text-gray-900 max-w-[200px] leading-tight">
          {selected.subheading}
        </h2>
        <p className="text-gray-700">{selected.description}</p>
      </div>
      <div className="flex items-center justify-between mt-8">
        <selected.icon className="w-8 h-8 text-gray-700" />
        <ArrowRight className="w-6 h-6 text-gray-700" />
      </div>
    </Card>
  );
};

export default MinimalistPoster;
