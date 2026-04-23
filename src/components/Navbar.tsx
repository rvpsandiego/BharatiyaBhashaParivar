import { Link } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-orange-600 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-xl text-slate-900 block leading-tight">Bharatiya Bhasha Parivaar</span>
                <span className="text-xs text-orange-600 font-medium tracking-wider uppercase">Language School</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-600 hover:text-orange-600 font-medium transition-colors">Home</Link>
            <Link to="/about" className="text-slate-600 hover:text-orange-600 font-medium transition-colors">About Us</Link>
            <Link to="/programs" className="text-slate-600 hover:text-orange-600 font-medium transition-colors">Programs</Link>
          

            <div className="relative group">
              <span className="cursor-pointer text-slate-600 hover:text-orange-600 font-medium transition-colors">Registration ▾</span>
              <div className="absolute left-0 mt-2 w-64 rounded-lg bg-white shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-40">
                <Link to="/registration" className="block px-4 py-2 text-slate-700 hover:bg-orange-50">All Registration Links</Link>
                <Link to="/registration/hindi-bhasha-program" className="block px-4 py-2 text-slate-700 hover:bg-orange-50">Hindi Bhasha Program</Link>
                <Link to="/registration/hindi-language-program" className="block px-4 py-2 text-slate-700 hover:bg-orange-50">Hindi Language Program</Link>
                <Link to="/registration/bbp-marathi" className="block px-4 py-2 text-slate-700 hover:bg-orange-50">BBP Marathi</Link>
                <Link to="/registration/bbp-gujrati" className="block px-4 py-2 text-slate-700 hover:bg-orange-50">BBP Gujrati</Link>
              </div>
            </div>
            
            <Link to="/contact" className="text-slate-600 hover:text-orange-600 font-medium transition-colors">Contact</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-orange-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-4 pt-2 pb-4 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/programs" 
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Programs
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/registration" 
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Registration
            </Link>
            <div className="space-y-1 pl-4">
              <Link 
                to="/registration/hindi-bhasha-program" 
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Hindi Bhasha Program
              </Link>
              <Link 
                to="/registration/hindi-language-program" 
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Hindi Language Program
              </Link>
              <Link 
                to="/registration/bbp-marathi" 
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                BBP Marathi
              </Link>
              <Link 
                to="/registration/bbp-gujrati" 
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                BBP Gujrati
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
