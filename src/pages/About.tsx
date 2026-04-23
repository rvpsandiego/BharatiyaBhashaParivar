import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Award, ShieldCheck, BookOpen, Heart } from 'lucide-react';
import { GraduationCap, Languages, Users, MessageCircle, Baby } from 'lucide-react';



export default function About() {
  const programs = [
    {
      title: "Hindi Bhasha Program",
      description: "Kindergarten - 8th grade Hindi language program with a focus on literacy, cultural education, and community connection.",
      icon: Languages,
      color: "bg-pink-50 text-pink-600",
      features: ["Ages 5+", "Early Childhood", "Cultural Curriculum"]
    },
    
    {
      title: "Hindi Language Program",
      description: "Comprehensive Hindi classes focusing on reading, writing, and conversational fluency.",
      icon: Languages,
      color: "bg-orange-50 text-orange-600",
      features: ["All Ages", "Beginner to Advanced", "Cultural Context"]
    },
    {
      title: "Bharatiya Bhasha Parivaar Marathi",
      description: "Structured Marathi learning from basic phonetics to advanced literature and conversation.",
      icon: BookOpen,
      color: "bg-emerald-50 text-emerald-600",
      features: ["Reading & Writing", "Spoken Marathi", "Heritage Focus"]
    },
    {
      title: "Bharatiya Bhasha Parivaar Gujarati",
      description: "Explore the rich linguistic diversity of India through our specialized regional language tracks.",
      icon: Users,
      color: "bg-purple-50 text-purple-600",
      features: ["Gujarati", "Custom Tracks", "Community Driven"]
    },
    {
      title: "High School Credit Program",
      description: "Earn valid high school language credits while learning Indian languages. Affiliated with major school districts.",
      icon: GraduationCap,
      color: "bg-blue-50 text-blue-600",
      features: ["Levels 1 & 2", "ACTFL Approved", "District Affiliated"]
    },
    {
      title: "Adult Conversational Classes",
      description: "Tailored language classes for adults focusing on practical conversation and cultural connection.",
      icon: MessageCircle,
      color: "bg-indigo-50 text-indigo-600",
      features: ["Flexible Schedule", "Practical Usage", "Travel Ready"]
    }
  ];
  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Dedicated to preserving and promoting Indian languages, culture, and heritage for the next generation.
          </motion.p>
        </div>
      </div>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Heart className="text-orange-500 w-8 h-8" /> Our Vision
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Bharatiya Bhasha was founded with a clear vision: to create a vibrant learning environment where children growing up in California can connect deeply with their Indian roots through language. Bringing the richness of Bharat and languages to the forefront, we aim to foster a strong sense of identity, pride, and cultural understanding among our students.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe that language is the gateway to culture. By teaching Hindi and other Indian languages, we empower students to communicate with their extended families, understand their rich heritage, and build a strong, confident identity in a multicultural world.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
              src="/images/side-image-1.jpg" 
              alt="Our Vision" 
              className="rounded-2xl shadow-xl"
              referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-2 border-orange-500 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>


       {/* Programs Grid */}
       <section className="py-20 bg-slate-50">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Programs</h2>
            <p className="text-lg text-slate-600">
              Our comprehensive programs are designed to nurture language skills, cultural understanding, and community connection for learners of all ages.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${program.color}`}>
                  <program.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{program.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                {program.title === "Hindi Language Program" ? (
                  <Link 
                    to="/registration/hindi-language-program"
                    className="mt-8 w-full py-3 px-4 bg-slate-50 hover:bg-orange-50 text-orange-600 font-semibold rounded-xl transition-colors border border-slate-200 hover:border-orange-200 block text-center"
                  >
                    Learn More
                  </Link>
                ) : (
                  <button className="mt-8 w-full py-3 px-4 bg-slate-50 hover:bg-orange-50 text-orange-600 font-semibold rounded-xl transition-colors border border-slate-200 hover:border-orange-200">
                    Learn More
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

            {/* Accreditation */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Accreditation & Affiliations</h2>
            <p className="text-lg text-slate-600">
              We maintain the highest educational standards, recognized by leading accreditation bodies and school districts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center"
            >
              <div className="w-16 h-16 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Cognia & SACS CASI</h3>
              <p className="text-slate-600">
                Earned accreditation from the Southern Association of Colleges and Schools Council on Accreditation and School Improvement, an accreditation division of Cognia.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center"
            >
              <div className="w-16 h-16 mx-auto bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">School Districts</h3>
              <p className="text-slate-600">
                Authorized to award high school credits. Affiliated with major school districts in California and beyond, allowing students to earn Language Credits 1 and 2.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center"
            >
              <div className="w-16 h-16 mx-auto bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">ACTFL Approved</h3>
              <p className="text-slate-600">
                Our curriculum is designed by language experts and approved by the American Council on the Teaching of Foreign Languages (ACTFL).
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
