import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Simple React App</h1>
      <p className="text-xl mb-8">This is a basic structure of a React application.</p>
      <Button size="lg">Get Started</Button>
    </div>
  );
};

export default Index;