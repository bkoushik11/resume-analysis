import { FileCheck, Brain } from 'lucide-react';

interface FeaturesProps {
  onAnalyze: () => void;
}

export default function Features({ onAnalyze }: FeaturesProps) {
  return (
    <section className="py-16 px-4 bg-white" id="features">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Resume Analysis */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <FileCheck className="h-8 w-8 text-indigo-600" />
              <h2 className="text-2xl font-bold">Resume Analysis</h2>
            </div>
            <p className="text-gray-600">
              Get personalized suggestions to improve your resume and stand out from the crowd.
              Our AI-powered analysis helps identify areas for improvement and highlights your strengths.
            </p>
            <button 
              onClick={onAnalyze}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Analyze Resume
            </button>
          </div>

          {/* Technical Assessment */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Brain className="h-8 w-8 text-indigo-600" />
              <h2 className="text-2xl font-bold">Technical Assessment</h2>
            </div>
            <p className="text-gray-600">
              Test your knowledge with our comprehensive technical assessments.
              Choose from three difficulty levels to track your progress and identify areas for improvement.
            </p>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Start Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}