
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleContent from '@/components/ArticleContent';
import DailyUpdates from '@/components/DailyUpdates';
import '../styles/custom.css';

// Function to convert date to Nepali format
const getFormattedNepaliDate = () => {
  const currentDate = new Date();
  
  // Map for Nepali months
  const nepaliMonths = {
    '1': 'बैशाख',
    '2': 'जेठ',
    '3': 'असार',
    '4': 'श्रावण',
    '5': 'भदौ',
    '6': 'आश्विन',
    '7': 'कार्तिक',
    '8': 'मंसिर',
    '9': 'पुष',
    '10': 'माघ',
    '11': 'फाल्गुन',
    '12': 'चैत्र'
  };

  // Map for Nepali numerals
  const nepaliNumerals = {
    '0': '०',
    '1': '१',
    '2': '२',
    '3': '३',
    '4': '४',
    '5': '५',
    '6': '६',
    '7': '७',
    '8': '८',
    '9': '९'
  };
  
  // Convert to Nepali year (add 56 years and 8 months approximately)
  const nepaliYear = currentDate.getFullYear() + 57;
  
  // Get current month (1-12)
  const month = currentDate.getMonth() + 1;
  
  // Get current day
  const day = currentDate.getDate();
  
  // Convert numbers to Nepali numerals
  const nepaliYearStr = nepaliYear.toString().split('').map(digit => nepaliNumerals[digit] || digit).join('');
  const nepaliDay = day.toString().split('').map(digit => nepaliNumerals[digit] || digit).join('');
  
  // Get Nepali month name
  const nepaliMonth = nepaliMonths[month.toString()] || '';
  
  return `${nepaliYearStr} ${nepaliMonth} ${nepaliDay}`;
};

const Index = () => {
  // Get current date in both Nepali and English format
  const nepaliDate = getFormattedNepaliDate();
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const englishDate = currentDate.toLocaleDateString('en-US', options);
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6 p-4 bg-nepal-light border-l-4 border-nepal-red rounded-md">
              <p className="text-nepal-dark text-sm">
                प्रकाशित मिति: {nepaliDate} ({englishDate}) | श्रेणी: विश्लेषण
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
