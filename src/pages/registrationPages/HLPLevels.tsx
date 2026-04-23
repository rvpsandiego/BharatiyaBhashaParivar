import { useState } from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';

interface HLPLevel {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  aboutCourse: string;
  requirements: string;
  schedule: {
    day: string;
    time: string;
  }[];
}

const hlpLevels: HLPLevel[] = [
  {
    id: 'hlp-1',
    number: 1,
    title: 'HLP-I',
    subtitle: 'INTRODUCTION TO HINDI LANGUAGE',
    aboutCourse: 'HLP I students will be able to read, write and identify Hindi alphabets, numbers, introduce themselves and their family, greet others and carry on basic conversation in Hindi. Students will be able to identify basic things around themselves in everyday life. Throughout the course there is an emphasis on learning Bhartiya (Indian) culture and accepting other cultures. This will provide broader perspective and idea to our students. Students will initiate and sustain simple conversation about self, family, greetings, and birthdays. Students will interpret a video related to the basic personal information about family and descriptions. Students will present information about family using simple Hindi words. Students will understand aural sounds for Hindi related to self, family, greetings, and birthdays. Students will be able to copy (modeled) written form of Hindi for their name and greetings. Culture and Comparison: Students will recognize and practice culturally appropriate social behaviors and gestures for greetings and taking leave in Indian-American society.',
    requirements: 'Basic Hindi language understanding and speaking',
    schedule: [
      { day: 'Thursday', time: '6PM to 8:30PM' },
      { day: 'Friday', time: '6PM to 8:30PM' }
    ]
  },
  {
    id: 'hlp-2',
    number: 2,
    title: 'HLP-II',
    subtitle: 'HINDI PROFICIENCY LEVEL 2',
    aboutCourse: 'Building on HLP I foundations, students develop intermediate reading, writing, and conversational skills in Hindi. Focus areas include sentence construction, grammar basics, and expanded vocabulary for everyday situations. Students engage with authentic materials and cultural texts to deepen understanding of Indian heritage.',
    requirements: 'Completion of HLP I or equivalent Hindi knowledge',
    schedule: [
      { day: 'Saturday', time: '10AM to 12:30PM' },
      { day: 'Sunday', time: '10AM to 12:30PM' }
    ]
  },
  {
    id: 'hlp-3',
    number: 3,
    title: 'HLP-III',
    subtitle: 'INTERMEDIATE HINDI LANGUAGE',
    aboutCourse: 'Students achieve intermediate level proficiency in Hindi with emphasis on reading comprehension and written expression. Curriculum includes literature excerpts, cultural discussions, and practical communication scenarios. Students practice complex conversations and written assignments.',
    requirements: 'Completion of HLP II or intermediate Hindi knowledge',
    schedule: [
      { day: 'Monday', time: '4PM to 6:30PM' },
      { day: 'Wednesday', time: '4PM to 6:30PM' }
    ]
  },
  {
    id: 'hlp-4',
    number: 4,
    title: 'HLP-IV',
    subtitle: 'ADVANCED INTERMEDIATE HINDI',
    aboutCourse: 'Students refine intermediate skills with advanced grammar, idiomatic expressions, and cultural nuances. Focus on literary appreciation, business Hindi, and sophisticated conversation. Students complete research projects and cultural presentations.',
    requirements: 'Completion of HLP III or advanced intermediate Hindi knowledge',
    schedule: [
      { day: 'Tuesday', time: '6PM to 8:30PM' },
      { day: 'Thursday', time: '6PM to 8:30PM' }
    ]
  },
  {
    id: 'hlp-5',
    number: 5,
    title: 'HLP-V',
    subtitle: 'UPPER INTERMEDIATE HINDI',
    aboutCourse: 'Intensive focus on advanced communication, literary analysis, and cultural exploration. Students engage with contemporary Hindi media, classical literature, and complex dialogues. Emphasis on developing nuanced expression and cultural competence.',
    requirements: 'Completion of HLP IV or upper intermediate Hindi knowledge',
    schedule: [
      { day: 'Wednesday', time: '6PM to 8:30PM' },
      { day: 'Saturday', time: '2PM to 4:30PM' }
    ]
  },
  {
    id: 'hlp-6',
    number: 6,
    title: 'HLP-VI',
    subtitle: 'PRE-ADVANCED HINDI PROFICIENCY',
    aboutCourse: 'Students transition toward advanced proficiency with emphasis on academic Hindi, literary works, and sophisticated cultural understanding. Discussion-based learning, research presentations, and detailed writing assignments form the core curriculum.',
    requirements: 'Completion of HLP V or pre-advanced Hindi knowledge',
    schedule: [
      { day: 'Sunday', time: '2PM to 4:30PM' },
      { day: 'Monday', time: '6PM to 8:30PM' }
    ]
  },
  {
    id: 'hlp-7',
    number: 7,
    title: 'HLP-VII',
    subtitle: 'ADVANCED HINDI PROFICIENCY',
    aboutCourse: 'Mastery-level instruction with focus on academic discourse, critical analysis of literature, and nuanced cultural interpretation. Students develop teaching competency and advanced writing skills. Classical and contemporary Hindi literature form the curriculum foundation.',
    requirements: 'Completion of HLP VI or advanced Hindi knowledge',
    schedule: [
      { day: 'Friday', time: '4PM to 6:30PM' },
      { day: 'Sunday', time: '4PM to 6:30PM' }
    ]
  },
  {
    id: 'hlp-8',
    number: 8,
    title: 'HLP-VIII',
    subtitle: 'MASTERY AND CULTURAL IMMERSION',
    aboutCourse: 'Highest proficiency level emphasizing complete mastery of Hindi language and deep cultural immersion. Students engage in scholarly discussions, independent research, and cultural criticism. Focus on preserving and advancing Hindi language knowledge for the next generation.',
    requirements: 'Completion of HLP VII or mastery-level Hindi knowledge',
    schedule: [
      { day: 'Saturday', time: '4PM to 6:30PM' },
      { day: 'Tuesday', time: '4PM to 6:30PM' }
    ]
  }
];

export default function HindiLanguageProgram() {
  const [selectedLevel, setSelectedLevel] = useState<HLPLevel | null>(null);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Hindi Language Program
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-orange-100"
          >
            8 Levels of Progressive Hindi Learning
          </motion.p>
        </div>
      </div>

      {/* HLP Levels Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {hlpLevels.map((level, idx) => (
              <motion.div
                key={level.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedLevel(level)}
              >
                {/* Card with Mandala Background */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-yellow-400 to-yellow-300 border-4 border-yellow-400">
                  {/* Mandala SVG Background */}
                  <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="80" fill="none" stroke="#7C3AED" strokeWidth="2"/>
                    <circle cx="100" cy="100" r="70" fill="none" stroke="#7C3AED" strokeWidth="1"/>
                    <circle cx="100" cy="100" r="60" fill="none" stroke="#7C3AED" strokeWidth="2"/>
                    {[...Array(12)].map((_, i) => (
                      <g key={i} transform={`rotate(${(i * 360) / 12} 100 100)`}>
                        <rect x="95" y="20" width="10" height="15" fill="#7C3AED" opacity="0.6"/>
                        <circle cx="100" cy="35" r="3" fill="#7C3AED"/>
                      </g>
                    ))}
                  </svg>

                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center text-center p-6">
                    <div className="mb-4">
                      <div className="text-purple-900 font-bold text-lg mb-1">Level {level.number}</div>
                      <div className="text-purple-800 font-semibold text-xl">{level.title}</div>
                    </div>
                  </div>

                  {/* Plus Sign Button */}
                  <button className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-2xl font-bold hover:bg-purple-700 transition-colors shadow-md group-hover:scale-110">
                    +
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedLevel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header with Close Button */}
            <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">{selectedLevel.title}</h2>
                <p className="text-lg text-slate-600 mt-2">{selectedLevel.subtitle}</p>
              </div>
              <button
                onClick={() => setSelectedLevel(null)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-8">
              {/* Mandala Icon */}
              <div className="flex justify-center">
                <div className="w-32 h-32 bg-yellow-100 rounded-xl border-4 border-yellow-400 flex items-center justify-center">
                  <svg className="w-24 h-24 opacity-30" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="80" fill="none" stroke="#7C3AED" strokeWidth="2"/>
                    <circle cx="100" cy="100" r="70" fill="none" stroke="#7C3AED" strokeWidth="1"/>
                    <circle cx="100" cy="100" r="60" fill="none" stroke="#7C3AED" strokeWidth="2"/>
                  </svg>
                </div>
              </div>

              {/* About Course */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-orange-500">
                  ABOUT COURSE
                </h3>
                <p className="text-slate-700 leading-relaxed text-justify">
                  {selectedLevel.aboutCourse}
                </p>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">REQUIREMENTS</h3>
                <p className="text-slate-700">{selectedLevel.requirements}</p>
              </div>

              {/* Class Schedule */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">CLASS SCHEDULE FOR 2024-2025</h3>
                <div className="space-y-2">
                  {selectedLevel.schedule.map((sched, idx) => (
                    <p key={idx} className="text-slate-700 font-medium">
                      {sched.day} {sched.time}
                    </p>
                  ))}
                </div>
              </div>

              {/* Done Button */}
              <div className="flex justify-center pt-4">
                <button
                  onClick={() => setSelectedLevel(null)}
                  className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-lg transition-colors"
                >
                  ✕ Done
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
