
import MinimalistPoster from "@/components/MinimalistPoster";

const Index = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MinimalistPoster variant={1} />
          <MinimalistPoster variant={2} />
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          <a href="https://github.com" className="hover:text-gray-700 mx-2">GitHub</a>
          <span className="mx-2">•</span>
          <a href="https://producthunt.com" className="hover:text-gray-700 mx-2">Product Hunt</a>
        </div>
      </div>
    </div>
  );
};

export default Index;
