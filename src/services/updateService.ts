
import { useState, useEffect } from 'react';

export interface Update {
  id: string;
  title: string;
  content: string;
  date: string;
  category: string;
}

// Updated mock data for updates with current date
const mockUpdates: Update[] = [
  {
    id: '1',
    title: 'संसदमा नयाँ विधेयक पेश',
    content: 'आज संसदमा नयाँ स्वास्थ्य सम्बन्धी विधेयक पेश गरियो जसले ग्रामीण क्षेत्रमा स्वास्थ्य सेवा सुधार गर्ने उद्देश्य राख्दछ।',
    date: '२०८२ जेठ ००',
    category: 'संसद'
  },
  {
    id: '2',
    title: 'प्रधानमन्त्री र विपक्षी नेताबीच भेटवार्ता',
    content: 'आज प्रधानमन्त्री र प्रमुख विपक्षी दलका नेताबीच आगामी बजेटका सम्बन्धमा छलफल भएको छ।',
    date: '२०८२ वैशाख २९',
    category: 'सरकार'
  },
  {
    id: '3',
    title: 'स्थानीय निर्वाचनको तयारी शुरु',
    content: 'निर्वाचन आयोगले आगामी वर्षको स्थानीय तह निर्वाचनको लागि तयारी शुरु गरेको जानकारी दिएको छ।',
    date: '२०८२ वैशाख २८',
    category: 'निर्वाचन'
  }
];

export const useUpdates = () => {
  const [updates, setUpdates] = useState<Update[]>(mockUpdates);
  const [loading, setLoading] = useState<boolean>(true);

  // Simulate fetching updates from an API
  useEffect(() => {
    const fetchUpdates = async () => {
      setLoading(true);
      // In a real app, this would be an API call
      setTimeout(() => {
        setUpdates(mockUpdates);
        setLoading(false);
      }, 500);
    };

    fetchUpdates();
  }, []);

  return { updates, loading };
};
