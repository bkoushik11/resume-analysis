import { useState } from 'react';
import { FileUp, CheckCircle, AlertCircle } from 'lucide-react';

export default function ResumeAnalyzer() {
  const [file, setFile] = useState<File | null>(null);
  const [analysis, setAnalysis] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    // Simulating API call
    setTimeout(() => {
      setAnalysis({
        score: 85,
        strengths: [
          'Strong technical skills section',
          'Clear professional summary',
          'Good education background'
        ],
        improvements: [
          'Add more quantifiable achievements',
          'Enhance project descriptions',
          'Include relevant certifications'
        ]
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Resume Analysis</h1>
          
          {!analysis ? (
            <div className="bg-white rounded-xl shadow-md p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
                  <div className="flex flex-col items-center">
                    <FileUp className="h-12 w-12 text-gray-400 mb-4" />
                    <label className="block text-center">
                      <span className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 cursor-pointer">
                        Select Resume
                      </span>
                      <input
                        type="file"
                        className="hidden"
                        accept=".pdf,.docx,.doc"
                        onChange={handleFileChange}
                      />
                    </label>
                    <p className="mt-2 text-sm text-gray-500">
                      Supported formats: PDF, DOCX, DOC
                    </p>
                    {file && (
                      <p className="mt-2 text-sm text-indigo-600">
                        Selected: {file.name}
                      </p>
                    )}
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={!file || loading}
                  className={`w-full py-3 px-4 rounded-lg text-white font-medium 
                    ${loading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-indigo-600 hover:bg-indigo-700'
                    }`}
                >
                  {loading ? 'Analyzing...' : 'Analyze Resume'}
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-semibold">Analysis Results</h2>
                  <span className="text-3xl font-bold text-indigo-600">{analysis.score}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-indigo-600 rounded-full transition-all duration-1000" 
                    style={{ width: `${analysis.score}%` }}
                  ></div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Strengths
                  </h3>
                  <ul className="space-y-2">
                    {analysis.strengths.map((strength: string, index: number) => (
                      <li key={index} className="text-gray-600">
                        • {strength}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
                    <AlertCircle className="h-5 w-5 text-yellow-500" />
                    Areas for Improvement
                  </h3>
                  <ul className="space-y-2">
                    {analysis.improvements.map((improvement: string, index: number) => (
                      <li key={index} className="text-gray-600">
                        • {improvement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={() => {
                  setAnalysis(null);
                  setFile(null);
                }}
                className="mt-8 w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
              >
                Analyze Another Resume
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}