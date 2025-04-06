
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-nepal-blue text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">नेपाल राजनीतिक पल्स</h3>
            <p className="text-sm">
              राजनीतिक विश्लेषण, समाचार, र नेपालको राजनैतिक अद्यावधिकहरूको लागि अग्रणी स्रोत।
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">लिङ्कहरू</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-nepal-light transition-colors">हाम्रो बारेमा</a></li>
              <li><a href="#" className="hover:text-nepal-light transition-colors">गोपनीयता नीति</a></li>
              <li><a href="#" className="hover:text-nepal-light transition-colors">सम्पर्क गर्नुहोस्</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">सम्पर्क</h3>
            <p className="text-sm">
              काठमाडौं, नेपाल<br />
              info@nepalrajniti.com<br />
              +977 9812345678
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-nepal-red/30 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} नेपाल राजनीतिक पल्स। सर्वाधिकार सुरक्षित।</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
