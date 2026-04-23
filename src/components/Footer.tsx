import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="bg-orange-600 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-xl text-white block leading-tight">Bharatiya Bhasha Parivaar</span>
                <span className="text-xs text-orange-400 font-medium tracking-wider uppercase">Language School</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering the next generation with the rich heritage of Indian languages and culture in California.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-orange-400 transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-400 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-orange-400 transition-colors text-sm">Programs</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400 transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Programs</h3>
            <ul className="space-y-3">
              <li><Link to="/programs" className="hover:text-orange-400 transition-colors text-sm">Hindi Bhasha</Link></li>
              <li><Link to="/programs" className="hover:text-orange-400 transition-colors text-sm">Hindi Language Program</Link></li>
              <li><Link to="/programs" className="hover:text-orange-400 transition-colors text-sm">BBP Marathi</Link></li>
              <li><Link to="/programs" className="hover:text-orange-400 transition-colors text-sm">BBP Gujrati</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-sm">California, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-500 shrink-0" />
                <a href="tel:+18582297329" className="text-sm hover:text-orange-400 transition-colors">+1 (858)-229-5820</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-500 shrink-0" />
                <a href="mailto:support@bharatiyabhasha.org" className="text-sm hover:text-orange-400 transition-colors">support@bharatiyabhasha.org</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Bharatiya Bhasha Language School. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
