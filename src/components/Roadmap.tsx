import React from 'react';

const steps = [
  {
    id: 'beginner',
    title: 'Novice',
    description: 'Introduction to ServiceNow, UI, and Basic Navigation.',
    status: 'current',
    modules: ['What is ServiceNow?', 'User Interface', 'Lists & Filters'],
  },
  {
    id: 'admin',
    title: 'Administrator',
    description: 'User management, security, and platform configuration.',
    status: 'locked',
    modules: ['User & Group Mgmt', 'ACLs & Security', 'Dictionary & Tables'],
  },
  {
    id: 'developer',
    title: 'Developer',
    description: 'Scripting, APIs, and automating business processes.',
    status: 'locked',
    modules: ['Client Scripts', 'Business Rules', 'Script Includes'],
  },
  {
    id: 'architect',
    title: 'Architect',
    description: 'Designing complex enterprise solutions and integrations.',
    status: 'locked',
    modules: ['Domain Separation', 'Integrations', 'Performance Tuning'],
  },
];

export default function Roadmap() {
  return (
    <div className="flex flex-col items-center space-y-8 py-12">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div className="relative flex flex-col items-center group">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 transition-all duration-300 ${step.status === 'current' ? 'bg-green-600 scale-110 shadow-lg' : 'bg-slate-400 group-hover:bg-slate-500'}`}>
              {index + 1}
            </div>
            <div className="mt-4 text-center max-w-md">
              <h3 className="text-xl font-bold text-slate-800">{step.title}</h3>
              <p className="text-slate-600 text-sm">{step.description}</p>
              <div className="mt-2 flex flex-wrap justify-center gap-2">
                {step.modules.map(mod => (
                  <span key={mod} className="px-2 py-1 bg-white border border-slate-200 rounded text-xs text-slate-500">{mod}</span>
                ))}
              </div>
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className="w-1 h-12 bg-slate-200 relative">
              <div className={`absolute top-0 left-0 w-full bg-green-500 transition-all duration-500 ${step.status === 'current' ? 'h-0' : 'h-0'}`} />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
