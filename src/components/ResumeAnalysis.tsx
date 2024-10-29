import { FileCheck, Brain, BarChart } from 'lucide-react';

export default function ResumeAnalysis() {
  return (
    <section className="py-16 px-4 bg-white" id="resume-analysis">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Career Analysis Dashboard</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Resume Suggestions */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <FileCheck className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-semibold">Resume Suggestions</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                Strong technical skills section
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500">!</span>
                Add more quantifiable achievements
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500">!</span>
                Enhance project descriptions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                Clear professional summary
              </li>
            </ul>
          </div>

          {/* Subject Proficiency */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="h-6 w-6 text-purple-600" />
              <h3 className="text-xl font-semibold">Subject Proficiency</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">Easy</span>
                  <span className="text-sm font-semibold text-green-600">95%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-green-500 rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">Medium</span>
                  <span className="text-sm font-semibold text-yellow-600">75%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-yellow-500 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">Hard</span>
                  <span className="text-sm font-semibold text-orange-600">60%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-orange-500 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Selection Probability */}
          <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <BarChart className="h-6 w-6 text-green-600" />
              <h3 className="text-xl font-semibold">Selection Probability</h3>
            </div>
            <div className="text-center py-6">
              <div className="relative inline-flex items-center justify-center">
                <svg className="w-32 h-32">
                  <circle
                    className="text-gray-200"
                    strokeWidth="12"
                    stroke="currentColor"
                    fill="transparent"
                    r="56"
                    cx="64"
                    cy="64"
                  />
                  <circle
                    className="text-green-600"
                    strokeWidth="12"
                    strokeDasharray={350.8}
                    strokeDashoffset={350.8 * (1 - 0.78)}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="56"
                    cx="64"
                    cy="64"
                  />
                </svg>
                <span className="absolute text-2xl font-bold text-green-600">78%</span>
              </div>
              <p className="mt-4 text-gray-600">Based on your profile strength</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}