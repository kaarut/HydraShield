import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

const EmergencyPreparedness = () => {
  const [activeCategory, setActiveCategory] = useState('communication');
  const [animateStats, setAnimateStats] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setAnimateStats(true);
    }
  }, [inView]);

  // Data from FEMA and Red Cross surveys on preparedness
  const preparednessData = {
    supplies: [
      { name: 'Agua (3 días)', prepared: 39, unprepared: 61 },
      { name: 'Comida no perecedera', prepared: 42, unprepared: 58 },
      { name: 'Botiquín', prepared: 47, unprepared: 53 },
      { name: 'Linterna', prepared: 65, unprepared: 35 },
      { name: 'Radio a pilas', prepared: 29, unprepared: 71 },
    ],
    planning: [
      { name: 'Family Plan', prepared: 26, unprepared: 74 },
      { name: 'Evacuation Route', prepared: 23, unprepared: 77 },
      { name: 'Emergency Contacts', prepared: 48, unprepared: 52 },
      { name: 'Meeting Location', prepared: 21, unprepared: 79 },
      { name: 'Practice Drills', prepared: 14, unprepared: 86 },
    ],
    communication: [
      { name: 'Backup Power', prepared: 33, unprepared: 67 },
      { name: 'Offline Maps', prepared: 19, unprepared: 81 },
      { name: 'Emergency Alerts', prepared: 22, unprepared: 58 },
      { name: 'Contact Method', prepared: 37, unprepared: 63 },
      { name: 'Signal Backup', prepared: 9, unprepared: 91 },
    ]
  };

  const categories = [
    // { id: 'communication', label: 'Emergency Communication', icon: <AlertTriangle className="mr-2" size={18} /> },
    // { id: 'supplies', label: 'Emergency Supplies', icon: <CheckCircle2 className="mr-2" size={18} /> },
    // { id: 'planning', label: 'Emergency Planning', icon: <Info className="mr-2" size={18} /> }
  ];

  const preparednessStats = [
    { percentage: 72, text: "of Valencia residents were unprepared for the October 2024 floods", color: "bg-red-500" },
    { percentage: 64, text: "of Spanish households lack adequate emergency plans", color: "bg-orange-500" },
    { percentage: 53, text: "reported communication failures during recent emergencies", color: "bg-yellow-500" },
  ];

  // Source attribution


  return (
    <section
      id="statistics"
      ref={ref}
      className="min-h-screen w-full snap-start bg-gray-50 py-8 text-gray-800"
    >
      <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 text-center pb-8">
            Statistics
          </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {preparednessStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-md flex flex-col items-center"
            >
              <div className={`${stat.color} rounded-full w-24 h-24 flex items-center justify-center mb-4`}>
                <span className="text-3xl font-bold text-white">{animateStats ? stat.percentage : 0}%</span>
              </div>
              <p className="text-lg text-center text-gray-700">{stat.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
            Spanish Household Emergency Preparedness
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {categories.map(category => (
              <button
                key={category.id}
                className={`flex items-center px-4 py-2 rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.icon}
                {category.label}
              </button>
            ))}
          </div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={preparednessData[activeCategory]}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                layout="vertical"
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis type="number" domain={[0, 100]} stroke="#6b7280" />
                <YAxis dataKey="name" type="category" stroke="#6b7280" width={100} />
                <Tooltip formatter={(value) => [`${value}%`, value < 50 ? 'Unprepared' : 'Prepared']} />
                <Legend />
                <Bar dataKey="prepared" name="Prepared (%)" fill="#10b981" radius={[0, 4, 4, 0]} />
                <Bar dataKey="unprepared" name="Unprepared (%)" fill="#ef4444" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default EmergencyPreparedness;