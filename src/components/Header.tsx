import { Code2, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onNavigate: (page: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <Code2 className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">TechPrep Pro</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => onNavigate('analyze')}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Analysis
            </button>
            <button 
              onClick={() => onNavigate('cover-letter')}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Cover Letter
            </button>
            <button 
              onClick={() => onNavigate('assessment')}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Assessment
            </button>
            <button 
              onClick={() => onNavigate('analyze')}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => {
                  onNavigate('analyze');
                  setIsMenuOpen(false);
                }}
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Analysis
              </button>
              <button 
                onClick={() => {
                  onNavigate('cover-letter');
                  setIsMenuOpen(false);
                }}
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Cover Letter
              </button>
              <button 
                onClick={() => {
                  onNavigate('assessment');
                  setIsMenuOpen(false);
                }}
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Assessment
              </button>
              <button 
                onClick={() => {
                  onNavigate('analyze');
                  setIsMenuOpen(false);
                }}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}