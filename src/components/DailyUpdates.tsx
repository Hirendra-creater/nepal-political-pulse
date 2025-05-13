
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useUpdates, Update } from '@/services/updateService';
import { Separator } from '@/components/ui/separator';

const DailyUpdateItem: React.FC<{ update: Update }> = ({ update }) => {
  return (
    <div className="py-3">
      <div className="flex flex-col space-y-1">
        <div className="flex justify-between items-center">
          <h4 className="font-semibold text-left text-nepal-dark">{update.title}</h4>
          <span className="text-xs bg-nepal-red/10 text-nepal-red px-2 py-1 rounded-full">{update.category}</span>
        </div>
        <p className="text-sm text-gray-600 text-left">{update.content}</p>
        <p className="text-xs text-left text-gray-500">{update.date}</p>
      </div>
    </div>
  );
};

const DailyUpdates: React.FC = () => {
  const { updates, loading } = useUpdates();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = ['सबै', ...Array.from(new Set(updates.map(update => update.category)))];
  
  const filteredUpdates = activeCategory && activeCategory !== 'सबै' 
    ? updates.filter(update => update.category === activeCategory) 
    : updates;

  return (
    <Card className="w-full overflow-hidden border border-gray-200 shadow-sm bg-white">
      <CardHeader className="bg-gray-50 pb-2">
        <CardTitle className="text-xl font-bold text-nepal-dark flex items-center">
          <span className="inline-block w-2 h-5 bg-nepal-red mr-2"></span>
          दैनिक अपडेट
        </CardTitle>
        <CardDescription>राजनीतिक घटनाक्रमको ताजा जानकारी</CardDescription>
        <div className="flex space-x-2 overflow-x-auto py-2 mt-2 scrollbar-none">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category === 'सबै' ? null : category)}
              className={`px-3 py-1 text-sm rounded-full transition whitespace-nowrap ${
                (category === 'सबै' && !activeCategory) || activeCategory === category
                  ? 'bg-nepal-red text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="pt-4 max-h-[350px] overflow-y-auto">
        {loading ? (
          <div className="py-8 text-center">
            <p>अपडेट लोड हुँदैछ...</p>
          </div>
        ) : (
          <>
            {filteredUpdates.map((update, index) => (
              <React.Fragment key={update.id}>
                <DailyUpdateItem update={update} />
                {index < filteredUpdates.length - 1 && <Separator />}
              </React.Fragment>
            ))}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default DailyUpdates;
