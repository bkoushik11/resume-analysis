import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ResumeAnalyzer from './components/ResumeAnalyzer';
import CoverLetterCreator from './components/CoverLetterCreator';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={setCurrentPage} />
      {currentPage === 'home' ? (
        <>
          <Hero onGetStarted={() => setCurrentPage('analyze')} />
          <Features onAnalyze={() => setCurrentPage('analyze')} />
        </>
      ) : currentPage === 'analyze' ? (
        <ResumeAnalyzer />
      ) : currentPage === 'cover-letter' ? (
        <CoverLetterCreator />
      ) : null}
    </div>
  );
}