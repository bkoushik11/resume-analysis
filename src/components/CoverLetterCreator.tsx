import { useState } from 'react';
import { FileText, Sparkles } from 'lucide-react';

export default function CoverLetterCreator() {
  const [jobDescription, setJobDescription] = useState('');
  const [customSuggestions, setCustomSuggestions] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobDescription) return;

    setLoading(true);
    // Simulating API call
    setTimeout(() => {
      setCoverLetter(`Dear Hiring Manager,

I am writing to express my strong interest in the [Position] role at [Company Name]. With my background in software development and passion for creating impactful solutions, I am confident in my ability to contribute meaningfully to your team.

The opportunity to [key responsibility from job description] particularly excites me, as it aligns perfectly with my experience in [relevant skill]. Your company's focus on [company value/goal] resonates with my professional aspirations.

Throughout my career, I have demonstrated [relevant achievement], which I believe makes me an ideal candidate for this position. I am particularly drawn to the chance to [another key responsibility] and believe my experience with [relevant technology/skill] would allow me to hit the ground running.

I look forward to discussing how my skills and experiences align with your team's needs.

Best regards,
[Your Name]`);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <FileText className="h-8 w-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-center">Cover Letter Creator</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Description
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    className="w-full h-48 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                    placeholder="Paste the job description here..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Custom Suggestions (Optional)
                  </label>
                  <textarea
                    value={customSuggestions}
                    onChange={(e) => setCustomSuggestions(e.target.value)}
                    className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                    placeholder="Add any specific points you'd like to include..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={!jobDescription || loading}
                  className={`w-full py-3 px-4 rounded-lg text-white font-medium flex items-center justify-center gap-2
                    ${loading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-indigo-600 hover:bg-indigo-700'
                    }`}
                >
                  <Sparkles className="h-5 w-5" />
                  {loading ? 'Generating...' : 'Generate Cover Letter'}
                </button>
              </form>
            </div>

            {/* Output Section */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Generated Cover Letter</h2>
              {coverLetter ? (
                <div className="space-y-4">
                  <div className="prose max-w-none">
                    <pre className="whitespace-pre-wrap font-sans text-gray-700 bg-gray-50 p-4 rounded-lg">
                      {coverLetter}
                    </pre>
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => navigator.clipboard.writeText(coverLetter)}
                      className="flex-1 py-2 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                    >
                      Copy to Clipboard
                    </button>
                    <button
                      onClick={() => setCoverLetter('')}
                      className="flex-1 py-2 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                    >
                      Clear
                    </button>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-gray-500">
                  Your generated cover letter will appear here
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}