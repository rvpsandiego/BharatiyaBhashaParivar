import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Globe, Users, Award, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://picsum.photos/seed/indianculture/1920/1080?blur=2" 
            alt="Indian Culture Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32 lg:py-40">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 text-orange-300 text-sm font-semibold tracking-wider mb-6 border border-orange-500/30">
              ACCREDITED LANGUAGE SCHOOL
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Connecting Kids to Their <span className="text-orange-500">Roots</span> Through Language
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
              Bharatiya Bhasha offers comprehensive Indian language programs for students in California. Earn high school credits while discovering your cultural heritage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/programs" 
                className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-full font-medium text-center transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-600/30"
              >
                Explore Programs <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/contact" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full font-medium text-center transition-all"
              >
                Contact Admissions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Features Section */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Expert Teachers", desc: "Native speakers with years of experience" },
              { icon: Award, title: "Accredited", desc: "SACS CASI & Cognia recognized" },
              { icon: BookOpen, title: "HS Credits", desc: "Earn valid high school language credits" },
              { icon: Globe, title: "Cultural Immersion", desc: "Learn language through rich traditions" }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 hover:bg-orange-50 transition-colors border border-slate-100"
              >
                <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-amber-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <img 
                  src="https://picsum.photos/seed/learning/800/600" 
                  alt="Students learning" 
                  className="rounded-2xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map(i => (
                        <img key={i} src={`https://picsum.photos/seed/face${i}/40/40`} className="w-10 h-10 rounded-full border-2 border-white" alt="Student" referrerPolicy="no-referrer" />
                      ))}
                    </div>
                    <div className="text-sm font-bold text-slate-900">500+ Students</div>
                  </div>
                  <p className="text-xs text-slate-500">Join our rapidly growing community in California</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Choose Bharatiya Bhasha?
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We are dedicated to preserving and promoting Indian languages and culture. Our structured curriculum is designed by language experts and approved by ACTFL, ensuring the highest quality of education for your children.
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  "Accredited by SACS CASI (Cognia)",
                  "Authorized to award High School credits",
                  "Affiliated with major School Districts",
                  "Interactive virtual and in-person classes",
                  "Focus on reading, writing, and conversational skills"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition-colors"
              >
                Read Our Full Story <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Parents Say</h2>
            <p className="text-lg text-slate-600">
              Hear from our community of parents who have seen their children thrive and connect with their cultural roots.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Neha Nangia",
                text: "Our kids have been part of the school this past year. We have loved how much Hindi our kids have learned including reciting prayers, conversing and understanding the culture. The virtual program is very structured and engaging."
              },
              {
                name: "Saurabh Goyal",
                text: "Our son is enrolled for the high school credit program. The teachers are so dedicated in teaching the language and also infusing the culture into the learning. Thank you to the entire team."
              },
              {
                name: "Roshni Sahu",
                text: "I really appreciate all your hard work and support provided to my kids. It's not just speaking but reading and writing as well. What I like most is how it connects our kids with our Sanskriti."
              }
            ].map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative"
              >
                <div className="text-orange-400 mb-4">
                  <svg className="w-10 h-10 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-slate-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center text-orange-700 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start the Journey?</h2>
          <p className="text-xl text-orange-100 mb-10">
            Enroll your child today and give them the gift of language and cultural connection.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-colors shadow-xl"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}
