import Roadmap from '@/components/Roadmap';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">
          Welcome to <span className="text-green-400">SNOWMAP</span>
        </h1>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-8">
          Your structured roadmap to mastering the ServiceNow ecosystem. 
          From Novice to Architect, one step at a time.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#roadmap" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all">
            Start Learning
          </a>
          <a href="https://developer.servicenow.com" target="_blank" className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-all">
            Get a PDI
          </a>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">The Learning Journey</h2>
          <p className="text-slate-600">
            Follow the path below to build your skills. Click on modules to dive deep.
          </p>
        </div>
        <Roadmap />
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200 text-center text-slate-500 text-sm">
        © 2026 SNOWMAP. Built for ServiceNow Professionals.
      </footer>
    </main>
  );
}
