import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { i } from 'motion/react-client';

import HLP_level1 from '../../../images/HLP_images/HLP_level1.jpg';
import HLP_level2 from '../../../images/HLP_images/HLP_level2.jpg';
import HLP_level3 from '../../../images/HLP_images/HLP_level3.jpg';
import HLP_level4 from '../../../images/HLP_images/HLP_level4.jpg';
import HLP_level5 from '../../../images/HLP_images/HLP_level5.jpg';
import HLP_level6 from '../../../images/HLP_images/HLP_level6.jpg';
import HLP_level7 from '../../../images/HLP_images/HLP_level7.jpg';
import HLP_level8 from '../../../images/HLP_images/HLP_level8.jpg';

const hlpLevelImages: Record<number, string> = {
  1: HLP_level1,
  2: HLP_level2,
  3: HLP_level3,
  4: HLP_level4,
  5: HLP_level5,
  6: HLP_level6,
  7: HLP_level7,
  8: HLP_level8,
};

interface HLPLevel {
  id: string;
  number: number;
  year: string | number;
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
    year: 1,
    title: 'HLP Level I',
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
    year: 1,
    title: 'HLP Level II',
    subtitle: 'Language & culture of Hindi speaking parts of the world',
    aboutCourse: 'HLP II students will be studying the language and culture of India and Hindi speaking parts of the world. The overall goal is to develop functional communicative abilities in students to express basic communication needs in culturally appropriate ways. The skills of speaking, listening, reading and writing will be attained by students through exposure to rich authentic linguistic and cultural teaching contexts that emphasize students’ developing competency in Hindi language and culture. The course objectives include developing communication skills and understanding various aspects of culture through exposure to cultural activities that provide each student an opportunity to enhance language learning in appropriate cultural contexts include brief overview of ancient scriptures in modern Bharat. These activities include Hindi media, discussion of important Indian and American events, and field trips to live Hindi plays, Hindi movies, and other local traditional ethnic cultural activities that will familiarize students with perspectives, practices and products of Hindi speaking regions of the world.',
    requirements: 'Basic Hindi language understanding and speaking',
    schedule: [
      { day: 'Thursday ', time: '7:00PM to 9:00PM' },
      { day: 'Friday', time: '6:00PM to 9:30PM' }
    ]
  },
  {
    id: 'hlp-3',
    number: 3,
    year: 2,
    title: 'HLP Level III',
    subtitle: 'INTERMEDIATE HINDI LANGUAGE',
    aboutCourse: 'HLP III takes students closer to the language and culture of India, and Hindi speaking parts of the World. The overall goal is to develop functional communicative abilities in students to express basic communication needs with confidence. The skills of speaking, listening, reading and writing in Hindi will be attained by students being exposed to rich authentic linguistic and cultural teaching contexts that emphasize students developing competency in Hindi language and culture. Students will develop an appreciation for the culture of India. The course objectives include improving communication skills and understanding of cultural aspects. Cultural activities are arranged to provide each student with opportunities to enhance language and cultural learning. These activities include Hindi movies, discussion on important Indian and American events, and field trips to local traditional Indian music programs and/or festivities, and reading and listening to news in Hindi. To share his/her daily routine using appropriate verbs and time, or figure out a day and time for two friends to plan for a movie outing based on their activities and schedule. To demonstrate understanding of shopping for general merchandise, and clothes with proper size and color.',
    requirements: 'Completion of HLP II or intermediate Hindi knowledge',
    schedule: [
      { day: 'Monday', time: '6PM to 8:30PM' },
      { day: 'Thursday', time: '6PM to 8:30PM' }
    ]
  },
  {
    id: 'hlp-4',
    number: 4,
    year: 2,
    title: 'HLP Level IV',
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
    year: 3,
    title: 'HLP Level V',
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
    year: 3,
    title: 'HLP Level VI',
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
    year: '4 ',
    title: 'HLP Level VII',
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
    year: '4',
    title: 'HLP Level VIII',
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
  const formSectionRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

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
          {/* Register Button */}
          <div className="flex justify-center mb-12">
            <button
              onClick={scrollToForm}
              className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              Register Now
            </button>
          </div>

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
                {/* Card with full image background (image includes its own border) */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img
                    src={hlpLevelImages[level.number]}
                    alt={level.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

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

      {/* Registration Form Section */}
      <section className="py-20 bg-white border-t border-slate-200" ref={formSectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Register for Hindi Language Program</h2>
            <p className="text-lg text-slate-600">Complete the form below to enroll in our program</p>
          </div>
          
          <div className="w-full rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm">
            <iframe
              title="Hindi Language Program Registration Form"
              src="https://form.jotform.com/212636166881158"
              width="100%"
              height="1200"
              frameBorder="0"
              className="block"
              style={{ minHeight: '1200px' }}
            />
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
                <div className="w-40 h-40 rounded-xl overflow-hidden shadow-sm">
                  <img
                    src={hlpLevelImages[selectedLevel.number]}
                    alt={selectedLevel.title}
                    className="w-full h-full object-cover"
                  />
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
                <h3 className="text-xl font-bold text-slate-900 mb-4">CLASS SCHEDULE FOR 2026-2027</h3>
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
