import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">
      <h1 className="text-4xl font-bold mb-4 text-white">Welcome to My Rainbow React App</h1>
      <p className="text-xl mb-8 text-white">Enjoy the colorful experience!</p>
      <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white">Get Started</Button>
    </div>
  );
};

export default Index;