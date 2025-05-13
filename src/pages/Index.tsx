
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleContent from '@/components/ArticleContent';
import DailyUpdates from '@/components/DailyUpdates';
import '../styles/custom.css';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6 p-4 bg-nepal-light border-l-4 border-nepal-red rounded-md">
              <p className="text-nepal-dark text-sm">
                प्रकाशित मिति: २०८१ चैत्र २४ (April 6, 2025) | श्रेणी: विश्लेषण
              </p>
            </div>
            
            <div className="article-content">
              <ArticleContent />
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold mb-4">थप पढ्नुहोस्</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border border-gray-200 rounded-md hover:border-nepal-red transition-colors nepal-card">
                  <h4 className="font-semibold mb-2">स्थानीय तहको निर्वाचन: अपेक्षा र चुनौती</h4>
                  <p className="text-gray-600 text-sm">स्थानीय तहको चुनावले जनतालाई वास्तविक लोकतन्त्रको अनुभूति दिन्छ।</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-md hover:border-nepal-red transition-colors nepal-card">
                  <h4 className="font-semibold mb-2">दल विभाजनको राजनीति र यसको प्रभाव</h4>
                  <p className="text-gray-600 text-sm">राजनीतिक दलहरू विभाजन हुने प्रवृत्ति र यसले पार्ने असर।</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1 space-y-8">
            <DailyUpdates />
            
            <div className="bg-nepal-light p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold mb-3 text-nepal-dark">हाम्रो बारेमा</h3>
              <p className="text-sm text-gray-700">
                नेपाल राजनीतिक पल्स एक स्वतन्त्र विश्लेषणात्मक प्लेटफर्म हो जसले नेपालको राजनीति, सामाजिक र आर्थिक मुद्दाहरूमा तथ्यपरक विश्लेषण प्रस्तुत गर्दछ।
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
