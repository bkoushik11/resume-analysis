import { Code2 } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <div className="pt-24 pb-16 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Code2 className="h-16 w-16 text-indigo-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Master Your Technical Skills
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Enhance your resume and prove your expertise with our comprehensive technical assessment platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onGetStarted}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}