
import React from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  return (
    <header className="w-full bg-nepal-blue text-white">
      <div className="container mx-auto py-4 px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="mr-2 w-10 h-10">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0L60 35H95L67 56L77 90L50 69L23 90L33 56L5 35H40L50 0Z" fill="#DC143C"/>
              </svg>
            </div>
            <h1 className="text-2xl font-bold">नेपाल राजनीतिक पल्स</h1>
          </div>
          
          <nav className="flex space-x-4">
            <a href="#" className="hover:text-nepal-light transition-colors">गृहपृष्ठ</a>
            <a href="#" className="hover:text-nepal-light transition-colors">समाचार</a>
            <a href="#" className="hover:text-nepal-light transition-colors">विश्लेषण</a>
            <a href="#" className="hover:text-nepal-light transition-colors">सम्पर्क</a>
          </nav>
        </div>
      </div>
      
      <div className={cn("h-1 w-full bg-nepal-red")}></div>
    </header>
  );
};

export default Header;
