
import MinimalistPoster from "@/components/MinimalistPoster";

const Index = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MinimalistPoster variant={1} />
          <MinimalistPoster variant={2} />
        </div>
      </div>
    </div>
  );
};

export default Index;
