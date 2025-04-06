
import React from 'react';
import { cn } from '@/lib/utils';

const ArticleContent = () => {
  return (
    <article className="prose prose-lg max-w-none">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-nepal-dark border-b-2 border-nepal-red pb-2">
        राजनीति: राष्ट्र विकासको मेरुदण्ड
      </h1>
      
      <div className="mb-8 overflow-hidden rounded-lg shadow-md">
        <img 
          src="https://images.unsplash.com/photo-1619472351888-f844a0b33f5b?q=80&w=1200&auto=format&fit=crop"
          alt="नेपाली संसद भवन - Nepali Parliament Building" 
          className="w-full h-auto object-cover"
        />
        <p className="text-sm text-gray-600 italic mt-2 text-right">श्रोत: अन्सप्लास, नेपाली संसद भवन</p>
      </div>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-nepal-blue">भूमिका</h2>
        <p className="mb-4">
          राजनीति भन्नाले राष्ट्र संचालन गर्ने प्रक्रिया, विधि, र प्रणालीलाई जनाइन्छ। 
          यो सरकार निर्माण, नीति निर्माण, र जनताको जीवनशैलीमा प्रत्यक्ष प्रभाव पार्ने क्रियाकलापहरूको समुच्चय हो। 
          नेपालजस्तो विकासशील मुलुकमा राजनीति केवल नेताहरूको काम मात्र नभई जनताको दायित्व पनि हो।
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-nepal-blue">नेपाली राजनीतिको वर्तमान अवस्था</h2>
        <p className="mb-4">
          नेपालको राजनीति पछिल्लो दशकहरूमा ठूला परिवर्तनहरूको साक्षी रहँदै आएको छ। 
          राजतन्त्रबाट गणतन्त्रमा रूपान्तरण, संविधान निर्माण, संघीय प्रणालीको स्थापनाले देशमा नयाँ युगको सुरुवात गराएको छ। 
          तर, स्थिरता र विकासको अपेक्षा अनुसार राजनीतिको प्रभाव भने मिल्दो जस्तो देखिएको छैन।
        </p>
      </section>
      
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="overflow-hidden rounded-lg shadow-md">
          <img 
            src="https://images.unsplash.com/photo-1593350787438-394184d2e82c?q=80&w=800&auto=format&fit=crop"
            alt="नेपाली झण्डा - Nepali Flag" 
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-nepal-blue flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4 text-nepal-blue">दलहरूबीचको प्रतिस्पर्धा</h2>
          <p>
            नेपालमा बहुदलीय प्रणाली छ जसले विभिन्न राजनीतिक दलहरूलाई प्रतिस्पर्धा गर्ने अवसर प्रदान गरेको छ। 
            यद्यपि, धेरैजसो अवस्थामा दलहरूको प्राथमिकता सत्ता प्राप्तिमा केन्द्रित देखिन्छ। 
            जनताको समस्या समाधानभन्दा पनि पद र शक्तिको खेलले राजनीति बदनाम बनाएको छ।
          </p>
        </div>
      </div>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-nepal-blue">जनताको भूमिका र सचेतना</h2>
        <p className="mb-4">
          लोकतन्त्रमा जनताले सरकार बनाउने र परिवर्तन गर्ने अधिकार राख्छन्। 
          त्यसैले, सचेत जनमत नै राम्रो राजनीतिको आधार हो। 
          शिक्षित र सचेत नागरिकले मात्रै उत्तरदायी नेताहरूलाई चुन्न सक्छन्। 
          भोट हाल्ने मात्र होइन, राजनीतिक क्रियाकलापमा निगरानी राख्नु, प्रश्न उठाउनु र आलोचना गर्नु पनि जनताको जिम्मेवारी हो।
        </p>
      </section>
      
      <section className="mb-8 bg-nepal-light p-6 rounded-lg border border-nepal-red">
        <h2 className="text-2xl font-bold mb-4 text-nepal-red">समाधानका उपायहरू</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>राजनीतिक शिक्षालाई विद्यालय र समुदायस्तरमै बढावा दिनुपर्छ।</li>
          <li>नेताहरूको जवाफदेहिता सुनिश्चित गर्न कानुनी प्रक्रिया कडाइका साथ लागू गरिनुपर्छ।</li>
          <li>युवाहरूलाई राजनीति प्रतिको रुचि बढाउनुपर्छ, ताकि नयाँ सोच र नयाँ ऊर्जा राजनीतिमा प्रवेश होस्।</li>
        </ul>
      </section>
      
      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-4 text-nepal-blue">निष्कर्ष</h2>
        <p className="mb-4">
          राजनीति राष्ट्रको दिशा निर्धारण गर्ने मुख्य शक्ति हो। 
          यसले देशलाई समृद्धि तर्फ लैजान सक्छ, यदि यो इमानदारी, पारदर्शिता र जनउत्तरदायित्वका साथ सञ्चालित भयो भने। 
          हाम्रै सचेतना र सहभागिताले नेपाललाई सकारात्मक राजनीतिक संस्कारतर्फ डोर्याउन सक्छ।
        </p>
      </section>
      
      <div className="flex justify-center mt-10 space-x-4">
        <button className={cn(
          "bg-nepal-blue hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full transition-colors",
          "flex items-center justify-center"
        )}>
          <span>शेयर गर्नुहोस्</span>
        </button>
        <button className={cn(
          "bg-white border border-nepal-red text-nepal-red font-bold py-2 px-4 rounded-full",
          "hover:bg-nepal-red hover:text-white transition-colors",
          "flex items-center justify-center"
        )}>
          <span>प्रतिक्रिया दिनुहोस्</span>
        </button>
      </div>
    </article>
  );
};

export default ArticleContent;
