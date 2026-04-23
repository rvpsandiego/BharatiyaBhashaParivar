import { Link } from 'react-router-dom';

export default function Registration() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-slate-900 mb-6">All Registration Links</h1>
      <p className="mb-8 text-slate-700">Choose a program from below to register.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link to="/registration/hindi-bhasha-program" className="p-5 rounded-lg border border-slate-200 hover:border-orange-500 hover:bg-orange-50 text-slate-900 font-semibold">Hindi Bhasha Program</Link>
        <Link to="/registration/hindi-language-program" className="p-5 rounded-lg border border-slate-200 hover:border-orange-500 hover:bg-orange-50 text-slate-900 font-semibold">Hindi Language Program</Link>
        <Link to="/registration/bbp-marathi" className="p-5 rounded-lg border border-slate-200 hover:border-orange-500 hover:bg-orange-50 text-slate-900 font-semibold">BBP Marathi</Link>
        <Link to="/registration/bbp-gujrati" className="p-5 rounded-lg border border-slate-200 hover:border-orange-500 hover:bg-orange-50 text-slate-900 font-semibold">BBP Gujrati</Link>
      </div>
    </div>
  );
}
