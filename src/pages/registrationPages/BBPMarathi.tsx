export default function BBPMarathi() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-slate-900 mb-6">Bhartiya Bhasha Parivaar Marathi</h1>
      <p className="mb-8 text-slate-700">Please complete the registration form below.</p>
      <div className="w-full min-h-[700px] rounded-xl overflow-hidden border border-slate-200">
        <iframe
          title="BBP Marathi Registration"
          src="https://form.jotform.com/260615248880057"
          width="100%"
          height="1200"
          frameBorder="0"
          className="block"
        />
      </div>
    </div>
  );
}
